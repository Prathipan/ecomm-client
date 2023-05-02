import axios from "axios";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMovieFailure, getMovieStart, getMovieSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieActions";
import { api } from "../../api";

export const getMovies = async (dispatch) => {
  dispatch(getMovieStart());
  try {
    const res = await axios.get(`${api}/movies`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    // console.log(res.data)
    dispatch(getMovieSuccess(res.data))
  } catch (error) {
    dispatch(getMovieFailure());
  }
};

export const createMovie = async(movie,dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(`${api}/movies/create-movie`,movie,{
      headers : {
        token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
      }
    })
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
}

export const updateMovie = async(movie,dispatch) => {
   dispatch(updateMovieStart());
   try {
      const res = await axios.put(`${api}/movies/${movie._id}`,movie,{
        headers : {
          token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
      });
      dispatch(updateMovieSuccess(res.data));
   } catch (error) {
     dispatch(updateMovieFailure());
   }
}

export const deleteMovie = async(id,dispatch) => {
   dispatch(deleteMovieStart());
   try {
     await axios.delete(`${api}/movies/${id}`,{
        headers : {
            token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
     })
     dispatch(deleteMovieSuccess(id));
   } catch (error) {
     dispatch(deleteMovieFailure());
   }
}
