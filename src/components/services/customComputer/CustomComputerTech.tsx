import React from "react";

const CustomComputerTech = () => {
  return (
    <div className="bg-white pb-16 text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-12">
        <div className="w-full">
          <p className="font-semibold">Frameworks</p>
          <li className="py-4">Language: Python</li>
          <li>CV libraries: OpenCV</li>
          <li className="py-4">
            Python libraries: SciPy, Scikit-learn, Seaborn, Pandas
          </li>
          <li>• Deep learning platforms: TensorFlow, Keras, PyTorch</li>
        </div>
        <div className="w-full">
          <p className="font-semibold">Feature Extraction</p>
          <li className="py-4">
            Neural Networks: CNN, LSTM, innovative neural networks for feature
            extraction (e.g., ResNet, VGG, CRAFT), neural networks for real-time
            object detection (e.g., Yolo), networks for face mesh prediction and
            pose estimation, GANs, Autoencoder/Variational Autoencoder models
          </li>
          <li>
            Traditional approaches: optical flow estimation and the SIFT, SURF,
            and ORB feature descriptors
          </li>
        </div>
        <div className="w-full">
          <p className="font-semibold">Feature Analysis</p>
          <li className="py-4">
            Probabilistic models like Hidden Markov Model or Bayesian networks
          </li>
          <li>Transfer learning techniques</li>
          <li className="py-4">
            {" "}
            Algorithms: optimization (e.g., the Metropolis-Hastings algorithm
            and the Nelder-Mead method), genetic algorithms, SLAM, clustering
            (e.g., K- means and DBScan), classification (e.g., support vector
            machines, SGD, decision trees, random forests), segmentation, and
            traditional algorithms (e.g., 3-P, homography estimation, edge
            detection)
          </li>
        </div>
      </div>
    </div>
  );
};

export default CustomComputerTech;
