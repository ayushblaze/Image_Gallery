import React, { useEffect, useState } from "react";
import axios from 'axios';
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState("");

  const fetchData = async (input) => {
    // console.log("formData: ", formData);
    setLoading(true);
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=OwGwmgc_mNfchveYWrNvoVnxu2cWIT6amYKA07v8L9Y&per_page=20`);
    const data = await response.data;
    setPhotos(data);
    console.log(data);
    setLoading(false);
  };

  const formChangeHandler = (event) => {
    setFormData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("formData", formData);
    fetchData(formData);
  }

  useEffect(() => {
    console.log("FormData: ", formData);
    const identifier = setTimeout(() => {
      fetchData(formData);
    }, 500);

    return () => {
      console.log("Cleanup function ran!");
      clearTimeout(identifier);
    };
  }, [formData]);

  if(loading) return <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}><CircularProgress color="info" size={80} thickness={5} /></div>

  return (
    <div>
      <Header change={formChangeHandler} submit={submitHandler}/>
      <Gallery photos={photos.results}/>
    </div>
  );
}

export default App;
