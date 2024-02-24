/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import VerticalSlider from "../VerticalSlider/VerticalSlider";
import axios from "axios";
import { Movie_Slider_Api, TMDB_TOKEN } from "../../apiCofig";

const MovieSlider = () => {
  const [topMovieData, setTopMovieData] = useState<any>([]);

  const getMovieTopSlider = async () => {
    await axios
      .get(Movie_Slider_Api, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TMDB_TOKEN}`,
        },
      })
      .then((res) => {
        setTopMovieData(res?.data?.results?.slice(0, 5));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getMovieTopSlider();
  }, []);

  return (
    <div className="relative">
      <VerticalSlider topMovieData={topMovieData} />
    </div>
  );
};

export default MovieSlider;
