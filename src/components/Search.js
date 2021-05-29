const Search = (props) => {

    return (
        <div className={props.className}>
            <div className="s-toggle" onClick={props.toggle}></div>
            <form className="search-box" onSubmit={props.toggle}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/search.png`} alt="like" onClick={props.toggle} />
                <input type="text" className="s-text" placeholder="search..." />
            </form>
        </div>
    );
}

export default Search;