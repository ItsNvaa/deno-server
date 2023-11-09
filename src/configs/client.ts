import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { PrismaClient } from "../../generated/client/deno/edge.ts";
import { withAccelerate } from "npm:@prisma/extension-accelerate";
const env: DotenvConfig = await config();

const client = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
}).$extends(withAccelerate());

export default client;
