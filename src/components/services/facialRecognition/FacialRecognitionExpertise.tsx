import React from "react";

const FacialRecognitionExpertise = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/ai-partner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Discover our expertise in face recognition
          <span className="text-lime-500">{""} software development.</span>
        </p>
      </div>
      <div className="mt-12 p-4  lg:p-12 lg:container mx-auto text-slate-800 bg-amber-100 flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div>
          <p className="" data-aos="fade-up">
            <strong> Programming languages:</strong> Python, C++, JavaScript
          </p>
          <p className="py-4" data-aos="fade-up">
            <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
          </p>
          <p data-aos="fade-up">
            <strong>Cloud services:</strong> AWS Rekognition, Google Cloud
            Vision, Microsoft Azure Face API
          </p>
        </div>
        <div>
          <p className="" data-aos="fade-up">
            <strong>Image processing libraries: {""}</strong> OpenCV, Dlib,
            PIL/Pillow
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong> ML frameworks: {""}</strong> TensorFlow, Keras, PyTorch,
            MXNet
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>OPre-trained models: {""}</strong> FaceNet, VGG-Face,
            DeepFace, MotionMind AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacialRecognitionExpertise;
