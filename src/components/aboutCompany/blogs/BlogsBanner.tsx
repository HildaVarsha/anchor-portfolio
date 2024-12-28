import React from "react";

const BlogsBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/blog-banner-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-screen"
    >
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col  justify-center h-full">
        <p className="text-2xl md:text-8xl font-semibold ">Thinking</p>
        <p className="font-semibold pt-6">Useful. Relevant. Challenging.</p>
      </div>
    </div>
  );
};

export default BlogsBanner;
