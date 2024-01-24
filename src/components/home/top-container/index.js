import Navbar from "@/src/components/home/top-container/navbar/Navbar";
import Header from "@/src/components/home/top-container/header/Header";

const TopContainer = () => {
  return (
    <div className="bg-[#0b2238] h-max overflow-hidden">
      <Navbar />
      <Header />
    </div>
  );
};

export default TopContainer;
