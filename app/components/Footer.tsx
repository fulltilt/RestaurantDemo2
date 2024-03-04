import React from "react";
import { BsPinterest, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container pt-20 pb-20">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Vivamus quis lacinia magna. Aenean molestie sit amet sapien eu
            ullamcorper. Mauris lacinia libero ante, luctus sodales orci
            fringilla quis. Sed in lacus vitae lectus eleifend fringilla.
            Quisque placerat rhoncus turpis, a porta libero dignissim id.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-orange-500 text-2xl pt-16">
            <FaFacebookF />
            <BsTwitterX />
            <BsPinterest />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
