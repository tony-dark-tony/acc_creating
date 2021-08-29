const TENANT = "5f20e425-5fb0-4475-b7e5-aa83583f0233";
const CLIENT_ID = "dcd26fe1-377f-4df4-8016-6768b168004c";
const SCOPE = "https://graph.microsoft.com/.default";
const CLIENT_SECRET = "73eroOz_G5xfb4g2oIRn.lT52W~.f7b8hp";
const GRANT_TYPE = "client_credentials";

const { Client } = require("@microsoft/microsoft-graph-client");
const {
  TokenCredentialAuthenticationProvider,
} = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { ClientSecretCredential } = require("@azure/identity");

require("isomorphic-fetch");

const credential = new ClientSecretCredential(TENANT, CLIENT_ID, CLIENT_SECRET);
const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: SCOPE,
});
const client = Client.initWithMiddleware({
  debugLogging: true,
  authProvider,
});

module.exports = {
    client: client,
}