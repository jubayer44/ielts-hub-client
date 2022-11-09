import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

export default function Table() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [result, setResult] = useState(false);
  //   console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        if (data.length) {
          setResult(true);
        }
      })
      .catch((err) => console.log(err));
  }, [user?.email, result]);

  const handleDelete = (id) => {
    const process =  window.confirm('Are you sure you want to delete');

    if (process){

      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
          toast.success('Review Delete Success')
        }
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-4">My Reviews</h2>
      {result ? (
        <div>
          <div className="">
            {reviews?.map((rvw) => {
              return (
                <div
                  key={rvw._id}
                  className="max-w-md p-2 mx-auto md:hidden border-2 my-10  bg-gray-100 rounded-md"
                >
                  <p className="break-words">
                    <span className="font-bold">Service Name:</span> <br />{" "}
                    <span className="text-gray-500">{rvw.serviceName}</span>
                  </p>
                  <p className="break-words mt-3">
                    <span className="font-bold">Review:</span> <br />{" "}
                    <span className="text-gray-500">{rvw.userMessage}</span>
                  </p>
                  <div className="flex justify-evenly mt-3">
                    <p className="text-green-500 hover:text-green-700 flex items-center border-2 px-2 rounded-md cursor-pointer">
                      <FaEdit className="mr-1" /> Edit
                    </p>
                    <p
                      onClick={handleDelete}
                      className="text-red-500 hover:text-red-700 flex items-center border-2 px-2 rounded-md cursor-pointer"
                    >
                      <FaTrashAlt className="mr-1" /> Delete
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden md:block my-10 mx-5">
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
                          Review
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
                    {reviews?.map((rev) => {
                      return (
                        <tbody
                          key={rev._id}
                          className="divide-y divide-gray-200"
                        >
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {rev.serviceName}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {rev.userMessage}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <p className="text-green-500 hover:text-green-700 flex justify-end items-center cursor-pointer">
                                <FaEdit className="mr-1" /> Edit
                              </p>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <p
                                className="text-red-500 hover:text-red-700 flex justify-end items-center cursor-pointer"
                                onClick={() => handleDelete(rev._id)}
                              >
                                <FaTrashAlt className="mr-1" /> Delete
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90vh] flex justify-center items-center text-3xl font-bold text-red-400">
          <h2>No reviews were added</h2>
        </div>
      )}
    </div>
  );
}
