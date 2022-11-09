import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
    useTitle('UpdateReview')
  const review = useLoaderData();
  const { img, serviceName, userMessage, userEmail, _id } = review;
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("ielts-hub-token")}` },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Review updated successfully");
          navigate("/my-reviews");
        }
      });
  };

  return (
    <div className=" md:flex rounded bg-base-100 shadow-xl p-5 mx-10 my-10">
      <img src={img} alt="" className="rounded max-w-[730px]" />

      <div className="card-body">
        <h2 className="text-4xl font-bold">{serviceName}</h2>
        <p>Edit your review bellow</p>
        <form onSubmit={handleUpdate}>
          <textarea
            required
            name="text"
            className="textarea text-gray-600 textarea-info w-full max-w-md"
            defaultValue={userMessage}
          ></textarea>
          <p className="text-gray-500 mt-3">{userEmail}</p>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
