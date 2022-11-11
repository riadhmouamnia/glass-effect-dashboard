import "./ProCTA.styles.css";

const ProCTA = ({ proGames }) => {
  return (
    <div className="pro">
      <h2>{proGames.title}</h2>
      <img src={proGames.imgUrl} />
    </div>
  );
};

export default ProCTA;
