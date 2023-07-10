type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      AuthLayout
      {children}
    </div>
  );
};

export default AuthLayout;
