import Title from "../Title";
import AboutUs from "../AboutUs";
import Portfolio from "../Portfolio";
import OurTeam from "../OurTeam";
import GivingBack from "../GivingBack";
import ContactUs from "../ContactUs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Title/>
      <AboutUs/>
      <Portfolio/>
      <OurTeam/>
      <GivingBack/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;
