"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-infinite-logo-slider";
import images1 from "@/public/home/images/index1";
import videoFiles from "@/public/home/videos";
import images2 from "@/public/home/images/index2";
import { Roboto, Cookie } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const Section1 = () => {
  const companyNames = [
    "alpaca",
    "iifl",
    "bybit",
    "ftx",
    "mt5",
    "upstoxv2",
    "fyers",
    "fxcm",
    "kotak",
    "icici",
    "sharekhan",
    "kotakneo",
    "5paisa",
    "metatrader",
  ];

  const features = [
    "Revolutionize Your Trading Approach: Automate your Tradingview (TV) or Chartink strategies for maximum profits on Nextlevelbot.",
    "Unlock Earning Potential: Sell custom indicators on our marketplace to unleash your financial prowess.",
    "Seamless API Management: Trigger orders effortlessly with Nextlevelbot's Order Table feature.",
    "Effortless Integration: Simplify Tradingview and Chartink usage with Nextlevelbot.",
    "Tailored Strategies: Choose fully or semi-automated options for a personalized trading edge.",
    "Trade Anywhere: Enjoy device flexibility \u2013 our platform supports smartphones, tablets, PCs, and laptops.",
    "Master Multi-Account Trading: Stay in control with Nextlevelbot's comprehensive multi-account trading capabilities.",
    "Experience Real-Time Virtual Trading: Boost your skills risk-free with our real-time virtual trading environment.",
    "Stay Ahead with Instant Telegram Alerts: Receive personal, channel, or group notifications for a competitive edge.",
    "Supercharge Your Trading Efficiency: Benefit from low latency and a smooth experience with Nextlevelbot's Single API and Multi-Account Support.",
    "Join a Thriving Community: Become part of a community with over 31,000 accounts and 17,000 active users \u2013 experience the power of Nextlevelbot today!",
  ];

  const dataSet = [
    {
      icon: "ri-bar-chart-fill",
      number: 39941,
      heading: "Total Current Users",
      text: "Not Fake Data",
    },
    {
      icon: "ri-chat-smile-fill",
      number: 219652,
      heading: "24 Hours API Request",
      text: "All Brokers or Exchange Request",
    },
    {
      icon: "ri-shopping-basket-fill",
      number: 21799,
      heading: "Total of Users API",
      text: "In Our Platform",
    },
    {
      icon: "ri-youtube-fill",
      number: 18700,
      heading: "Total Youtube Subscribers",
      text: "Subscribe Now",
    },
  ];

  const overview1 = [
    {
      title: "Nextlevelbot - Elevate Your Trading Experience",
      content:
        "Revolutionize your approach with Nextlevelbot, India's largest API Bridge (automated/Algo) Platform, offering a seamless integration of various APIs through a unique Webhook system. Utilizing a unique Webhook system, it effortlessly triggers APIs from various sources such as Tradingview, Chartink, Excel, Telegram, Amibroker, and more. Built on the reliable AWS infrastructure, Nextlevelbot eliminates the need for any Cloud, VPS, or RTP servers, making it a hassle-free and user-friendly experience. Empower your strategies and workflows with unparalleled effectiveness through our cutting-edge Webhook system.",
    },
    {
      title: "Free Advanced TradingView Indicator",
      content:
        "Unlock the power of our complimentary Advanced Tradingview Indicator at Nextlevelbot. Easily automate it using Virtual Trade and customize filters to align with your expertise. Take advantage of this cost-free indicator to enhance your trading insights and intelligence.",
    },
    {
      title: "Comprehensive API and Broker Support",
      content:
        "Nextlevelbot offers extensive support for a wide range of brokers and APIs, including Kt (Zerodha's Kite), Upstox, Fyers, Alice blue, Binance, Samco, Fxcm, 5paise, and more. Seamlessly connect to your preferred trading and financial services with Nextlevelbot's diverse compatibility.",
    },
    {
      title: "Tailored Programming Services",
      content:
        "Experience seamless integration and customization with our programming services, tailored to meet your unique needs. Whether for personal or commercial use, Nextlevelbot's services cover server setup, domain configuration, and deliver high-quality solutions aligned with your vision.",
    },
    {
      title: "T.V Strategy and Indicator Programming",
      content:
        "Customize your TradingView strategies and indicators with our programming services. From specific alerts functions to Telegram bot integration, we provide tailored solutions for personal and commercial use. Partner with us for top-notch programming services that elevate your TradingView experience.",
    },
    {
      title: "Strategy and Indicator Marketplace",
      content:
        "Join our Strategy Marketplace at Nextlevelbot to showcase and sell your exclusive indicators and trading strategies. Choose between monthly subscriptions or one-time purchases. Monetize your expertise and contribute to the trading community by connecting with potential buyers in our thriving marketplace. Don't miss this opportunity get started with Nextlevelbot's Strategy Marketplace Services today.",
    },
  ];

  const overview2 = [
    {
      title: "International API Bridge",
      content:
        "We proudly support a selection of prominent international Public APIs, ensuring a wide range of trading options for our users. The supported APIs include Binance, Alpaca (both Alpaca and Alpaca Demo versions), Fxcm (along with Fxcm Demo), FTX, WazirX, MT4, MT5, Bitbns, Delta, and Delta Demo.",
    },
    {
      title: "Indian Public API Bridge",
      content:
        "Nextlevelbot proudly supports a wide range of Indian Public APIs, offering a comprehensive array of options for traders in the Indian market. The list of supported APIs includes Fyers, Aliceblue, Angel One, KT Securities, MT (MetaTrader), Finvasia, IIFL, 5paisa, Samco, Kite (by Zerodha), and Upstox, among others",
    },
    {
      title: "Virtual Trade with Real-Time Update Fully or Semi-automated.",
      content:
        "Nextlevelbot API Bridge offers a remarkable feature - free virtual trade integrated with Tradingview or Chartink screener and Option paper trade. This service comes at no cost, with no hidden charges, providing a fully automated experience. Simply sign up on Nextlevelbot.com to take advantage of this incredible opportunity.\n\nWith virtual trading, you can enhance your learning and accuracy in a risk-free environment, boosting your confidence as a trader. There are no limitations, allowing you to explore and experiment with different strategies, all while gaining valuable insights and sharpening your trading skills.\n\nEmbrace the power of automation and virtual trading with Nextlevelbot, as we facilitate your journey to becoming a more proficient and successful trader, without any financial risk. Join us today to unlock this feature and embark on a journey of growth and knowledge in the world of trading.",
    },
  ];
  const socialMediaIcons = [
    {
      name: "Youtube",
      icon: "youtube",
      bgColor: "bg-red-500",
      hoverTextColor: "hover:text-red-500",
      borderColor: "border-red-500",
    },
    {
      name: "Whatsapp",
      icon: "whatsapp",
      bgColor: "bg-green-500",
      hoverTextColor: "hover:text-green-500",
      borderColor: "border-green-500"
    },
    {
      name: "Community",
      icon: "dribbble",
      bgColor: "bg-black/80",
      hoverTextColor: "hover:text-black/80",
      borderColor: "border-black/80"
    },
    {
      name: "Telegram Group",
      icon: "telegram",
      bgColor: "bg-sky-500",
      hoverTextColor: "hover:text-sky-500",
      borderColor: "border-sky-500"
    },
    {
      name: "Telegram Channel",
      icon: "telegram",
      bgColor: "bg-sky-500",
      hoverTextColor: "hover:text-sky-500",
      borderColor: "border-sky-500"
    },
    {
      name: "Instagram",
      icon: "instagram",
      bgColor: "bg-pink-500",
      hoverTextColor: "hover:text-pink-500",
      borderColor: "border-pink-500"
    },
    {
      name: "Facebook",
      icon: "facebook",
      bgColor: "bg-blue-500",
      hoverTextColor: "hover:text-blue-500",
      borderColor: "border-blue-500"
    },
    {
      name: "WebChat",
      icon: "chat-3",
      bgColor: "bg-teal-500",
      hoverTextColor: "hover:text-teal-500",
      borderColor: "border-teal-500"
    },
  ];

  return (
    <div>
      <div className="py-10">
        <Slider
          width="250px"
          duration={10}
          pauseOnHover={false}
          blurBorders={true}
          blurBoderColor={"#fff"}
        >
          {companyNames.map((companyName) => (
            <Slider.Slide key={companyName}>
              <Image
                src={`https://nextlevelbot.com/images/nextbot/${companyName}.png`}
                alt={`${companyName} logo`}
                width={100}
                height={100}
                className="select-none"
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col items-center my-16">
        <div className="flex flex-col items-center space-y-8">
          <h2
            className={`text-4xl font-bold ${roboto.className} text-[#0B2238] text-center`}
          >
            Reality of NLB Algo Universe
          </h2>
          <button className="hover:scale-105 transition-transform duration-300 ease-in">
            <a
              href="https://www.producthunt.com/products/nextlevelbot?utm_source=badge-featured&utm_medium=badge#nextlevelbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 border border-red-500 rounded-xl p-1 text-red-500"
            >
              <i className="ri-product-hunt-fill ri-2x"></i>
              <div className="flex flex-col space-y-1">
                <span className="uppercase text-[0.775rem]">find us on</span>
                <span className="uppercase font-bold text-lg">
                  Product Hunt
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <i className="ri-arrow-up-s-fill ri-lg"></i>
                <span>4</span>
              </div>
            </a>
          </button>

          <div className="grid grid-cols-[repeat(1,minmax(300px,1fr))] md:grid-cols-[repeat(2,minmax(300px,1fr))] 2xl:grid-cols-[repeat(4,300px)] gap-6 2xl:gap-3">
            {dataSet.map((data) => (
              <div
                key={data.number}
                className="flex flex-col justify-between items-center text-[#0B2238] space-y-3 p-2 rounded-xl group"
              >
                <div className="p-2 border rounded-xl">
                  <i className={`${data.icon} ri-xl`}></i>
                </div>
                <span className={`font-bold text-5xl ${roboto.className}`}>
                  {data.number}
                </span>
                <div className="flex flex-col space-y-1 items-center">
                  <h3 className={`font-bold text-lg ${roboto.className}`}>
                    {data.heading}
                  </h3>
                  <a
                    className={`${
                      data.icon.includes("youtube")
                        ? "text-red-500 hover:text-red-700"
                        : "text-gray-700"
                    } transition-colors duration-300 ease-in`}
                    href="https://www.youtube.com/c/NextLevelBot/videos"
                  >
                    {data.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-16 space-y-8">
        <h2
          className={`text-4xl font-bold ${roboto.className} text-[#0B2238] text-center`}
        >
          Nextlevelbot Features
        </h2>
        <div className="px-3 md:px-4 grid grid-cols-[repeat(1,minmax(300px,1fr))] md:grid-cols-[repeat(2,minmax(300px,1fr))] place-content-center 2xl:grid-cols-[repeat(3,500px)] gap-5 w-full justify-center">
          {images1.map((image, index) => (
            <div
              key={`${image.name}-${index}`}
              className="flex flex-col justify-center items-center min-h-[300px] space-y-5 border shadow-3d rounded-2xl p-2 group"
            >
              <div
                key={image.name}
                className={`w-[100px] h-[100px] rounded-full bg-black flex justify-center items-center`}
              >
                <Image
                  src={image.light}
                  alt={`${image.name} image`}
                  width={65}
                  height={65}
                  className="select-none"
                />
              </div>
              <h3
                className={`font-bold text-lg text-center relative group-hover:after:bg-[#7367f0] after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 ${roboto.className} text-[#0B2238]`}
              >
                {features[index].split(":")[0]}
              </h3>
              <p className="text-center text-gray-700 md:w-[75%]">
                {features[index].split(":")[1]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center my-16 space-y-8">
        <h2
          className={`text-4xl font-bold ${roboto.className} text-[#0B2238] text-center`}
        >
          Nextlevelbot Overview
        </h2>
        <div className="max-w-[1050px] space-y-5">
          {overview1.map((content, index) => (
            <div
              key={index}
              className="flex flex-col 2xl:odd:flex-row-reverse 2xl:flex-row justify-center items-center text-center gap-10 group p-4"
            >
              <video
                id="video"
                className="min-w-[300px] bg-white"
                src={videoFiles[index]}
                autoPlay
                muted
                loop
              >
                Your browser does not support the video tag.
              </video>
              <div className="space-y-2">
                <h3
                  className={`inline-flex font-bold text-lg text-center relative group-hover:after:bg-[#7367f0] after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 ${roboto.className} text-[#0B2238]`}
                >
                  {content.title}
                </h3>
                <p className="text-justify-center text-gray-700 md:w-[75%] mx-auto">
                  {content.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center my-16">
        <div className="grid grid-cols-[repeat(minmax(300px,1fr))] lg:grid-cols-[repeat(2,400px)] place-items-center place-content-center gap-12  p-4 w-full lg:w-max">
          {overview2.map((content, index) => (
            <div
              key={content}
              className="min-w-[minmax(300px,1fr)] lg:max-w-[400px] flex flex-col justify-center items-center space-y-5 lg:last:col-span-2 lg:last:max-w-[60%] group"
            >
              <Image
                src={images2[index].src}
                alt={`${images2[index].name} image`}
                width={65}
                height={65}
                className="select-none"
              />

              <div className="space-y-2 flex flex-col items-center">
                <h3
                  className={`inline-flex font-bold text-lg text-center relative group-hover:after:bg-[#7367f0] after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 ${roboto.className} text-[#0B2238]`}
                >
                  {content.title}
                </h3>
                <p className="text-justify-center text-gray-700 md:w-[75%] xl:w-full mx-auto">
                  {content.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16">
        <div className="max-w-[950px] mx-auto flex flex-col space-y-8">
          <h2
            className={`text-4xl font-bold ${roboto.className} text-[#0B2238] text-center`}
          >
            Join Our Community
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 p-3">
            {socialMediaIcons.map((icon) => (
              <div
                key={icon.name}
                className="px-4 py-3 border rounded-2xl max-w-[150px] text-center flex flex-col justify-center items-center space-y-2"
              >
                <div
                  className={`p-2 border rounded-full w-[50px] h-[50px] flex justify-center items-center text-white ${icon.borderColor} ${icon.bgColor} hover:bg-transparent ${icon.hoverTextColor} transition-all duration-500 ease-in cursor-pointer`}
                >
                  <i className={`ri-${icon.icon}-line ri-xl`}></i>
                </div>
                <span className="">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
