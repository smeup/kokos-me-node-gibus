import {
    ExecutionContext,
    Fun,
    KokosService,
    SMEUP_MESSAGE_GRAVITY,
    SMEUP_MESSAGE_MODE,
    SmeupDataColumn,
    SmeupDataRow,
    SmeupDataStructureWriter
} from "@sme.up/kokos-sdk-node";


const ACCOUNT: KokosService = {
    methods: {
        "GET.BY_ID": getById,
        "GET.ALL": getAll,
        "UPD.ALL": updateAccounts,

    },
};

export default ACCOUNT;

type Account = { id: string; name: string };
const accounts: Account[] = [];
for (let i = 0; i < 10; i++) {
    accounts.push({
        id: `${i}`,
        name: `Account ${i}`,
    });
}


/**
 * Get an account by ID.
 * Example payload for the service call:
 * ```
 * {
 *   "fun": {
 *     "component": "EXB",
 *     "service": "ACCOUNT",
 *     "function": "GET.BY_ID",
 *     "P": "ID(1)"
 *   },
 *   "context": {}
 * }
 * ```
 */
async function getById(
    fun: Fun,
    _context: ExecutionContext,
    writer: SmeupDataStructureWriter
) {
    // Read from fun.P (if defined) the value contained in P(ID(value))
    let id: string | undefined = undefined;
    if (typeof fun.P === 'string') {
        // Match ID(value) and extract value
        const match = fun.P.match(/ID\(([^)]+)\)/);
        if (match) {
            id = match[1];
        }
    }
    if (!id) {
        throw new Error("P(ID(id)) not found");
    }
    // Check if id is numeric
    if (!/^\d+$/.test(id)) {
        throw new Error("id must be numeric while the actual value is " + id);
    }
    const account = accounts.find(acc => acc.id === id);
    if (!account) {
        // Optionally handle not found
        return;
    }
    const columns: SmeupDataColumn[] = [
        { name: "ID", title: "Account ID", visible: true },
        { name: "NAME", title: "Account NAME", visible: true },
    ];
    writer.writeDataColumns(columns);
    const row: SmeupDataRow = {
        cells: {
            "ID": { value: account.id },
            "NAME": { value: account.name },
        },
    };
    writer.writeDataRow(row);
}


/**
 * Get all accounts.
 * Example payload for the service call:
 * ```
 * {
 *   "fun": {
 *     "component": "EXB",
 *     "service": "ACCOUNT",
 *     "function": "GET.ALL"
 *   },
 *   "context": {}
 * }
 * ```
 */
async function getAll(
    fun: Fun,
    _context: ExecutionContext,
    writer: SmeupDataStructureWriter
) {
    const columscolumns: SmeupDataColumn[] = [];
    columscolumns.push({
        name: "ID",
        title: "Account ID",
        visible: true,
    });
    columscolumns.push({
        name: "NAME",
        title: "Account NAME",
        visible: true,
    });
    writer.writeDataColumns(columscolumns);

    // Write each account as a data row
    for (const account of accounts) {
        const row: SmeupDataRow = {
            cells: {
                "ID": {
                    value: account.id,
                },
                "NAME": {
                    value: account.name,
                },
            },
        };
        writer.writeDataRow(row);
    }
}

/**
 * Update accounts.
 * Example payload for the service call:
 * ```
 * {
 *   "fun": {
 *     "component": "EXB",
 *     "service": "ACCOUNT",
 *     "function": "UPD.ALL",
 *     "INPUT": "[{\"id\":\"1\",\"name\":\"Updated Account 1\"},{\"id\":\"2\",\"name\":\"Updated Account 2\"}]"
 *   },
 *   "context": {}
 * }
 * ```
 */
async function updateAccounts(
    fun: Fun,
    _context: ExecutionContext,
    writer: SmeupDataStructureWriter
) {
    // Read accounts from fun.INPUT (should be a JSON string representing an array of Account)
    let inputAccounts: Account[] = [];
    if (typeof fun.INPUT === 'string') {
        try {
            const parsed = JSON.parse(fun.INPUT);
            if (Array.isArray(parsed)) {
                inputAccounts = parsed.filter(acc => typeof acc.id === 'string' && typeof acc.name === 'string');
            }
        } catch (e) {
            throw new Error('Invalid JSON in fun.INPUT');
        }
    }
    if (inputAccounts.length === 0) {
        throw new Error('No valid accounts provided in fun.INPUT');
    }
    // Update existing accounts and add new ones
    for (const inputAcc of inputAccounts) {
        const existing = accounts.find(acc => acc.id === inputAcc.id);
        if (existing) {
            existing.name = inputAcc.name;
        } else {
            accounts.push({ id: inputAcc.id, name: inputAcc.name });
        }
    }
    writer.writeMessage({
        gravity: SMEUP_MESSAGE_GRAVITY.INFO,
        message: "Accounts updated successfully",
        mode: SMEUP_MESSAGE_MODE.PM
    });

}






