import {
  DetectionAbout,
  DetectionAtAnchor,
  DetectionAtGlance,
  DetectionBanner,
  DetectionCustomized,
  DetectionServices,
  DetectionSolutions,
} from "@/components/services/anomalyDetection";

const Detection = () => {
  return (
    <div>
      <DetectionBanner />
      <DetectionAbout />
      <DetectionSolutions />
      <DetectionServices />
      <DetectionCustomized />
      <DetectionAtAnchor />
      <DetectionAtGlance />
    </div>
  );
};

export default Detection;
