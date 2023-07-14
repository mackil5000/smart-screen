import React, { useEffect, useState } from "react";
import { JSDOM } from "jsdom";
import Timetable from "./components/timetable/Timetable";
import Visitors from "./components/Visitors";
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
  const heading = (s: string) => <h3 className="font-bold">{s}</h3>;
  const desc = (s: string) => <p className="indent-2">{s}</p>;
  return <>{menu.map((s, i) => (!(i % 2) ? heading(s) : desc(s)))}</>;
};

export default async function Home() {
  const menu = await getMenu();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 40,
        justifyContent: "space-evenly",
      }}
    >
      <div
        className="p-2"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0px 0px 40px #00000024",
        }}
      >
        <img src="https://baconmockup.com/300/300" alt="" />
        <h2>This weeks Carnex lunch menu</h2>
        <Menu menu={menu} />
      </div>
      <Visitors />
      <div
        className="p-2"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0px 0px 40px #00000024",
        }}
      >
        <h2>Departures from Krusegränd</h2>
        {/* @ts-expect-error */}
        <Timetable />
      </div>
    </div>
  );
}
