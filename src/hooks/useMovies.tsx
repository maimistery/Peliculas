import React, { useEffect, useState } from 'react'
import moviDB from '../api/moviDB';
import { MovieDBResponse, Result } from '../interfaces/movieInterface';




interface MoviesState{
    nowPlaying: Result[];
    popular:Result[];
    topRate:Result[];
    upComing:Result[];

}
export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);

    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular:[],
        topRate:[],
        upComing:[]
    })
   

    const getMovies= async()=>{

      const nowPlayingPromise=  moviDB.get<MovieDBResponse>('/now_playing');
      const popularPromise=   moviDB.get<MovieDBResponse>('/popular');
      const topRatePromise=  moviDB.get<MovieDBResponse>('/top_rated');
      const upComingPromise=   moviDB.get<MovieDBResponse>('/upcoming');

        const response = await
            Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatePromise,
                upComingPromise

            ]);
        setmoviesState({
            nowPlaying:response[0].data.results,
            popular:response[1].data.results,
            topRate:response[2].data.results,
            upComing:response[3].data.results
        })
        setisLoading (false);
        
    }
    useEffect(() => {
        getMovies();
      }, [])
  
    return {
        ...moviesState,
        isLoading
    }
       
    
}
