import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading ] = useState(true);
  useTitle("Services");

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);



  return (
    <section className="my-10 px-3">
      {
        !loading ? loading : <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto my-10"></div>
      }
      <div className="relative mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center">My Services</h1>
        <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {services?.map((service) => {
            const { serviceName, price, description, img, _id } = service;
            return (
              <div
                key={service._id}
                className="flex flex-col mb-12 overflow-hidden cursor-pointer shadow-xl p-2 rounded-md border-2"
              >
                <div>
                  <div className="flex-shrink-0">
                    <PhotoProvider>
                      <PhotoView src={img}>
                        <img
                          className="object-cover w-full h-48 rounded-lg"
                          src={img}
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1 relative">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 mt-5 break-words">
                        {serviceName}
                      </h3>
                      <p className="text-red-500">Price: $ {price}</p>
                      <p className="text-lg font-normal text-gray-500 pb-14 break-words font-sans">
                        {description.length > 100
                          ? description.slice(0, 100) + "..."
                          : description}
                      </p>
                      <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary normal-case absolute bottom-0 w-full">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
