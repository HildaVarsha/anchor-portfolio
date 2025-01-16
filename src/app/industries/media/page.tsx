import {
  MediaAbout,
  MediaBanner,
  MediaDevelopment,
  MediaEntertainment,
  MediaStandOut,
  MediaTechnology,
} from "@/components/industries/media";
import React from "react";

const Media = () => {
  return (
    <div>
      <MediaBanner />
      <MediaAbout />
      <MediaEntertainment />
      <MediaTechnology />
      <MediaDevelopment />
      <MediaStandOut />
    </div>
  );
};

export default Media;
