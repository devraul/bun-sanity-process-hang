import { createClient } from "@sanity/client";

const apiClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "v2022-03-07",
  useCdn: false,
});

const response = await apiClient.fetch("*");

console.log(response);
