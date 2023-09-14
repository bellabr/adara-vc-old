import { Typography, Divider } from "@mui/material";
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const AboutUs = () => {
  const windowSize = useWindowSize();

  const desktopLayout = () => {
    return (
      <div id="about-us">
        <Typography variant="h1" id="about-us-title">About Us</Typography>
        <Divider id="divider"/>
        <Typography variant="body1" id="about-us-body" align="center">
          Adara Venture Capital supports life science innovation by investing in western Canadian start-ups. We are an all woman private partnership based in Calgary, Alberta.
        </Typography>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="about-us" style={{height: '65vh'}}>
        <div id="mobile-about-us">
          <Typography variant="h2" id="mobile-about-us-title">About Us</Typography>
          <Divider id="mobile-divider"/>
          <Typography variant="body2" id="mobile-about-us-body" align="center">
            Adara Venture Capital supports life science innovation by investing in western Canadian start-ups. We are an all woman private partnership based in Calgary, Alberta.
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <div>{windowSize.width > 900 ? desktopLayout() : mobileLayout()}</div>
  );
};

export default AboutUs;
