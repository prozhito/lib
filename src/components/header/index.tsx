import React, { useEffect } from "react";
import { HeaderContent } from "./header";
import { getContextData } from "../../api/getServerData";

export function Header() {
  const { data, error, isLoading } = getContextData();

  useEffect(() => {
    // TODO: 500 page
    if (!isLoading && (error || !data)) throw new Error("500");
  }, [isLoading]);

  if (!data) return <header></header>;

  return <HeaderContent logos={data.logos} main_menu={data.main_menu} />;
}
