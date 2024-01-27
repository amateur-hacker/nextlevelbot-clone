"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { wobbleTextAnimation } from "@/src/utils/wobble";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    wobbleTextAnimation();
  }, []);

  const checkAuthenticationLogin = useCallback(() => {
    const authtoken = Cookies.get("authtoken");
    const userid = Cookies.get("userid");

    if (!authtoken && !userid) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    checkAuthenticationLogin();
  }, [checkAuthenticationLogin]);

  const LoginUser = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("https://nextlevelpine.com/nlbweb/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const contentType = response.headers.get("content-type");
      const wait = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Response Data (JSON):", data);
        if (
          !Cookies.get("userid") &&
          !Cookies.get("authtoken") &&
          data.userId &&
          data.authToken
        ) {
          Cookies.set("userid", data.userId, { expires: 1 });
          Cookies.set("authtoken", data.authToken, { expires: 1 });
        }
        toast("Redirecting ....");
        await wait(3000);
        router.push("/home");
      } else {
        const textData = await response.text();
        console.log("Response Data (Text):", textData);
        if (textData.includes("Email ID not found")) {
          toast.error("Email ID not found");
          const emailInput = document.getElementById("email");
          emailInput.focus();
          emailInput.scrollIntoView();
        } else {
          toast.error("Incorrect Password");

          const passwordInput = document.getElementById("password");
          passwordInput.focus();
          passwordInput.scrollIntoView();
        }
      }
    } catch (error) {
      console.log(`Error coming from loginUser function: ${error.message}`);
    }
  };
  useEffect(() => {
    const button = document.querySelector("button");
    button.addEventListener("click", function (e) {
      const x = e.clientX - this.offsetLeft;
      const y = e.clientY - this.offsetTop;
      const ripples = document.createElement("span");
      ripples.className =
        `left-[${x}px] top-[${y}px]` +
        " absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple";
      this.appendChild(ripples);
      setTimeout(() => ripples.remove(), 1000);
    });
  });
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="space-y-10 my-10  max-w-[300px] 2sm:max-w-max">
        <div className="space-y-2">
          <div className="text-center space-x-3">
            <i className="ri-robot-2-fill ri-2x text-gray-900"></i>
            <span>Let&apos;s Automate Trading</span>
          </div>
          <p className="text-center text-gray-500 w-[280px] mx-auto text-sm">
            Sign in and embark on the adventure!{" "}
            <span className="text-lg">😄</span>
          </p>
        </div>
        <form className="space-y-4 flex flex-col" onSubmit={LoginUser}>
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="pb-1 border-b-2 outline-none focus:border-b-black/80 bordr-b-0 transition-all duration-500"
              id="email"
              required
              autoComplete="off"
              spellCheck={false}
              type="email"
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 text-sm" htmlFor="password">
              Password
            </label>
            <div>
              <input
                className="pb-1  border-b-2 outline-none focus:border-b-black/80 bordr-b-0 transition-all duration-500 w-full"
                id="password"
                required
                autoComplete="off"
                spellCheck={false}
                type={isPasswordShown ? "text" : "password"}
                placeholder="johndoe123@,"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`${
                  isPasswordShown ? "ri-eye-off-fill" : "ri-eye-fill"
                } -m-[30px] cursor-pointer select-none text-gray-700`}
                id="togglePassword"
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                tabIndex={0}
              ></i>
            </div>
          </div>

          <div className="flex justify-between !mt-2">
            <div className="flex space-x-3">
              <input
                class="accent-gray-900 w-4 cursor-pointer"
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />

              <span className="text-gray-700 text-sm">Remember me</span>
            </div>

            <Link href="/password/reset">
              <span className="text-sm text-gray-900 underline">
                Forgot Password?
              </span>
            </Link>
          </div>

          <button
            type="submit"
            className="!mt-16 px-4 py-2 bg-gray-900 text-white rounded-lg w-[80%] mx-auto shadow-black/30 shadow-lg relative overflow-hidden"
          >
            Sign in
          </button>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          pauseOnHover={false}
          theme="dark"
        />
        <div className="space-x-2 text-sm text-center">
          <span className="text-gray-700">New on our Platform?</span>
          <Link href="/register">
            <span className="text-gray-900 underline">Create an account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
