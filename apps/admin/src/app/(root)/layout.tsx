import { RootLayout } from "@/components/RootLayout";

type AuthLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: AuthLayoutProps) => {
  return <RootLayout>{children}</RootLayout>;
};

export default MainLayout;
