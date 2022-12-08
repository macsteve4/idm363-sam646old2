import React from "react";
import Categories from "../components/Categories/categories";
import Contbar from "../components/Contentbar/contentbar";
import './routestyles.css';

export default function HomePage(){

  return (
    <>
        <Contbar />
        <h1 className="opener"><b>Ramen Flavors</b></h1>
        <Categories />
    </>
  );
}

