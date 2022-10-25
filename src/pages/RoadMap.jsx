import React from "react";
import RoadMapContainer from "../components/roadMapContainer/RoadMapContainer";
import RoadMapHeader from "../components/roadMapHeader/RoadMapHeader";
import RoadMapNav from "../components/roadMapNav/RoadMapNav";
import { Outlet } from "react-router-dom";

const categories = [
  {
    to: "planned",
    text: "Planned",
  },
  {
    to: "in-progress",
    text: "In-Progress",
  },
  {
    to: "live",
    text: "Live",
  },
];

const RoadMap = () => {
  return (
    <RoadMapContainer>
      <RoadMapHeader />
      <RoadMapNav categories={categories} />
      <Outlet />
    </RoadMapContainer>
  );
};

export default RoadMap;
