import AboutPage from "@/pages/About";
import Header1Page from "@/pages/Header1";
import Header2Page from "@/pages/Header2";
import './globals.css';
import SliderPage from "@/pages/Slider";
import AppFeaturesPage from "@/pages/AppFeatures";
import SwiperPage from "@/pages/Swiper";
import TeamPage from "@/pages/Team";
import FooterPage from "@/pages/Footer";

export default function Home() {
  return (
    <div className="m-0 p-0 ">

      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background1.png')" }}>
        <Header1Page />
        <Header2Page />
        <SliderPage />
      </div>

      <AboutPage />

      <div className=" w-auto h-[1710px] bg-cover bg-center" style={{ backgroundImage: "url('/background2.png')" }}>
        <AppFeaturesPage />
      </div>

      <SwiperPage />
      <TeamPage />
      <FooterPage />

    </div>
  );
};


