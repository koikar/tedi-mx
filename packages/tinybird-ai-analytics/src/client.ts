import { Tinybird } from "@chronark/zod-bird";

let tb: Tinybird;

export const getTinybird = () => {
  if (!process.env.TINYBIRD_TOKEN_AI) return;

  if (!tb) {
    tb = new Tinybird({
      token: process.env.TINYBIRD_TOKEN_AI,
      baseUrl: process.env.TINYBIRD_BASE_URL_AI,
    });
  }

  return tb;
};
