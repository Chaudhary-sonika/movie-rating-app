import { useNavigate } from "react-router";
import { useMovie } from "../../contexts/MovieContext"
import '../listing/MovieListing.css';
import { useState } from "react";
export const MovieListing =()=>{
    const {state, dispatch} = useMovie();
    const navigate = useNavigate();
    const [inputGenre, setInputGenre] = useState();
    const [inputYear, setInputYear] = useState();
    const [inputRating, setInputRating] = useState();
    const starredData = JSON.parse(localStorage.getItem("Starred"));
    return(
        <div className="listing_div">
            <div className="listing_head">
                <h3>Movies</h3>
                <div>
                    <select value={inputGenre}  onChange={(e) => {
              dispatch({ type: "option_filter_genre", payload: e.target.value });
              setInputGenre(e.target.value);
            }}>
                        <option value="all">All Genre</option>
                        <option value="Action">Action</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Biography">Biography</option>
                    </select>
                </div>
                <div>
                    <select value={inputYear}  onChange={(e) => {
              dispatch({ type: "option_filter_year", payload: e.target.value });
              setInputYear(e.target.value);
            }}>
                        <option value="all">Release Year</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1994">1994</option>
                        <option value="1999">1999</option>
                        <option value="2001">2001</option>
                        <option value="2003">2003</option>
                        <option value="2008">2008</option>
                        <option value="2010">2010</option>
                    </select>
                </div>
                <div>
                    <select value={inputRating}  onChange={(e) => {
              dispatch({ type: "option_filter_rating", payload: e.target.value });
              setInputRating(e.target.value);}}>
                        <option value="all">Rating</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <button>Add a Movie</button>
            </div>
            <div className="movie_list_div">
                {state?.Data.map((item)=>{
                    const isStarred = starredData.find((data)=>data.id===item.id)
                    return (
                    <div key={item.id} className="movie_card" onClick={()=>navigate(`/moviedetail/${item.id}`)}>
                      <img src={item?.imageURL} alt="movie_pic" className="img_tag"/>
                      <div className="movie_info_div"> 
                        <h3>{item.title}</h3> 
                        <p className="info_para">{item.summary}</p>
                        <div className="btn_div">
                            {isStarred?<button onClick={()=>dispatch({type:"unstar_btn", payload:item?.id})}>UnStar</button>:<button onClick={()=>dispatch({type:"star_btn", payload:item?.id})}>Star</button>}
                            <button>Add to Watchlist</button>
                        </div>
                      </div>  
                    </div>
                )})}
            </div>
        </div>
    )
}