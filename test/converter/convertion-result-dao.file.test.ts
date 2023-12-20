import { ConversionResult } from '../../src/converter/types';
import { ConversionResultDaoFileSystem } from '../../src/converter/convertion-result-dao.file';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

const rootPath = path.resolve(os.tmpdir());
if (!fs.existsSync(rootPath)) {
    fs.mkdirSync(rootPath);
}

const overwrite = false;
const conversionResultDao = new ConversionResultDaoFileSystem(rootPath, overwrite);
const ruleId = "rule1";
const rulePath = path.resolve(rootPath, `${ruleId}.ts`);

beforeEach(() => {
    // Clear any existing files in the rootPath
    // You can implement this logic based on your requirements
    if (fs.existsSync(rulePath)) {
        fs.rmSync(rulePath);
    }
});

it('should save conversion result to the specified path', () => {
    const result: ConversionResult = {
        ruleId: ruleId,
        javaScript: 'console.log("Hello, World!");',
    };

    conversionResultDao.saveConversionResult(result);

    // Assert that the file is saved to the correct path
    // You can implement this logic based on your requirements
    expect(fs.existsSync(rulePath)).toBe(true);
});

xit('should throw an error if the file already exists and overwrite is set to false', () => {
    const result: ConversionResult = {
        ruleId: ruleId,
        javaScript: 'console.log("Hello, World!");',
    };

    // Create a dummy file at the destination path to simulate an existing file
    // You can implement this logic based on your requirements
    conversionResultDao.saveConversionResult(result);
    // TODO - Uncomment the following line to simulate an existing file
    // expect(() => conversionResultDao.saveConversionResult(result)).toThrow();
});
