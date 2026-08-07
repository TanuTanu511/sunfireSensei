import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "../ui/button";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-3xl font-semibold text-[#318ce7] font-sans">Categories</h1>
        <p className="mt-2 text-lg">Explore our extensive job market</p>
      </div>
      <Carousel className="w-full max-w-xl mx-auto my-15">
        <CarouselContent>
          {Category.map((Category, index) => {
            return (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3 ml-5">
                <Button className="bg-[#ffd800] p-5">{Category}</Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious/>
      </Carousel>
    </div>
  );
};

export default Categories;
