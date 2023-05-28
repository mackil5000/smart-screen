import { NextApiRequest, NextApiResponse } from "next";
import { TimeTable } from "./getTimeTable.types";

const ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740015924&format=json&accessId=${process.env.RESROBOT_API_KEY}`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const res = await fetch(ENDPOINT);
  const json: TimeTable = await res.json();
  return response.json(json);
}
