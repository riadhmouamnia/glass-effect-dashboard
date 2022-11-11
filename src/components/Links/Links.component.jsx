import { links } from "../../db/db";
import "./Links.styles.css";

const Links = ({ Links }) => {
  return (
    <div className="links">
      {links.map((link) => (
        <div className="link" key={link.id}>
          <img src={link.imgUrl} alt={link.title} />
          <h2>{link.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Links;
