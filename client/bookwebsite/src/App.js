import "./App.css";
import Card from "./componet/Card";
import Navbar from "./componet/Navbar";
import { getApi } from "../../../client/bookwebsite/src/api/api";
import { useEffect, useState } from "react";

function App() {
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
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 mx-auto p-8 overflow-y-auto bg-teal-100">
        <div className="flex flex-wrap -mx-4 mt-16">
          {books?.map((book) => (
            <Card key={book?.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
