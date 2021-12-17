import { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: "Hello TypeScript, This is cool stuff",
  };
};
