const Card = ({ book }) => {
  const defaultImage = "https://placehold.it/40x40"; // Replace with your default image URL

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
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
        <p className="text-gray-600 mb-4">{book?.content}</p>
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
