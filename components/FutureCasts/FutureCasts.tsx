"use client";
import { TMDB_TOKEN } from "@/apiCofig";
import MovieCard from "@/common/card/MovieCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import loadingIcon from "../../assets/images/loading.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FutureCasts = () => {
  const router = useRouter();
  const [futuredCastsData, setFuturedCastsData] = useState<any>([]);

  const getFuturedCasts = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setFuturedCastsData(res?.data?.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getFuturedCasts();
  }, []);

  return (
    <div className="lg:px-20 px-8 w-full">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-black text-3xl font-semibold">Featured Casts</div>
        <div
          onClick={() => router.push("future-casts")}
          className="text-[#BE123C] text-lg font-normal cursor-pointer"
        >{`See more >`}</div>
      </div>
      {futuredCastsData?.length > 0 ? (
        <Carousel
          itemClass="carousel-item-padding"
          responsive={responsive}
          // draggable={false}
          arrows={true}
        >
          {futuredCastsData?.map((item: any, index: number) => {
            return (
              <div key={index} className="w-full">
                <MovieCard item={item} index={index} />
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

export default FutureCasts;
