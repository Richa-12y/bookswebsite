const Card = ({ book }) => {
  const defaultImage = "https://placehold.it/40x40"; // Replace with your default image URL

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
        <p className="text-gray-600 mb-4">{book?.content}</p>
        <div className="flex items-center flex-wrap mt-2 mb-2 w-full ">
          <a className="text-indigo-500 inline-flex items-center mr-4 md:mb-2 lg:mb-0">
            Read More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
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
