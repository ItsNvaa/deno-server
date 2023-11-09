import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import app from "./main.ts";
import logger from "./configs/logger.ts";
const env = config();
const PORT = 8000 || env.PORT;

app.listen(PORT, (): void => {
  logger.info("Listening at http://localhost:8000");
});
