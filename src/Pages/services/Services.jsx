import React, { useEffect } from 'react';

const Services = () => {
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    return (
        <section className="my-10 px-3">
      <div className="relative mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center">My Services</h1>
        <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col mb-12 overflow-hidden cursor-pointer shadow-xl p-2 rounded-md">
            <a href="/">
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48 rounded-lg"
                  src="https://coachify.co.in/wp-content/uploads/2020/08/335-Complete-English-Course-Beginner-Level.jpg"
                  alt=""
                />
              </div>
            </a>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex-1">
               
                <div className="block mt-2 space-y-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Typography on app.
                  </h3>
                  <p>Price: $200</p>
                  <p className="text-lg font-normal text-gray-500">
                    Filling text so you can see how it looks like with text. Did
                    I said text?
                  </p>
                  <button className="btn btn-success btn-sm ">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Services;