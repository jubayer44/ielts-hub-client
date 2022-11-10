import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://ielts-hub-server-jubayer44.vercel.app/my-reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ielts-hub-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          logOut();
          localStorage.removeItem("ielts-hub-token");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setReviews(data);
        if (data.length) {
          setResult(true);
        }
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  //Review Delete
  const handleDelete = (id) => {
    const process = window.confirm("Are you sure you want to delete");

    if (process) {
      fetch(`https://ielts-hub-server-jubayer44.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("ielts-hub-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
            toast.success("Review Delete Success");
          }
        });
    }
  };

  return (
    <div>
      {!loading ? (
        loading
      ) : (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto my-10"></div>
      )}
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
                    <Link
                      to={`/update/${rvw._id}`}
                      className="text-green-500 hover:text-green-700 flex items-center border-2 px-2 rounded-md cursor-pointer"
                    >
                      <FaEdit className="mr-1" /> Edit
                    </Link>
                    <p
                      onClick={() => handleDelete(rvw._id)}
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
                              <Link
                                to={`/update/${rev._id}`}
                                className="text-green-500 hover:text-green-700 flex justify-end items-center cursor-pointer"
                              >
                                <FaEdit className="mr-1" /> Edit
                              </Link>
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
};
export default MyReviews;
