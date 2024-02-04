import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-16 text-center">
      <h1 className="text-3xl font-bold mb-4">About BookBite</h1>
      <div className="w-[650px] bg-gray-100 text-white text-3xl flex justify-end p-4 rounded-md">
        <p className="text-gray-700 text-justify">
          Welcome to BookBite, your go-to destination for exploring and
          discovering a wide range of captivating books. We believe in the power
          of stories to inspire, educate, and entertain. Our mission is to
          connect readers with their next great read and create a community that
          celebrates the joy of reading.
        </p>
      </div>
      <div className="w-[650px] bg-gray-100 text-white text-3xl flex float-right p-4 rounded-md">
        <p className="text-gray-700 mt-4 text-justify">
          At BookBite, we curate a diverse collection of books across genres,
          providing you with recommendations that suit your taste and
          preferences. Whether you're a seasoned bookworm or just getting
          started on your reading journey, we have something for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
