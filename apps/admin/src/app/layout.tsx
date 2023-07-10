"use client";
import "./globals.css";
import "antd/dist/reset.css";

import { Providers } from "@/components/Providers";
import { PropsWithChildren, useState } from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import { renderToString } from "react-dom/server";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <StyleProviderLayout>
          <Providers>{children}</Providers>
        </StyleProviderLayout>
      </body>
    </html>
  );
}

function StyleProviderLayout({ children }: PropsWithChildren) {
  const [cache] = useState(() => createCache());

  const render = <>{children}</>;

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== "undefined") {
    return render;
  }

  const html = renderToString(
    <StyleProvider hashPriority="high" cache={cache}>
      {render}
    </StyleProvider>,
  );

  return html;
}
