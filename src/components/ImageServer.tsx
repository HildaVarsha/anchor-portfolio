import Image, { ImageProps } from "next/image";

interface ImageServerProps extends ImageProps {
  className?: string;
  src: string;
  width: number;
  height: number;
}
const ImageServer = ({ alt, ...props }: ImageServerProps) => {
  return <Image alt={alt || "Loading Image"} {...props} loading="lazy" />;
};

export default ImageServer;
