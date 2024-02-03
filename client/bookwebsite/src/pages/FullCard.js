import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../api/api";

const FullCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
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

  console.log(book, "jhgf");
  return <div>FullCard</div>;
};

export default FullCard;
