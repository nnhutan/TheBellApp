import React from "react";
import Slider from "../components/Slider";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";
import ServiceInfo from "../components/ServiceInfo";
function Home() {
  return (
    <div className="home-page">
      <Slider />
      <TopSellingPoducts />
      <NewProducts />
      <ServiceInfo />
    </div>
  );
}

export default Home;
