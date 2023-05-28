import { NextApiRequest, NextApiResponse } from "next";
import { TimeTable } from "./getTimeTable.types";

const ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740015924&format=json&accessId=${process.env.RESROBOT_API_KEY}`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const res = await fetch(ENDPOINT);
  const { Departure }: TimeTable = await res.json();

  const returnData = Departure.map(({ stop, time, direction }) => ({
    stop,
    time,
    direction,
  }));

  return response.json(returnData);
}
