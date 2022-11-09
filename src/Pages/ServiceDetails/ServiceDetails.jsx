import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import AllReviews from "../AllReviews/AllReviews";

const ServiceDetails = () => {
  const service = useLoaderData()
  const { user} = useContext(AuthContext);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [datas, setDatas] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;

  const { img, serviceName, price, description, rating } = service;



  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [datas, id]);

  const handleReview = (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    if(!user){
      return toast.error('Please Login')
    }

    const review = {
      serviceName,
      img,
      price,
      serviceId: id,
      userEmail: user?.email || null,
      userName: user?.displayName || null,
      userPhoto: user?.photoURL || null,
      userMessage: text,
    };

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data?.insertedId) {
          toast.success("Review successfully added");
          setDatas(data.insertedId)
          navigate(from, { replace: true });
        }
      })
      .catch((err) => console.error(err.message));
    e.target.reset();
  };

  return (
    <section className="mx-2 my-10">
      <div className="container bg-gray-100 rounded-md max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block  gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
          <img
            src={img}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-6 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-6">
            <h3 className="text-2xl font-semibold sm:text-4xl">
              {serviceName}
            </h3>
            <p className="flex items-center font-sans font-semibold">
              <FaStar className="mr-2 text-yellow-500" />
              {rating}
            </p>
            <p className="text-red-500 font-semibold font-sans">
              Price: $ {price}
            </p>
            <p>{description}</p>
            <button className="btn btn-primary normal-case">
              Enroll Today
            </button>
          </div>
        </div>
        <div className="border-black w-full bg-gray-400 p-[0.5px]"></div>
        <div>
          <p className="text-2xl font-bold">Review Section</p>

          <form onSubmit={handleReview} className="my-8">
            <textarea
              required
              name="text"
              className="textarea textarea-info w-full max-w-md"
              placeholder="write something"
            ></textarea>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-sm normal-case"
            >
              Review
            </button>
          </form>
          {
            user ? null : <h2 className="font-semibold my-8">Please <Link to='/login' className='text-blue-600'><b>Login</b> </Link> to add a review.</h2>
          }

          {
            reviews.map(review => <AllReviews key={review._id} review={review}/>)
          }
          
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
