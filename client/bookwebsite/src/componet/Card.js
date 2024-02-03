import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const defaultImage = "https://placehold.it/40x40"; // Replace with your default image URL

  const navigate = useNavigate();
  const hadleBookFullContent = () => {
    // Redirect to a page specific to the book's id
    navigate(`/card/${book.id}`);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[300]">
        {book.cover && (
          <img
            src={book.cover || defaultImage}
            alt={book.title}
            className="mb-4 rounded-lg w-full"
          />
        )}
        <div className="mb-2">
          <h2 className="text-xl font-semibold">{book?.title}</h2>
          <p className="text-gray-700 font-bold">Author:{book?.author}</p>
        </div>
        <div className="flex items-center flex-wrap mt-2 mb-2 w-full ">
          <p className="text-gray-600" onClick={hadleBookFullContent}>
            {book?.content.substring(0, 130)}....
          </p>
        </div>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-4 py-2 rounded ">
            Create
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded ">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
