import { movies } from "../backend/movieData";
export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "search_input":
      return {
        ...state,
        Data: [...movies].filter(
          (item) =>
            item?.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            item?.director.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "option_filter_genre":
      return {
        ...state,
        Data:
          action.payload === "all"
            ? [...movies]
            : [...movies].filter((item) => item.genre.includes(action.payload)),
      };
    case "option_filter_year":
      return {
        ...state,
        Data:
          action.payload === "all"
            ? [...movies]
            : [...movies].filter(
                (item) => item.year === parseInt(action.payload)
              ),
      };
    case "option_filter_rating":
      return {
        ...state,
        Data:
          action.payload === "all"
            ? [...movies]
            : [...movies].filter(
                (item) => item.rating === parseInt(action.payload)
              ),
      };
    case "star_btn":
      const starredData = [...movies].filter(
        (item) => item.id === action.payload
      );

      const localDataFn = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
      };
      const existingData = localDataFn("Starred");
      //    console.log(existingData, "ab");
      const newData = [...existingData, ...starredData];
      localStorage.setItem("Starred", JSON.stringify(newData));
      return { ...state, starData: newData };

    default:
      return state;
  }
};
