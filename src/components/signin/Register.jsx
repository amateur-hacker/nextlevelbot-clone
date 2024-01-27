"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
// import codes from "country-calling-code";
import { wobbleTextAnimation } from "@/src/utils/wobble";
import Link from "next/link";
import { loading } from "@/public/signin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCounryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const checkAuthenticationLogin = useCallback(() => {
    const authtoken = Cookies.get("authtoken");
    const userid = Cookies.get("userid");

    if (!authtoken || !userid) {
      router.push("/register");
    } else {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    checkAuthenticationLogin();
  }, [checkAuthenticationLogin]);

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

  const phoneCode = [
    "91",
    "93",
    "355",
    "213",
    "1684",
    "376",
    "244",
    "1264",
    "1268",
    "54",
    "374",
    "297",
    "61",
    "43",
    "994",
    "1242",
    "973",
    "880",
    "1246",
    "375",
    "32",
    "501",
    "229",
    "1441",
    "975",
    "591",
    "387",
    "267",
    "55",
    "246",
    "673",
    "359",
    "226",
    "257",
    "855",
    "237",
    "1",
    "238",
    "345",
    "236",
    "235",
    "56",
    "86",
    "61",
    "61",
    "57",
    "269",
    "242",
    "243",
    "682",
    "506",
    "225",
    "385",
    "53",
    "537",
    "420",
    "45",
    "253",
    "1767",
    "1849",
    "593",
    "20",
    "503",
    "240",
    "291",
    "372",
    "251",
    "500",
    "298",
    "679",
    "358",
    "33",
    "594",
    "689",
    "241",
    "220",
    "995",
    "49",
    "233",
    "350",
    "30",
    "299",
    "1473",
    "590",
    "1671",
    "502",
    "44",
    "224",
    "245",
    "595",
    "509",
    "379",
    "504",
    "852",
    "36",
    "354",
    "62",
    "98",
    "964",
    "353",
    "44",
    "972",
    "39",
    "1876",
    "81",
    "44",
    "962",
    "77",
    "254",
    "686",
    "850",
    "82",
    "965",
    "996",
    "856",
    "371",
    "961",
    "266",
    "231",
    "218",
    "423",
    "370",
    "352",
    "853",
    "389",
    "261",
    "265",
    "60",
    "960",
    "223",
    "356",
    "692",
    "596",
    "222",
    "230",
    "262",
    "52",
    "691",
    "373",
    "377",
    "976",
    "382",
    "1664",
    "212",
    "258",
    "95",
    "264",
    "674",
    "977",
    "31",
    "599",
    "687",
    "64",
    "505",
    "227",
    "234",
    "683",
    "672",
    "1670",
    "47",
    "968",
    "92",
    "680",
    "970",
    "507",
    "675",
    "595",
    "51",
    "63",
    "872",
    "48",
    "351",
    "1939",
    "974",
    "40",
    "7",
    "250",
    "262",
    "590",
    "290",
    "1869",
    "1758",
    "590",
    "508",
    "1784",
    "685",
    "378",
    "239",
    "966",
    "221",
    "381",
    "248",
    "232",
    "65",
    "421",
    "386",
    "677",
    "252",
    "27",
    "500",
    "34",
    "94",
    "249",
    "597",
    "47",
    "268",
    "46",
    "41",
    "963",
    "886",
    "992",
    "255",
    "66",
    "670",
    "228",
    "690",
    "676",
    "1868",
    "216",
    "90",
    "993",
    "1649",
    "688",
    "256",
    "380",
    "971",
    "44",
    "1",
    "598",
    "998",
    "678",
    "58",
    "84",
    "1284",
    "1340",
    "681",
    "967",
    "260",
    "263",
    "358",
  ];
  useEffect(() => {
    wobbleTextAnimation();
  }, []);

  const registerUser = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetch(
        "https://nextlevelpine.com/nlbweb/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            phone: phoneNumber,
            code: countryCode,
          }),
        }
      );

      const data = await response.json();
      if (data.message.includes("email already exists")) {
        toast.error("Email Already Exist");
        const emailInput = document.getElementById("email");
        emailInput.focus();
        emailInput.scrollIntoView();
        return;
      }
      const wait = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      await toast.promise(wait(3000), {
        pending: "Signing up",
        success: "Signup Successfully 👌",
        error: "Error While Signing up 🤯",
      });

      router.push("/login");
    } catch (error) {
      console.log(`Error coming from registerUser function: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="space-y-10 my-10 max-w-[300px] sm:max-w-max flex flex-col">
        <div className="space-y-2">
          <div className="text-center space-x-3">
            <i className="ri-robot-2-fill ri-2x text-gray-900"></i>
            <span>Let&apos;s Automate Trading</span>
          </div>
          <p className="text-center text-gray-500 w-[250px] sm:w-[280px] mx-auto text-sm">
            Sign in to your account and kick off your trading journey{" "}
            <i className="ri-line-chart-line text-gray-900 ri-xl"></i>.
          </p>
        </div>
        <form className="space-y-4 flex flex-col" onSubmit={registerUser}>
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 text-sm" htmlFor="username">
              Username
            </label>
            <input
              className="pb-1 border-b-2 outline-none focus:border-b-black/80 bordr-b-0 transition-all duration-500"
              id="username"
              required
              // onInvalid={(e) =>
              //   e.target.setCustomValidity("Username is required")
              // }
              // onInput={(e) => e.target.setCustomValidity("")}
              autoComplete="off"
              spellCheck={false}
              type="text"
              placeholder="johndoe"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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

          <div className="flex space-x-5">
            <div className="flex flex-col justify-between">
              <span className="text-gray-700 text-sm">Code</span>
              <select
                defaultValue="+91"
                name=""
                id=""
                size={0}
                className="w-max h-full bg-transparent border-b-2 focus:border-black/80 transition-all duration-500 outline-none"
                onChange={(e) => setCounryCode(e.target.value)}
              >
                {phoneCode.map((code, index) => (
                  <option key={index} value={code} className="">
                    +{code}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-gray-700 text-sm" htmlFor="phonenumber">
                Number
              </label>
              <input
                className="pb-1  border-b-2 outline-none focus:border-b-black/80 bordr-b-0 transition-all duration-500 w-full "
                type="text"
                autoComplete="off"
                spellCheck={false}
                required
                placeholder="8858880080"
                minLength={10}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 text-sm" htmlFor="referalby">
              Referal By (optional)
            </label>
            <input
              className="pb-1 border-b-2 outline-none focus:border-b-black/80 bordr-b-0 transition-all duration-500"
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="Referal code if you have (optional)"
            />
          </div>

          <div className="flex space-x-3 !mt-2">
            <input
              className="accent-gray-900 w-4 cursor-pointer"
              type="checkbox"
              required
            />

            <span className="text-gray-700 text-sm">
              I agree to{" "}
              <span className="text-gray-900 underline">
                privacy policy & terms
              </span>
            </span>
          </div>

          <button
            type="submit"
            className="!mt-16 px-4 py-2 bg-gray-900 text-white rounded-lg w-[80%] mx-auto shadow-black/30 shadow-lg relative overflow-hidden"
          >
            <span>Sign up</span>
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
          <span className="text-gray-700">Already have an account?</span>
          <Link href="/login">
            <span className="text-gray-900 underline">Login Instead</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
