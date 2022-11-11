import "./Users.styles.css";

const Users = ({ users }) => {
  return (
    <div className="users">
      {users.map((user) => (
        <div className="user" key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.membership}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
