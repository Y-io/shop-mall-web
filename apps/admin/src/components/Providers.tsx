"use client";

import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, App } from "antd";
import { appQueryClient } from "@/constants";

type ProvidersProps = PropsWithChildren;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <ConfigProvider>
        <App>{children}</App>
      </ConfigProvider>
    </QueryClientProvider>
  );
};
