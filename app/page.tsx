"use client";
import React, { useState } from "react";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import Header from "@/components/Header/Header";
import FutureMovie from "@/components/FutureMovie/FutureMovie";
import FutureCasts from "@/components/FutureCasts/FutureCasts";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  const [searchText, setSearchText] = useState<any>("");

  return (
    <div className="relative">
      <div className="absolute top-0 z-10 w-full">
        <Header setSearchText={setSearchText} />
      </div>
      <MovieSlider />
      <div className="my-10 w-full">
        <FutureMovie />
      </div>
      <div className="my-10 w-full">
        <FutureCasts />
      </div>
      <Footer />
    </div>
  );
}
