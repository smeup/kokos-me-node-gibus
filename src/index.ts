import { startServer, LOGGER } from "@sme.up/kokos-sdk-node";
import { setTypeProvider, getDbAccessConfig } from "./converter/utils.js";
import { TypeProviderDb } from "./converter/type-provider.db.js";


LOGGER.info("Creating type provider...");
const dbAccessConfig = getDbAccessConfig();
if (dbAccessConfig) {
    LOGGER.info("Initing TypeProviderDb db...");
    let typeProvider = new TypeProviderDb(dbAccessConfig);
    await typeProvider.init();
    setTypeProvider(typeProvider);
} else {
    LOGGER.error(new Error("Database access configuration not set, cannot initialize type provider."));
}
startServer("me-node-gibus");