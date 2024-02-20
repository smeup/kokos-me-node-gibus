import { DbAccessConfig, ITypeProvider } from "./types";
import { Connection, pool } from 'node-jt400';

type Row = {
    TTELEM: string;
};

/**
 * Represents a database type provider which provides information about the type of variables from a database table SMETAB.TABEL00F.
 */
class TypeProviderDb implements ITypeProvider {

    private readonly config: DbAccessConfig;
    private numericVars: string[] | null = null;

    constructor(config: DbAccessConfig) {
        this.config = config;
    }

    /**
     * Initializes the type provider by querying the database for numeric variables.
     * The table SMETAB.TABEL00F is queried for variables with TTSETT='CFD' and SUBSTR(TTLIBE, 21, 2) = 'NR'.
     * @returns A promise that resolves when the initialization is complete.
     */
    async init(): Promise<void> {
        let myPool: Connection;
        if (process.env.NODE_ENV === 'test') {
            myPool = require("node-jt400").pool(this.config);
        } else {
            myPool = pool(this.config);
        }
        try {
            const rows: Row[] = await myPool.query("SELECT TTELEM  FROM SMETAB.TABEL00F WHERE TTSETT='CFD' AND SUBSTR(TTLIBE, 21, 2) = 'NR'");
            this.numericVars = [];
            for (let row of rows) {
                this.numericVars.push(row.TTELEM);
            }

        } finally {
            myPool.close();
        }
    }

    /**
    * Checks if a given name is numeric.
    * @param name The name of the variable.
    * @returns True if the variable is a numeric type, false otherwise.
    * @throws An error if the type provider has not been initialized.
    * @see {@link init}
    */
    isNumericType(name: string): boolean {
        if (this.numericVars === null) {
            throw new Error("TypeProviderDb not initialized");
        } else {
            return this.numericVars.includes(name);
        }
    }
}

export { TypeProviderDb }