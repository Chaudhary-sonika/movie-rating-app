import { useNavigate } from "react-router";
import { useMovie } from "../../contexts/MovieContext"

export const StarredMovie=()=>{
    const {state, dispatch} = useMovie();
    const navigate = useNavigate();
    const starredData = JSON.parse(localStorage.getItem("Starred"));
    console.log(starredData);
    return(
        <div>
            <h1>All The Starred Movies</h1>
            <div className="movie_list_div">
                {starredData?.map((item)=>{
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
                )
                })}
            </div>
        </div>
    )
}