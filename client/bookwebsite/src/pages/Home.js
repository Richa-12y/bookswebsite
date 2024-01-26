import React, { useEffect, useState } from "react";
import { getApi } from "../api/api";
import Card from "../componet/Card";

const Home = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const fetchedBooks = await getApi("/books");
      setBooks(fetchedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap -mx-4 mt-16">
        {books?.map((book) => (
          <Card key={book?.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
