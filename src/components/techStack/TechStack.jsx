import { useState } from "react";
import "./styles.scss";

const TechStack = ({ techStackData }) => {
  const { heading, subheading, categories } = techStackData;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="px-3 py-4 md:px-[2rem] lg:!px-[5rem] lg:!py-16   xl:px-[9rem]">
      <div className="text-left">
        <h2  className=" title text-2xl font-bold text-navy md:text-[2.3rem]">
          {heading}
        </h2>
        <p className=" mt-4 mt-sm-0">
          {subheading}
        </p>
      </div>
      <div className="mt-10 lg:pt-[3rem]">
        <div className="categories lg:gap-[3rem]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn relative px-6 py-4   transition-colors sm:text-lg lg:text-xl ${
                selectedCategory.categoryName === category.categoryName
                  ? "active-category font-bold text-navy"
                  : "text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.categoryName}
              <span className="category-underline"></span>
            </button>
          ))}
        </div>
        <div className="py-10">
          <div className="tech-logo">
            {selectedCategory.stack.map((tech, stackIndex) => (
              <div key={stackIndex} className="px-[24px]">
                <div className="flex justify-center text-white">{tech.img}</div>
                <p className="mt-2 text-sm sm:text-base lg:text-lg">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
