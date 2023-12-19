import { ConversionResult, IConversionResultDao } from "./types"
import * as path from 'path';
import * as fs from 'fs';

class ConversionResultDaoFileSystem implements IConversionResultDao {

    private rootPath: string;
    private overwrite: boolean;

    constructor(rootPath: string, overwrite: boolean = false) {
        this.rootPath = rootPath;
        this.overwrite = overwrite;
    }

    saveConversionResult(result: ConversionResult): void {
        const destPath = path.resolve(this.rootPath, `${result.ruleId}.ts`);
        if (fs.existsSync(destPath) && !this.overwrite) {
            throw new Error(`File ${destPath} already exists and overwrite is set to false.`);
        }
        fs.writeFileSync(destPath, result.javaScript);
    }

}

export { ConversionResultDaoFileSystem as ConversionResultDaoFileSystem }