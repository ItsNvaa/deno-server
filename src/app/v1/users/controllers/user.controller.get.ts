// @ts-ignore
import { Response, Request } from "npm:express";
import Responses from "../../../../utils/res.ts";
import client from "../../../../configs/client.ts";
const response = new Responses();

export async function users(req: Request, res: Response) {
  try {
    const users = await client.user.findMany();
    response.success(res, "users", users);
  } catch (err) {
    console.log(err);
  }
}
