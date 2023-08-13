import { NavLink } from "react-router-dom"
import "./componentCss/Header.css";
import { useMovie } from "../contexts/MovieContext";
export const Header =()=>{
    const {dispatch} = useMovie();
    return(
        <div className="header_div">
            <h2>IMDB</h2>
            <div>
                <input type="text" placeholder="Search a movie by its title, cast or director" onChange={(e) => {
            dispatch({ type: "search_input", payload: e.target.value });
          }}/>
            </div>
            <div className="link_div">
                <NavLink to="/" className="link_tag">Movies</NavLink>
                <NavLink to="/watchlist" className="link_tag">WatchList</NavLink>
                <NavLink to="/starmovie" className="link_tag">Starred Movies</NavLink>
            </div>
        </div>
    )
}