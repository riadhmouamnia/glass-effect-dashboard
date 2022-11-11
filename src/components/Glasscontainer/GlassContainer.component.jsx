import Dashboard from "../Dashboard/Dashboard.component";
import Games from "../games/Games.component";
import "./GlassContainer.styles.css";

const GlassContainer = () => {
  return (
    <>
      <section className="glass">
        <Dashboard />
        <Games />
        <div className="circle1"></div>
        <div className="circle2"></div>
      </section>
    </>
  );
};

export default GlassContainer;
