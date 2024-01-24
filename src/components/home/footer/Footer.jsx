"use client";
import Image from "next/image";
import paymentLogos from "@/public/home/payment-logos";
const Footer = () => {
  return (
    <div className="bg-[#040309] text-white overflow-hidden">
      <div className="grid max-w-full grid-cols-3 md:max-w-[1180px] md:mx-auto my-16 gap-y-10 place-content-center">
        <div className="w-[80%] md:w-full mx-auto space-y-1 col-span-3 md:col-span-1 md:text-center">
          <h3 className="uppercase font-bold text-xl">More Link</h3>
          <div className="flex flex-col  text-gray-400 space-y-2">
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Community</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Youtube Channel</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Indicator Request</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Resource</a>
            </span>
          </div>
        </div>

        <div className="w-[80%] md:w-full mx-auto space-y-1 col-span-3 md:col-span-1 md:text-center">
          <h3 className="uppercase font-bold text-xl">Pages</h3>
          <div className="flex flex-col  text-gray-400 space-y-2">
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Affilate Program</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Privacy policy</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Disclaimer Policy</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Terms of Condition</a>
            </span>
            <span className="hover:scale-110 hover:text-white transition-all duration-500 ease-in">
              <a href="">Cookies Policy</a>
            </span>
          </div>
        </div>

        <div className="w-[80%] md:w-full mx-auto space-y-1 col-span-3 md:col-span-1 md:text-center">
          <h3 className="uppercase font-bold text-xl">More Link</h3>
          <div className="flex flex-col text-gray-400 space-y-2">
            <span>
              <span className="mr-2">Group:</span>
              <a
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in"
                href=""
              >
                Nextlevelbot Group
              </a>
            </span>
            <span>
              <span className="mr-2">Channel:</span>
              <a
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in"
                href=""
              >
                Nextlevelbot Channel
              </a>
            </span>
            <span>
              <span className="mr-2">Whatsapp Chat:</span>
              <a
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in"
                href=""
              >
                Chat Now
              </a>
            </span>
            <span>
              <span className="mr-2">Contact Us:</span>
              <a
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in"
                href=""
              >
                Visit Here
              </a>
            </span>
          </div>
        </div>

        <div className="col-span-3 max-w-[80%] mx-auto space-y-1">
          <h3 className="font-bold text-xl">About Us Nextlevelbot</h3>
          <p className="text-gray-400">
            Nextlevelbot is a user-friendly web-based application that operates
            through a unique Webhook system, enabling users to call and trigger
            various Public API methods, including Post, Delete, and Get. This
            innovative platform functions as both a programming tool and a
            marketplace, providing a seamless experience for anyone to use
            Nextlevelbot without the need for coding or programming knowledge.
            Whether you are a seasoned developer or a non-technical user,
            Nextlevelbot opens up a world of possibilities for automating tasks
            and accessing APIs with ease.
          </p>
        </div>

        <div className="col-span-3 max-w-[80%] mx-auto space-y-1">
          <span className="text-gray-400">
            <span className="text-red-400 font-bold text-lg">Disclaimer:</span> Futures, stocks,
            and options trading carry a significant risk of loss and may not be
            suitable for all investors or traders. At nextlevelbot.com, we
            solely provide automation trading tools and a strategy marketplace;
            we do not offer trading buy or sell signals, recommendations, or any
            form of investment advisory services. The use of our trading
            strategies is at your own risk, and nextlevelbot.com cannot be held
            responsible for any losses incurred during their implementation. We
            advise users to exercise caution and perform their due diligence
            before engaging in any trading activities.
          </span>
        </div>

        <div className="col-span-3 max-w-[90%] md:max-w-[80%] flex flex-wrap justify-center gap-2 md:gap-5 mx-auto ">
          {paymentLogos.map((logo, index) => (
            <div key={index} className="bg-white rounded-xl">
              <Image
                src={`/home/payment-logos/${logo}.svg`}
                alt={`${logo} logo`}
                width={0}
                height={0}
                className="select-none w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
              />
            </div>
          ))}
        </div>

        <div className="col-span-3 text-center text-gray-400 text-sm">
          <span>
            © {new Date().getFullYear()} <span className="text-white">Nextlevelbot.com</span> All Right Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
