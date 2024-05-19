import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import Loader from "./components/Loader";
const App = () => {
  const API = "noaOXzk0UvtVCuBRprugJ99uYFkrZu8H1Swg2ZxcCfMAPOjcFi07iqzN";
  const URL = "https://api.pexels.com/v1/search?query=nature&per_page=1";

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("cars,space");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=70`,
        {
          headers: {
            Authorization: API,
          },
        }
      );
      setImages(res.data.photos); //value received by api response
      // here if there image on screen then loader becomes false
      setLoader(false);

      console.log("response generated", res.data.photos);
    };

    const data = JSON.parse(localStorage.getItem("images"));
    if (data) {
      setSaved(data);
    }
    fetchImage();
  }, [search]);

  useEffect(() => {
    if (saved.length != 0) {
      const string = JSON.stringify(saved); //Converting the saved array to a JSON string allows you to store it in the localStorage,
      // which only supports storing data as strings.
      localStorage.setItem("images", string);
    }
  }, [saved]);

  return (
    <div>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved saved={saved} loader={loader} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

