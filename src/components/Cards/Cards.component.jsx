import "./Cards.styles.css";

const Cards = ({ games }) => {
  return (
    <div className="cards">
      {games.map((game) => (
        <div className="card" key={game.id}>
          <img src={game.imgUrl} alt={game.title} />
          <div className="card-info">
            <h2>{game.title}</h2>
            <p>{game.version}</p>
            <div
              className="progress"
              style={{
                width: `${game.percentage}`,
                background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
                height: "15px",
                zIndex: "2",
              }}
            ></div>
          </div>
          <h2 className="precentage">{game.percentage}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cards;
