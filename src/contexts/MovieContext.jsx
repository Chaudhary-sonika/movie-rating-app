import { createContext, useContext, useReducer } from "react";
import { movies } from "../backend/movieData";
import { MovieReducer } from "../reducer/MovieReducer";
const MovieContext = createContext();
export const MovieProvider =({children})=>{
    const initialState = {Data:[...movies], starData:[]}
    const [state, dispatch]=useReducer(MovieReducer, initialState);
    return(
        <MovieContext.Provider value={{state, dispatch}}>
            {children}
        </MovieContext.Provider>
    )
}
export const useMovie = ()=>useContext(MovieContext);