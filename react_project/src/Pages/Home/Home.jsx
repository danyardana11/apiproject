// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "src/Components/button";
import Post from "src/Forms/Post/Post";
import data from "src/Forms/Post/data";
import HomeSlider from "./HomeSlider";
import "./module.css";
import PlantCollection from "./PlantCollection";
import Service from "./Services";
import DiscountSection from "./DiscountSection";
import ChoosingUs from "./ChoosingUs";
import GiftCollection from "./GiftCollection";
export default function Home({ className = "", children }) {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <div className="w-5/6 mx-auto mt-[1rem] scrollbar-hide">
        <PlantCollection></PlantCollection>
        <Service></Service>
      </div>
        <DiscountSection></DiscountSection>
      <div className="w-5/6 mx-auto mt-[1rem] scrollbar-hide">
        <ChoosingUs></ChoosingUs>
        <GiftCollection></GiftCollection>
      </div>
    </div>
  );
}

        // <div className="grid grid-cols-5 gap-4 mb-12 mt-20 bg-transparent">
        //   {data.map((post) => (
        //     <Post
        //       key={post.id}
        //       className=""
        //       photo={post.src}
        //       title={post.title}
        //       price={post.price}
        //     ></Post>
        //   ))}
        // </div>