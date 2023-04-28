import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import SearchResult from "./Pages/search/SearchResult";
import PageNotFound from "./Pages/404/PageNotFound";
import Explore from "./Pages/explore/Explore";

import { fechDataFromApi } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fechDataFromApi("/configuration").then((data) => {
      // console.log(data);
      const url={
        backdrop:data.images.secure_base_url+"original",
        poster:data.images.secure_base_url+"original",
        profile:data.images.secure_base_url+"original",

      }
      dispatch(getApiConfiguration(url));
    });
  };
  const genresCall=async()=>{
    let promises=[];
    let endpoints=['tv','movie'];
    let allGenres={};
    endpoints.forEach((url)=>{
             promises.push(fechDataFromApi(`/genre/${url}/list`))
             
    })
    
    const data =await Promise.all(promises);
    
    data.map((genres)=>{
      return (genres.genres.map((item)=>{
        (allGenres[item.id]=item);
      }))
    })
    // console.log(allGenres)
    
    dispatch(getGenres(allGenres));
  }
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
