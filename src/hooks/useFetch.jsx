import { useState,useEffect } from "react";
import {fechDataFromApi} from "../utils/api"
 const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const[loading,setLoading]=useState(null);
    const[error,setError]=useState(null);

    useEffect(()=>{
        setLoading('loading...');
        setData(null);
        setError(null);
        fechDataFromApi(url) .then((res)=>{
            setLoading(false);
            setData(res);
        }).catch((err)=>{
            setError(err);
        })
    },[url]);
    return {data,loading,error};
}
export default useFetch