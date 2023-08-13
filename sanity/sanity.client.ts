import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "",
  dataset: "",
  apiVersion: "",
  token: "",
  useCdn: false,
};

const client = createClient(config);

export default client;
