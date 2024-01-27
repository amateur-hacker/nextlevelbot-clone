"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
// import { checkAuthentication } from "@/src/utils/auth";

const Home = () => {
  const router = useRouter();
  const checkAuthenticationHome = useCallback(() => {
    const authtoken = Cookies.get("authtoken");
    const userid = Cookies.get("userid");
    if (!authtoken && !userid) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    checkAuthenticationHome();
  }, [checkAuthenticationHome]);

  const logoutUser = async (e) => {
    try {
      e.preventDefault();

      toast("Logout Successfully");

      const authtoken = Cookies.get("authtoken");
      const userid = Cookies.get("userid");
      if (authtoken && userid) {
        Cookies.remove("userid");
        Cookies.remove("authtoken");
      }
      checkAuthenticationHome();
    } catch (error) {
      console.log(`Error coming from logoutUser function: ${error.message}`);
    }
  };

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("https://nextlevelpine.com/nlbweb/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: "sachin1234@gmail.com",
          password: "sachin1234@,",
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.userId && data.authToken) {
        Cookies.set("userid", data.userId, { expires: 1 });
        Cookies.set("authtoken", data.authToken, { expires: 1 });
      }

      toast(`${data.message}`);
    } catch (error) {
      console.log(`Error coming from loginUser function: ${error.message}`);
    }
  };

  return (
    <div className="">
      <nav className="min-h-[80px] h-full flex justify-between items-center border-b-2 px-4">
        <button
          className="bg-gray-900 px-3 py-2 rounded-lg text-white"
          onClick={loginUser}
        >
          Login
        </button>
        <button
          className="bg-gray-900 px-3 py-2 rounded-lg text-white"
          onClick={logoutUser}
        >
          Logout
        </button>
      </nav>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default Home;
