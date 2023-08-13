import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION,
  token: process.env.TOKEN,
  useCdn: false,
};

const client = createClient(config);

export default client;
