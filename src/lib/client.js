import { SanityClient } from "@sanity/client";

export const client =  new SanityClient({
    projectId: "bi9irnfr",
    dataset: "production",
    apiVersion: "2023-06-28",
    useCdn: true,
})