/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import heartIcon from "../../assets/images/heart_Icon.svg";
import appleIcon from "../../assets/images/PngItem_1381056 1.svg";
import Image from "next/image";
import noImage from "../../assets/images/No-Image-Placeholder.svg.png";

const MovieCard = ({ item, index, onlyFutureMovie }: any) => {
  const date = new Date();
  const getFullYear = date.getFullYear();

  return (
    <div className="lg:w-[240px] sm:w-[220px] w-auto relative">
      {item?.poster_path || item?.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${
            onlyFutureMovie ? item?.poster_path : item?.profile_path
          }`}
          className="w-full h-[370px] object-cover mb-3"
          alt="img"
        />
      ) : (
        <Image
          src={noImage}
          className="w-full h-[370px] object-cover mb-3"
          alt="img"
        />
      )}

      {onlyFutureMovie && (
        <div className="flex items-center justify-between absolute top-4 w-full px-4">
          {index === 0 && (
            <p className="py-1 px-2 text-black text-xs font-bold bg-[#9CA3AF] rounded-xl">
              TV SERIES
            </p>
          )}
          <div className="flex items-center justify-center ml-auto w-[30px] h-[30px] bg-[#9CA3AF] rounded-full">
            <Image src={heartIcon} alt="heart" width={20} height={20} />
          </div>
        </div>
      )}
      {onlyFutureMovie && (
        <p className="pb-2 text-xs font-semibold text-[#9CA3AF] line-clamp-1">
          USA, {item?.release_date?.split("-")[0]}{" "}
          {getFullYear.toString() === item?.release_date?.split("-")[0]
            ? "- Current"
            : ""}
        </p>
      )}
      <p className="pb-2 text-base font-semibold line-clamp-1">
        {onlyFutureMovie ? item?.original_title : item?.original_name}
      </p>

      {onlyFutureMovie && (
        <>
          <div className="flex items-center gap-3 mb-3">
            <p className="bg-yellow-500 text-black text-xs font-bold py-[2px] px-2 rounded">
              IMDB
            </p>
            <p className="text-black text-xs">
              {(item?.vote_count / item?.vote_average).toFixed(1)} / 100
            </p>
            <div className="ml-4 flex items-center gap-2">
              <Image src={appleIcon} alt="heart" width={15} height={15} />
              <p className="text-black text-xs">
                {((item?.vote_count * item?.vote_average) / 100).toFixed(1)}%
              </p>
            </div>
          </div>
          <p className="pb-2 text-xs font-semibold text-[#9CA3AF] line-clamp-1">
            Action, Adventure, Horror
          </p>
        </>
      )}
    </div>
  );
};

export default MovieCard;
