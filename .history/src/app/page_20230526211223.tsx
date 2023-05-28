import React from "react";
import { JSDOM } from "jsdom";

interface MenuData {
  menu: string[];
}

export default async function Home() {
  const menu = await getMenu();

  return (
    <div className="grid grid-cols-1 gap-4 flex-1 grow">
      <Menu menu={menu} />
    </div>
  );
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
  return <>{menu.map((s, i) => (!(i % 2) ? <h3>{s}</h3> : <p>{s}</p>))}</>;
};
