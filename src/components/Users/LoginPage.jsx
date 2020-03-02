import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { useRouter } from "../../customHooks/use-router";
import { toast } from "react-toastify";

export default function LoginPage() {
  const { location } = useRouter();
  const { from } = location.state || { from: "/" };

  useEffect(() => {
    if (from === "/signup") {
      toast.success("Account successfully created!");
    }
  }, []);

  return (
    <>
      <h1 className="brand-text text-center">Login</h1>
      <hr />
      <LoginForm />
      <Link className="text-center" to="/signup">
        <p className="py-2">Don't have an account? Register here!</p>
      </Link>
    </>
  );
}
