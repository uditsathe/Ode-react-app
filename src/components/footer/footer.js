import "./footer.css";

function Footer() {
  return (
    <div className="footerDiv">
      <div className="leftFooter">
        <h5> 2024 &copy;</h5>
      </div>
      <div className="rightFooter">
        <a
          className="linkSocial portFolioLink"
          href="https://uditsathe.github.io/Portfolio/"
          target="_blank"
        >
          <h5>PORTFOLIO</h5>
        </a>
        <a
          className="linkSocial mailLink"
          href="mailto:uditsathe@gmail.com"
          target="_blank"
        >
          <h5>MAIL</h5>
        </a>
        <a
          className="linkSocial linkedInLink"
          href="https://www.linkedin.com/in/uditsathe/"
          target="_blank"
        >
          <h5>LINKEDIN</h5>
        </a>
        <a
          className="linkSocial githubLink"
          href="https://github.com/uditsathe"
          target="_blank"
        >
          <h5>GITHUB</h5>
        </a>
      </div>
    </div>
  );
}

export default Footer;
