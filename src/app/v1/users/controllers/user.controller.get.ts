// @ts-ignore
import { Response, Request } from "npm:express";
import Responses from "../../../../utils/res.ts";
import validator from "npm:validator";
import client from "../../../../configs/client.ts";
const response = new Responses();

export async function users(req: Request, res: Response): Promise<void> {
  try {
    const { skip, limit } = req.query;
    const users = await client.user.findMany({
      skip: parseInt(skip) || 0,
      take: parseInt(limit) || (await client.user.findMany()).length,
    });
    return response.success(res, "users", users);
  } catch (err) {
    return response.badRequest(res);
  }
}

export async function user(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    if (!validator.isUUID(id))
      return response.badRequest(res, "Please insert the rights User ID!");
    const user = await client.user.findUnique({
      where: { id },
    });
    if (!user) return response.notFound(res);
    return response.succesWithSingleData(user, "user", res);
  } catch (err) {
    return response.badRequest(res);
  }
}

export async function searchUsers(req: Request, res: Response): Promise<void> {
  try {
    const { q } = req.query;
    const users = await client.user.findMany({
      where: {
        name: {
          search: String(q),
        },
      },
    });
    if (users.length < 1) return response.notFound(res);

    response.success(res, "users", users);
  } catch (err) {
    return response.badRequest(res);
  }
}
