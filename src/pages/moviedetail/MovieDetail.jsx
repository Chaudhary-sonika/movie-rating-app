import { useParams } from "react-router"
import { movies } from "../../backend/movieData";
import "../moviedetail/MovieDetail.css"
export const MovieDetail =()=>{
    const {movieId} = useParams();
    const filteredData = [...movies].filter((mov)=>mov.id===parseInt(movieId))
    console.log(filteredData)
    return(
        <div>
            {filteredData?.map((item)=>(
                <div className="detai_div_card">
                <img src={item.imageURL} alt="movie_pic" className="img_tag-detail"/>
                <div className="info_div_detailPage">
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                    <p>Year: {item.year}</p>
                    <p>Genre: {item.genre}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Director: {item.director}</p>
                    <p>Writer: {item.writer}</p>
                    <p>Cast: {item.cast}</p>
                    <div className="btn_div_detail">
                        <button>Star</button>
                        <button>Add to Watchlist</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}