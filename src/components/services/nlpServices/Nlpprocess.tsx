"use client";
import { useState } from "react";

const industryContent: Record<
  string,
  { description: string; points: string[] }
> = {
  "Data Preprocessing": {
    description:
      "To clean and process raw text data, using techniques like tokenization, stemming, lemmatization, stop word removal, and more, our toolkit includes:",
    points: [
      "NLTK, SpaCy, TextBlob, and other libraries for specific NLP tasks",
      "Data normalization, data cleaning, and data transformation techniques",
      "Pandas, NumPy, and Scikit-learn for general-purpose data manipulation, analysis, and ML",
      "Theft prevention",
      "Personalized product recommendations",
      "Visual inventory inspections",
      "Counterfeit detection",
    ],
  },
  "Feature Extraction": {
    description:
      "Extract essential features from raw text for further processing and modeling. We utilize tools like:",
    points: [
      "TF-IDF and Bag-of-Words",
      "Word2Vec and GloVe embeddings",
      "Contextual embeddings like BERT and GPT",
      "Feature engineering for domain-specific applications",
    ],
  },
  "Text Embedding": {
    description:
      "Convert text data into dense vectors for machine learning models. Our expertise includes:",
    points: [
      "Word embeddings like FastText and GloVe",
      "Sentence embeddings for document-level analysis",
      "Dimensionality reduction techniques like PCA and t-SNE",
    ],
  },
  "Language Models": {
    description:
      "Develop language models for natural language understanding and generation. We specialize in:",
    points: [
      "Fine-tuning GPT, BERT, and T5",
      "Developing domain-specific models",
      "Creating multi-lingual NLP solutions",
    ],
  },
  "Gen AI": {
    description:
      "Leverage Generative AI to create content, automate workflows, and enhance creativity. Our services include:",
    points: [
      "Content generation using GPT models",
      "Code generation with Codex",
      "Text-to-image generation",
      "Custom generative solutions for specific industries",
    ],
  },
};

const Nlpprocess = () => {
  const [selectedIndustry, setSelectedIndustry] =
    useState("Data preprocessing");

  return (
    <div className="py-16 bg-white text-slate-800">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div className="flex flex-row flex-wrap lg:flex-col gap-4">
          {Object.keys(industryContent).map((industry) => (
            <button
              key={industry}
              data-aos="fade-up"
              onClick={() => setSelectedIndustry(industry)}
              className={`font-semibold text-2xl ${
                selectedIndustry === industry ? "text-blue-600" : ""
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
        <div>
          <p className="text-lg font-medium" data-aos="fade-up">
            {industryContent[selectedIndustry]?.description}
          </p>
          <ul className="py-4 list-disc list-inside" data-aos="fade-up">
            {industryContent[selectedIndustry]?.points.map((point, index) => (
              <li
                key={index}
                data-aos="fade-up"
                className={index % 2 === 0 ? "py-2" : ""}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nlpprocess;
