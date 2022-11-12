import { useState } from "react";
import { games } from "../../db/db";
import Cards from "../Cards/Cards.component";
import Searchbar from "../SearchBar/SearchBar.component";
import "./Games.styles.css";

const Games = () => {
  const [query, setQuery] = useState("");
  const filtredGames = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  return (
    <div className="games">
      <div className="status">
        <h1>Active Games</h1>
        <Searchbar query={query} handleQuery={handleQuery} />
      </div>
      <Cards games={filtredGames} />
    </div>
  );
};

export default Games;
