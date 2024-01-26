import { Inter } from "next/font/google";
import Scenery from "@/src/components/signin/Scenery";
import "../globals.css";
import "remixicon/fonts/remixicon.css";

const inter = Inter({ subsets: ["latin"] });

export default function SigninLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center h-screen bg-teal-100/50">
          <div className="2xl:w-full 2xl:max-w-[1400px] 2xl:h-[800px] size-full 2xl:mx-auto grid 2md:grid-cols-2 2xl:rounded-2xl 2xl:overflow-hidden signin-parent-div">
            <div className="hidden 2md:block">
              <Scenery />
            </div>
            <div className="size-full grid absolute 2md:static">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
