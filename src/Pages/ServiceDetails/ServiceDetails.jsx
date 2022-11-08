import React from "react";

const ServiceDetails = () => {
  return (
    <section className="mx-2 my-10">
      <div className="container bg-gray-100 rounded-md max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block  gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-6 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-6">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="text-xs text-gray-400">February 19, 2021</span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </div>
        <div className="border-black w-full bg-gray-400 p-[0.5px]"></div>
        <div>
          <p>Review Section</p>

        <div className="my-8">
            <p><textarea className="textarea textarea-info" placeholder="write something"></textarea><br />
            <button className="btn btn-primary btn-sm normal-case">Review</button></p>
        </div>

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
