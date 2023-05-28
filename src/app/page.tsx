import React, { Suspense } from "react";
import useSWR from "swr";
import menu from "../../pages/api/menu";

export default async function Home() {
  const data = menu();
  return (
    <div className="grid grid-cols-2 gap-4 flex-1 grow">
      {data && <Menu menu={data} />}
    </div>
  );
}

interface MenuData {
  menu: string;
}

function Menu({ menu }: MenuData) {
  return <>{JSON.stringify(menu)}</>;
}
