import Image from "next/image";
import Typewriter from "typewriter-effect";


import { cloud, grass, character } from "@/public/signin";
export const metadata = {
  title: "this is title",
  description: "this is description",
};
const signinlayout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-teal-100/50">
      <div className="xl:w-[95%] xl:h-[95%] 2xl:w-[90%] 2xl:h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl grid 2xl:grid-cols-[1.3fr,1fr] signin-parent-div overflow-x-hidden">
        <section className="signin-section1 overflow-hidden">
          <div className="h-full flex flex-col justify-end items-center relative">
            <div className="bg-black/80 text-white inline-flex rounded-lg min-w-[80px] max-w-[250px] text-sm py-[10px] px-[20px] mb-4 text-justify-center -mx-[50px] -mt-[50px]">
              <Typewriter
                options={{
                  strings: [
                    "Hello there!",
                    "Welcome to EzMony!",
                    "Earn in rupees by taking quick surveys!",
                    "Stay updated with the latest trends and earn an hourly wage by watching ads!",
                    "Enjoy your favorite YouTube videos and get paid at an hourly rate!",
                    "Scroll through Instagram Reels and earn money in real-time!",
                    "We'll transfer your payments daily at 9:00 AM directly to your provided UPI ID, hassle-free!",
                    "Thank you for visiting us. Start earning effortlessly today!",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 10,
                  deleteSpeed: 10,
                }}
              />
            </div>

            <div className="flex gap-9 z-10 main-img-div overflow-x-hidden -mx-[150px]">
              <Image
                className="cloud-img w-[120px] self-start"
                src={cloud}
                alt="cloud image"
              />
              <Image
                className="w-[196px] h-[513px] ezmony-dev-img"
                src={character}
                alt="ezmony developer image"
              />
              <Image
                className="cloud-img w-[120px] self-center"
                src={cloud}
                alt="cloud image"
              />
            </div>

            <div
              className="absolute w-0 h-0 border-r-[450px] border-b-[230px] 
              border-l-[450px] border-solid border-r-transparent
              border-l-transparent border-b-gray-400"
            ></div>

            <button
              className="absolute bottom-5 right-5 text-white bg-black px-8 py-2 z-20 rounded-lg skip-btn"
              onClick={toggleSkip}
            >
              Skip
            </button>

            <Image
              className="w-full -mb-2 z-10 h-[100px] object-cover"
              src={grass}
              alt="grass image"
            />
          </div>
        </section>
        {children}
      </div>
    </div>
  );
};

export default signinlayout;
