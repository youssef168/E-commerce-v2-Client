import React, { Fragment, useEffect } from "react";
import NavLayout from "../layouts/NavLayout";
import Hero from "../components/Hero";
import jwtDecode from "jwt-decode";
import SectionSlider from "../features/Home/components/SectionSlider";
import SectionCards from "../features/Home/components/SectionCards";
import FeaturedProdcuts from "../features/Home/components/FeaturedProdcuts";

const Home = () => {
  const token = localStorage.getItem("access")
    ? JSON.parse(localStorage.getItem("access") || "")
    : undefined;
  const decoded_token = jwtDecode(token!);
  console.log(decoded_token);
  return (
    <NavLayout>
      <Hero />
      <SectionSlider />
      <SectionCards />
      <FeaturedProdcuts />
    </NavLayout>
  );
};

export default React.memo(Home);
