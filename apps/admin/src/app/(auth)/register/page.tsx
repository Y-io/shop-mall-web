import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      Register page <Link href={"/login"}>GO Login</Link>
    </div>
  );
};

export default RegisterPage;
