import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto mt-16 text-center flex flex-col gap-10">
      <h1 className="font-bold text-4xl">Our Services</h1>
      <h3 className="text-gray-700 text-2xl w-[800px] mx-auto leading-10 font-bold">
        BookBite offers a range of services to enhance your reading experience
        and make discovering new books a breeze. Here are some of our key
        services:
      </h3>
      <div className="w-[500px] text-2xl flex flex-col items-start justify-start mx-auto leading-10 gap-5">
        <span className="bg-red-100 rounded-md">
          👉Personalized Book Recommendations
        </span>
        <span className="bg-yellow-100 rounded-md">
          👉Curated Book Collections
        </span>
        <span className="bg-green-100 rounded-md">
          👉Author Spotlights and Interviews
        </span>
        <span className="bg-blue-100 rounded-md">
          👉Book Clubs and Reading Communities
        </span>
        <span className="bg-teal-100 rounded-md">
          👉Easy Online Book Purchases
        </span>
        <span className="bg-red-100 rounded-md">
          👉Book Reviews and Ratings
        </span>
      </div>
    </div>
  );
};

export default Services;
