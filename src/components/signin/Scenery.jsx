"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Scenery = () => {
  return (
    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
      <div className="w-full trader-img-div">
        {/* <Image
          src="/signin/trader.jpeg"
          width={200}
          height={160}
          alt="trader image"
          style={{ maxHeight: "100%", width: "100%" }} //The point is right there!
          //OR className='w-100 h-100'
          className="object-cover"
        /> */}
        <div className="bg-black/80 text-white inline-flex rounded-lg min-w-[80px] max-w-[250px] text-sm py-[10px] px-[20px] mb-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <Typewriter
            options={{
              strings: [
                "Hello and welcome to NextlevelPine!",
                "This is Feature 1!",
                "This is Feature 2!",
                "This is Feature 3!",
                "This is Feature 4!",
                "This is Feature 5!",
                "This is Feature 6!",
                "Join Over 31,000 Accounts and 17,000 Active Users on Our Platform Today!",
                "Thank you for exploring Nextlevelpine. Start optimizing your trading journey today!",
              ],
              autoStart: true,
              loop: true,
              delay: 10,
              deleteSpeed: 10,
              pauseFor: 3000,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Scenery;
