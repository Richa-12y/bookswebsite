const Card = ({ title, description }) => {
  const defaultImage = "https://placehold.it/40x40"; // Replace with your default image URL

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <input type="file" accept="image/*" className="mb-4" />

        <img
          src={defaultImage}
          alt="Book Cover"
          className="mb-4 rounded-lg w-full"
        />
        <div className="mb-2">
          <h2 className="text-xl font-semibold">What is Lorem Ipsum?</h2>
          <p className="text-gray-700 font-bold">Author:Richa</p>
        </div>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
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
