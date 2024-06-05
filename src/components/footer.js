function Footer(props) {
  return (
    <>
      <div className="footer">
        <h3 className="title-link">{props.title}</h3>
        <ul>
          <li className="footer-link">
            <a href="">{props.link}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link1}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link2}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link3}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link4}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link5}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link6}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link7}</a>
          </li>
          <li className="footer-link">
            <a href="">{props.link8}</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;
