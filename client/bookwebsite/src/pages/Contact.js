import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto mt-16 text-center w-full flex flex-col  items-center justify-center h-[400px] gap-11">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-2xl w-[800px] mx-auto leading-10 font-bold">
        Have questions, suggestions, or just want to say hello? We'd love to
        hear from you! Reach out to us through the following contact
        information:
      </p>
      <div className="mt-4">
        <p className="text-gray-700">
          <strong>Email:</strong> info@bookbite.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 Book Street, Readingville, RB1 2BC
        </p>
      </div>
    </div>
  );
};

export default Contact;
