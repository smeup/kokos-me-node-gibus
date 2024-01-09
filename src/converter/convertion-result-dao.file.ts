import { ConversionResult, IConversionResultDao } from "./types"
import * as path from 'path';
import * as fs from 'fs';

class ConversionResultDaoFileSystem implements IConversionResultDao {

    private rootPath: string;
    private overwrite: boolean;

    /**
     * Creates a new instance of the ConversionResultDaoFileSystem class.
     * @param rootPath The root path where the conversion results will be saved.
     * @param overwrite Indicates whether the conversion results should be overwritten if they already exist. Default is true.
     */
    constructor(rootPath: string, overwrite: boolean = true) {
        this.rootPath = rootPath;
        this.overwrite = overwrite;
    }

    saveConversionResult(result: ConversionResult): void {
        const destPath = path.resolve(this.rootPath, `${result.ruleId}.ts`);
        if (this.overwrite) {
            fs.rmSync(destPath, { force: true })
        }
        fs.writeFileSync(destPath, result.javaScript);
    }

}

export { ConversionResultDaoFileSystem as ConversionResultDaoFileSystem }