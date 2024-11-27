import "./App.css";
import BookOn from "./component/BookOn";
import Downnav from "./component/Downnav";
import Herobackground from "./component/Herobackground";
import HeroContainer from "./component/HeroContainer";
import HeroDownloads from "./component/HeroDownloads";
import PopularSection from "./component/PopularSection";
import Topnav from "./component/Topnav";
import FreshProduct from "./component/FreshProduct";
import GovernmentPay from "./component/GovernmentPay";
import Exclusive from "./component/Exclusive";
import CashBack from "./component/CashBack";
import Rewarding from "./component/Rewarding";
import GoDigital from "./component/GoDigital";
import Testamonials from "./component/Testamonials";
import Faq from "./component/Faq";
import Download from "./component/Download";
import Footer from "./component/Footer";
import Cfooter from "./component/Cfooter";

function App() {
  return (
    <>
      <Topnav />
      <Downnav />
      <div className="relative  w-full h-full">
        <div className="absolute top-0  right-0 left-0">
          <Herobackground />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center mt-12">
          <HeroContainer />
          <HeroDownloads />
          <BookOn />
          <PopularSection />
          <FreshProduct />
          <GovernmentPay />
          <Exclusive />
          <CashBack />
          <Rewarding />
          {/* <GoDigital /> */}
          {/* <Testamonials /> */}
          {/* <Faq /> */}
          {/* <Download /> */}
          {/* <Footer /> */}
          {/* <Cfooter /> */}
        </div>
      </div>
    </>
  );
}

export default App;
