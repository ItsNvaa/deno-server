// @ts-ignore
import { Response } from "npm:express";

class Responses {
  success = function (res: Response, key: string, datas: any[]): void {
    res.status(200).json({
      [key]: datas,
      status: 200,
      total: datas.length,
    });
  };
  succesWithSingleData = function (
    data: any[],
    key: string,
    res: Response
  ): void {
    res.status(200).json({
      [key]: data,
      status: 200,
    });
  };
}

export default Responses;
