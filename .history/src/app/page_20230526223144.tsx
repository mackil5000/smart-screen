import React from "react";
import { JSDOM } from "jsdom";
import Timetable from "./components/timetable";

interface MenuData {
  menu: string[];
}

async function getMenu() {
  const url = "http://carnex.se/";
  const res = await fetch(url);
  const text = await res.text();
  const { document } = new JSDOM(text).window;

  const html = document.querySelectorAll(".second-home-block .day");
  let menu = "";

  html.forEach((e) => (menu += e.textContent));
  let stripped = menu
    .replace(/\t/g, "")
    .split("\n")
    .filter((s) => s !== "");
  return stripped;
}

const Menu = ({ menu }: MenuData) => {
  return (
    <>
      {menu.map((s, i) =>
        !(i % 2) ? (
          <h3 className="font-bold">{s}</h3>
        ) : (
          <p className="indent-2">{s}</p>
        )
      )}
    </>
  );
};

export default async function Home() {
  const menu = await getMenu();

  return (
    <div className="grid grid-cols-2 gap-4 flex-1 grow">
      <div>
        <Menu menu={menu} />
      </div>
      <div>
        <Timetable />
      </div>
    </div>
  );
}
