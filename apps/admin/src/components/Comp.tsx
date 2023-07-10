"use client";

import { Apis, Configuration } from "@shop-mall/http-client";

import { useEffect } from "react";
const aaa = new Apis.AdminApi(
  new Configuration({
    basePath: "https://wafgamio15.com",
  }),
);
export const Comp = () => {
  useEffect(() => {
    console.log("--------------");

    aaa.adminLogin({
      username: "name",
      password: "pa",
    })();

    console.log("dwadadwdwadwadw");
  }, []);
  return <div>ACS</div>;
};
