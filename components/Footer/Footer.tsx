import React from "react";
import fbImg from "../../assets/images/fa-brands_facebook-square.svg";
import instaImg from "../../assets/images/insta.svg";
import youtubeImg from "../../assets/images/youtube.svg";
import twiterImg from "../../assets/images/fa-brands_twitter.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-8 mt-32">
      <div className="flex items-center gap-10 justify-center mb-6">
        <Link href="https://www.facebook.com" target="_blank">
          <Image
            src={fbImg}
            width={24}
            height={24}
            alt="fb"
            className="cursor-pointer"
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Image
            src={instaImg}
            width={24}
            height={24}
            alt="insta"
            className="cursor-pointer"
          />
        </Link>
        <Link href="https://twitter.com/i/flow/login" target="_blank">
          <Image
            src={twiterImg}
            width={24}
            height={24}
            alt="twiter"
            className="cursor-pointer"
          />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
          <Image
            src={youtubeImg}
            width={24}
            height={24}
            alt="youtube"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="sm:flex text-center items-center gap-10 justify-center mb-6">
        <p className="text-lg font-bold text-[#111827]">Conditions of Use</p>
        <p className="text-lg font-bold text-[#111827]">Privacy & Policy</p>
        <p className="text-lg font-bold text-[#111827]">Press Room</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold text-[#6B7280]">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
