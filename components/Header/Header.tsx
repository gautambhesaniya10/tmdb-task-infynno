import Image from "next/image";
import React from "react";
import tvLogo from "../../assets/images/tv.svg";
import menuImg from "../../assets/images/Menu.svg";
import searchIcon from "../../assets/images/Search.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-[5%] mt-4">
      <div className="flex items-center gap-4 cursor-pointer">
        <Image src={tvLogo} width={50} height={50} alt="tv" />
        <p className="text-white text-2xl font-semibold select-none">MovieBox</p>
      </div>
      <div className='lg:w-[400px] md:w-[300px] hidden md:block relative'>
        <input type='text' placeholder='What do you want to watch ?' className='bg-transparent w-[100%] border-2 border-white rounded-md py-1 px-2 text-white' />
        <Image src={searchIcon} width={16} height={16} alt="tv" className="absolute top-2 right-3 cursor-pointer z-10" />
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <p className="text-white text-base font-semibold">Sign in</p>
        <Image src={menuImg} width={36} height={36} alt="tv" />
      </div>
    </div>
  );
};

export default Header;
