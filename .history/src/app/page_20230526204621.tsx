import React, { Suspense } from "react";
import { JSDOM } from "jsdom";
import useSWR from "swr";

interface MenuData {
  menu: string;
}

export default async function Home() {
  const menu = await getMenu();

  return (
    <div className="grid grid-cols-2 gap-4 flex-1 grow">
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
  return menu;
}

function Menu({ menu }: MenuData) {
  return <>{JSON.stringify(menu)}</>;
}
