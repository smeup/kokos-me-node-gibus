/**
 * The username to use for the IBM database.
 * @property user - The username to use for the IBM database read from the environment variable ME_GIBUS_USER.
 */
const user = process.env.ME_GIBUS_USER || "setme";

/**
 * The password to use for the IBM database.
 * @property password - The password to use for the IBM database read from the environment variable ME_GIBUS_PASSWORD.
 */
const password = process.env.ME_GIBUS_PASSWORD || "setme";

/**
 * The host to use for the IBM database.
 * @property host - The host to use for the IBM database read from the environment variable ME_GIBUS_HOST.
 */
const host = process.env.ME_GIBUS_HOST || "setme";

export { user, password, host };