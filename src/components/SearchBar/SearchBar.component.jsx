import "./SearchBar.styles.css";

const Searchbar = ({ handleQuery }) => {
  return (
    <div className="Search">
      <input type="search" placeholder="Search" onChange={handleQuery} />
    </div>
  );
};

export default Searchbar;
