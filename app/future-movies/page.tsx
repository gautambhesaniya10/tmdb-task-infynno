"use client";
import { TMDB_TOKEN } from "@/apiCofig";
import MovieCard from "@/common/card/MovieCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import loadingIcon from "../../assets/images/loading.svg";

const FutureMoviesPage = () => {
  const [futuredMovieData, setFuturedMovieData] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  const [searchText, setSearchText] = useState<any>("");
  const [page, setPage] = useState<any>(1);

  const FilterSearchData = futuredMovieData?.filter((item: any) =>
    item?.original_title.toLowerCase().includes(searchText.toLowerCase())
  );

  const getFuturedMovies = async () => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        }
      )
      .then((res) => {
        if (page === 1) {
          setFuturedMovieData(res.data.results);
        } else {
          setFuturedMovieData((prevData: any) => [
            ...prevData,
            ...res.data.results,
          ]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFuturedMovies();
  }, [page]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      setPage((prevPage: any) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-black pb-4 pt-1">
        <Header setSearchText={setSearchText} />
      </div>
      {FilterSearchData?.length > 0 ? (
        <div className="flex gap-4 flex-wrap mt-10 justify-center">
          {FilterSearchData?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <MovieCard item={item} index={index} onlyFutureMovie={true} />
              </div>
            );
          })}
          {loading && (
            <div className="w-full flex justify-center items-center h-[100px]">
              <Image src={loadingIcon} alt="" width={50} height={50} />
            </div>
          )}
        </div>
      ) : searchText === "" ? (
        <div className="w-full flex justify-center items-center h-[350px]">
          <Image src={loadingIcon} alt="" width={50} height={50} />
        </div>
      ) : (
        <div className="text-center my-16 text-black font-bold">
          Not Found Data !{" "}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FutureMoviesPage;
