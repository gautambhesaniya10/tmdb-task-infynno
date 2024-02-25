/* eslint-disable @next/next/no-img-element */
"use client";
import { TMDB_TOKEN } from "@/apiCofig";
import MovieCard from "@/common/card/MovieCard";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import loadingIcon from "../../assets/images/loading.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const FutureMovie = () => {
  const [futuredMovieData, setFuturedMovieData] = useState<any>([]);

  const getFuturedMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setFuturedMovieData(res?.data?.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getFuturedMovies();
  }, []);

  return (
    <div className="px-20">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-black text-3xl font-semibold">Featured Movie</div>
        <div className="text-[#BE123C] text-lg font-normal">{`See more >`}</div>
      </div>

      {futuredMovieData?.length > 0 ? (
        <Carousel centerMode={true} responsive={responsive}>
          {futuredMovieData?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <MovieCard item={item} index={index} onlyFutureMovie={true} />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className="w-full flex justify-center items-center h-[350px]">
          <Image src={loadingIcon} alt="" width={50} height={50} />
        </div>
      )}
    </div>
  );
};

export default FutureMovie;
