import { games } from "../../db/db";
import Cards from "../Cards/Cards.component";
import Searchbar from "../SearchBar/SearchBar.component";
import "./Games.styles.css";

const Games = () => {
  return (
    <div className="games">
      <div className="status">
        <h1>Active Games</h1>
        <Searchbar />
      </div>
      <Cards games={games} />
    </div>
  );
};

export default Games;
