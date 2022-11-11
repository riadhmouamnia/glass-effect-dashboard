import { users, links, proGames } from "../../db/db";
import Links from "../Links/Links.component";
import ProCTA from "../ProCTA/ProCTA.component";
import Users from "../Users/Users.component";
import "./Dashboard.styles.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Users users={users} />
      <Links links={links} />
      <ProCTA proGames={proGames} />
    </div>
  );
};

export default Dashboard;
