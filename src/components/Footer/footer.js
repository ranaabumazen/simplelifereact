import MainTitle from "../MainTitle/mainTitle";
import Paragraph from "../Paragraph/paragraph";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Paragraph className="footer-p" text="Living the Simple life" />

      <Paragraph className="footer-p" text="Copyright 2023" />
    </div>
  );
};
export default Footer;
