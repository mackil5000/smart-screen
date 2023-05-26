import { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const url = "http://carnex.se/";

  const res = await fetch(url);
  const text = await res.text();
  const { document } = new JSDOM(text).window;

  const html = document.querySelectorAll(".second-home-block .day");
  let menu = "";

  html.forEach((e) => (menu += e.textContent));
  return response.end(menu);
}
