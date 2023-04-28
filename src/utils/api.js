import axios from 'axios';
const BASE_URL='https://api.themoviedb.org/3'
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGI0YjhiNmE1MDNlZTQwMDBiYjg0YTAyMDk2YzBhMiIsInN1YiI6IjY0NDc2YmJjMjExMThmMDRiOWYzMmQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1cUwvWZX5O2GuQSOEGu6h40iU9S2bmLZwhofp7U1AQA";
const headers={
    Authorization:"bearer "+TMDB_TOKEN,
}
export const fechDataFromApi=async (url,params)=>{
    try{
         const {data}=await axios.get(BASE_URL+url,{
            headers,
            params
         })
         return data;
    } catch(err){
        console.log(err);
        return err;
    }
}