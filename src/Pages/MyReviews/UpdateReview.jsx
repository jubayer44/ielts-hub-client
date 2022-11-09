import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  const { img, serviceName, userMessage, userEmail, _id } = review;
  console.log(review);

  const handleUpdate = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    console.log(_id);

    fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text}),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
             
            if(data.modifiedCount){
              alert('update success');
          }
  
        });



  };

  return (
    <div className=" md:flex rounded bg-base-100 shadow-xl p-5 mx-10 my-10">
      <img src={img} alt="" className="rounded" />

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
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
       </form>
      </div>
    </div>
  );
};

export default UpdateReview;
