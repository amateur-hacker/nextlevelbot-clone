import React from "react";
import Link from "next/link";
import Login from "@/src/components/signin/Login";
import { checkAuthenticationLogin } from "@/src/components/signin/Login";

const page = () => {

  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
