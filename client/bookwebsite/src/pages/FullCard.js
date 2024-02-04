import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../api/api";
import "./FullCard.css";
const FullCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBookById = async (bookId) => {
    try {
      const fetchedBook = await getApi(`/books/${bookId}`);
      setBook(fetchedBook);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  // Split the content into an array of words
  const words = book.content ? book.content.split(/\s+/) : [];

  // Split words into chunks of 100 words per page
  const wordsPerPage = 15;
  const totalPages = Math.ceil(words.length / wordsPerPage);
  const contentPages = Array.from({ length: totalPages }, (_, index) =>
    words.slice(index * wordsPerPage, (index + 1) * wordsPerPage).join(" ")
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="book relative w-full h-full transform-style-preserve-3d transition-transform duration-500">
        <div className="page box-border w-full h-full relative flex flex-col justify-center items-center bg-gray-200 border border-solid border-gray-300 p-8 transform-origin-left transition-transform duration-500 ease-in-out shadow-md">
          {Object.keys(book).length > 0 && (
            <>
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-[450px] border border-solid border-gray-300 shadow-md mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700 font-bold">Author: {book.author}</p>
            </>
          )}
        </div>
        <div className="page box-border w-full relative flex flex-col justify-center items-center bg-white border border-solid border-gray-300 p-8 transform-origin-left transition-transform duration-500 ease-in-out shadow-md rotate-y-180">
          <div className="text-justify mb-4 text-2xl font-semibold capitalize">
            {contentPages[currentPage - 1]}
          </div>
          <div className="flex justify-between w-full">
            <button
              onClick={handlePreviousPage}
              className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="bg-green-500 text-white px-4 py-2 rounded font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
