/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie_Slider_Api, TMDB_TOKEN } from "../../apiCofig";
import VerticalSlider from "@/common/VerticalSlider/VerticalSlider";
import Image from "next/image";
import loadingIcon from "../../assets/images/loading.svg";

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
      {topMovieData?.length > 0 ? (
        <VerticalSlider topMovieData={topMovieData} />
      ) : (
        <div className="w-full flex justify-center items-center h-[450px]">
          <Image src={loadingIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default MovieSlider;
