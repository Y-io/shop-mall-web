import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      login page <Link href={"/register"}>GO Register</Link>
    </div>
  );
};

export default LoginPage;
