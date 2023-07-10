"use client";

import { ProLayout } from "@ant-design/pro-components";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ProLayout bgLayoutImgList={[]} items={[]}>
      {children}
    </ProLayout>
  );
};
