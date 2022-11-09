import React from "react";
import toast from "react-hot-toast";

const AddService = () => {

const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.name.value;
    const price = form.price.value;
    const img = form.imgUrl.value;
    const description = form.description.value;
    const rating = null;
    form.reset();
    fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({serviceName, price, description, img, rating})
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            toast.success('Successfully added a service')
        }
    })
};





  return (
    <section className=" flex flex-col-reverse gap-0 lg:grid-cols-12">
      <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-8 xl:p-12 md:w-4/5">
        <h1 className="mt-2 mb-4 text-xl text-center text-gray-800 font-bold">
          Add Service Here
        </h1>
        <form
        onSubmit={handleSubmit}
        className="text-center">
          <label htmlFor="name">Service Name</label> <br />
          <input
            type="text"
            required
            name="name"
            placeholder="service name"
            className="input input-bordered input-accent w-full max-w-xs mb-4"
          />{" "}
          <br />
          <label htmlFor="name">Price</label> <br />
          <input
            type="number"
            required
            name="price"
            placeholder="price"
            className="input input-bordered input-accent w-full max-w-xs mb-4"
          />{" "}
          <br />
          <label htmlFor="name">Image Url</label> <br />
          <input
            type="text"
            name="imgUrl"
            placeholder="image url"
            className="input input-bordered input-accent w-full max-w-xs mb-4"
          />{" "}
          <br />
          <label htmlFor="name">Description</label> <br />
          <textarea
            required
            name="description"
            className="textarea textarea-info w-full max-w-xs"
            placeholder="write something"
          ></textarea> <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col-span-1 lg:col-span-4">
        <img
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="3 women looking at a laptop"
          className="object-cover w-full h-64 min-h-full bg-gray-100"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AddService;
