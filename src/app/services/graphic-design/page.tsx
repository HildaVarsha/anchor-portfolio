import {
  GraphicDesignAbout,
  GraphicDesignBanner,
  GraphicDesignExperts,
  GraphicDesignServices,
  GraphicDesignStayAhead,
  GraphicDesignTechnologies,
} from "@/components/graphicDesign";
import React from "react";

const GraphicDesign = () => {
  return (
    <div>
      <GraphicDesignBanner />
      <GraphicDesignAbout />
      <GraphicDesignServices />
      <GraphicDesignExperts />
      <GraphicDesignStayAhead />
      <GraphicDesignTechnologies />
    </div>
  );
};

export default GraphicDesign;
