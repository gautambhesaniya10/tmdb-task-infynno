/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import playButton from "../../assets/images/Play.png";
import Image from "next/image";

const VerticalSlider = ({ topMovieData }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<any>(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex: any) =>
      prevIndex === topMovieData?.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  return (
    <div>
      <div className="absolute top-1/2 right-4 z-10">
        {topMovieData?.map((item: any, index: any) => (
          <div
            className="grid grid-cols-2 cursor-pointer"
            key={index}
            onClick={() => setCurrentImageIndex(index)}
          >
            {currentImageIndex === index ? (
              <span className={`text-white`}>-</span>
            ) : (
              <span>{""}</span>
            )}
            <p
              className={`${
                currentImageIndex === index ? "text-white" : "text-[#9CA3AF]"
              }`}
            >
              {index + 1}
            </p>
          </div>
        ))}
      </div>
      <div className="overflow-hidden lg:h-[600px] h-[450px]">
        <div
          className="flex flex-col transition-transform duration-500 lg:h-full h-[450px]"
          style={{
            transform: `translateY(-${currentImageIndex * 100}%)`,
          }}
        >
          {topMovieData?.map((item: any, index: any) => (
            <div key={index} className="w-full lg:h-full h-[450px] relative">
              <img
                src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                alt="Slider Image"
                className="w-full lg:h-full h-[450px] object-fill"
              />
              <div className="innerTextDiv absolute z-10 lg:top-[30%] top-[15%] left-[5%] lg:w-[400px] w-[300px]">
                <p className="text-white font-semibold lg:text-[48px] text-[35px] line-clamp-2 pb-3">
                  {item?.original_title}
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <p className="bg-yellow-500 text-black py-1 px-2 rounded">
                    IMDB
                  </p>
                  <p className="text-white">86.0 / 100</p>
                  <p className="text-white ml-4">97%</p>
                </div>
                <p className="text-white font-medium text-sm mb-3 line-clamp-6">
                  {item?.overview}
                </p>
                <button className="bg-[#BE123C] py-[6px] px-4 rounded-md text-white font-semibold text-base flex gap-2 items-center">
                  <Image src={playButton} alt="play" />
                  Watch Trailer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
