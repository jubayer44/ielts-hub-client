import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Table() {
  return (
    <div>
        <div className="md:hidden border-2 my-10 mx-5 bg-gray-100 rounded-md">
            <div className="max-w-md p-2 mx-auto">
                <p className="break-words"><span className="font-bold">Service Name:</span> <br /> <span className="text-gray-500">dkdkdkdkkkkk</span></p>
                <p className="break-words mt-3"><span className="font-bold">Review:</span> <br /> <span className="text-gray-500">ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</span></p>
                <div className="flex justify-evenly mt-3">
                <p className="text-green-500 hover:text-green-700 flex items-center border-2 px-2 rounded-md"><FaEdit className="mr-1"/> Edit</p>
                <p className="text-red-500 hover:text-red-700 flex items-center border-2 px-2 rounded-md"><FaTrashAlt className="mr-1"/> Delete</p>
                </div>
            </div>
        </div>
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Service Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Your Review
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
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
                       <FaEdit className="mr-1"/> Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700 flex justify-end items-center" href="/">
                       <FaTrashAlt className="mr-1"/> Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
