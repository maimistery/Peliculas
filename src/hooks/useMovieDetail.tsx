import { useEffect, useState } from "react"
import moviDB from "../api/moviDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";


interface MovieDeatils{
    isLoading:boolean;
    movieFull?:MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (mId:number) => {
   const [state,setState]= useState<MovieDeatils>({
    isLoading:true,
    movieFull: undefined,
    cast:[]

   });

  const getMovieDeatil=async()=>{
     const movieDetailsPromise=  moviDB.get<MovieFull>(`/${mId}`);
     const castPromise=  moviDB.get<CreditsResponse>(`/${mId}/credits`);
  
     const[movieDetailsPromiseResp,castPromiseResp]=await Promise.all([
      movieDetailsPromise,
      castPromise,]);
      setState({
        isLoading:false,
        movieFull:movieDetailsPromiseResp.data,
        cast:castPromiseResp.data.cast
      })


   
    }
   
   useEffect(() => {
     getMovieDeatil();
    }, [])

   return{
        ...state
   }
}
