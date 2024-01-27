"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
// import { checkAuthentication } from "@/src/utils/auth";
import { RandomAvatar } from "react-random-avatars";
import Image from "next/image";
import generateName from "sillyname";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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

  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("username");

  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== "undefined") {
      const userIdFromCookie = Cookies.get("userid");
      const randomName = generateName();
      setUserId(userIdFromCookie);
      setUserName(randomName)

    }
  }, []);

  useEffect(() => {
    checkAuthenticationHome();
  }, [checkAuthenticationHome]);

  const logoutUser = (e) => {
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

  // const loginUser = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const response = await fetch("https://nextlevelpine.com/nlbweb/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({
  //         email: "sachin1234@gmail.com",
  //         password: "sachin1234@,",
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     if (data.userId && data.authToken) {
  //       Cookies.set("userid", data.userId, { expires: 1 });
  //       Cookies.set("authtoken", data.authToken, { expires: 1 });
  //     }

  //     toast(`${data.message}`);
  //   } catch (error) {
  //     console.log(`Error coming from loginUser function: ${error.message}`);
  //   }
  // };

  return (
    <div>
      <div className="grid grid-cols-[minmax(300px,300px),1fr] h-screen bg-gray-500/50">
        <aside className="bg-gray-100/40">sideBar</aside>
        <nav className="min-h-[80px] h-max flex justify-between items-center border-b-2 px-4 bg-gray-100/40 m-5 rounded-xl">
          {/* <button
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
          </button> */}
          <div></div>
          <div className="relative">
            <div className="flex justify-center items-center space-x-4">
              <div className="flex flex-col items-center justify-cente">
                <span>{userName}</span>
                <span>{userId}</span>
              </div>
              {/* <RandomAvatar name={`${new Date()}`} mode="random" size={40} /> */}
              <div
                onClick={() => setToggleMenu(!toggleMenu)}
                className="cursor-pointer"
              >
                <Image
                  width={50}
                  height={50}
                  alt="defualt profile image"
                  src="/default-profile.png"
                />
              </div>
            </div>
            <div
              className={`absolute top-[70px] flex flex-col w-full p-4 space-y-2 bg-gray-100/50 ${
                !toggleMenu ? "hidden" : "flex"
              }`}
            >
              <button className="p-2 border rounded-2xl border-black hover:bg-black/10 transition-all duration-300 ease-in">
                <i className="ri-user-line mr-4" />
                Profile
              </button>
              <button
                className="p-2 border rounded-2xl border-black hover:bg-black/10 transition-all duration-300 ease-in"
                onClick={logoutUser}
              >
                <i className="ri-logout-circle-r-line mr-4"></i>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>

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
