import "../Styles/search.css"

const Search = ( {handleChange, searchValue} ) => {
    return (
        <div className="search">
            <input className="searchInput" placeholder="Search job..." onChange={handleChange} value={searchValue}></input>
        </div>
    );
}

export default Search;
