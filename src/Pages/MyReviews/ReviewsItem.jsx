import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ReviewsItem = () => {
  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          Jone Doe
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          jonne62@gmail.com
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <a
            className="text-green-500 hover:text-green-700 flex justify-end items-center"
            href="/"
          >
            <FaEdit className="mr-1" /> Edit
          </a>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <a
            className="text-red-500 hover:text-red-700 flex justify-end items-center"
            href="/"
          >
            <FaTrashAlt className="mr-1" /> Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default ReviewsItem;
