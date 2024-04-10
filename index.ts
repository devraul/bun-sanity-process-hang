/**
 * dotenv/config is here for when we run this code with TSX.
 */
import "dotenv/config";
import { createClient } from "@sanity/client";

const apiClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: false,
});

const response = await apiClient.fetch("*");

console.log(response);
