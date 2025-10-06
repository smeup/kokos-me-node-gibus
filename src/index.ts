import { startServer, LOGGER } from "@sme.up/kokos-sdk-node";
import { setTypeProvider, getDbAccessConfig } from "./converter/utils";
import { TypeProviderDb } from "./converter/type-provider.db";

(async () => {
  LOGGER.info("Creating type provider...");
  const dbAccessConfig = getDbAccessConfig();
  if (dbAccessConfig) {
    LOGGER.info("Initing TypeProviderDb db...");
    let typeProvider = new TypeProviderDb(dbAccessConfig);
    await typeProvider.init();
    setTypeProvider(typeProvider);
  } else {
    LOGGER.info(
      "Database access configuration not provided I am going to use default type provider"
    );
  }
  startServer("me-node-gibus");
})();
