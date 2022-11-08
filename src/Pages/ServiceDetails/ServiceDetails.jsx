import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState({});

  const { img, serviceName, price, description, rating } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const handleReview = (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    const review = {
      serviceName,
      img,
      price,
      userName: user?.displayName || null,
      userPhoto: user?.photoURL || null,
      userMessage: text,
    };
    console.log(review);

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err.message));
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

          <div className="container flex flex-col w-full max-w-lg  divide-y rounded-md divide-gray-700 bg-blue-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs">2 days ago</span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
