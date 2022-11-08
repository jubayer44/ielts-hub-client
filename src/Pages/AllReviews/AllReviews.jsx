import React from 'react';

const AllReviews = ({review}) => {
    

    if(!review){
        return <div>please add a review</div>
    }

    return (
        <div className="container flex flex-col w-full max-w-lg  divide-y rounded-md divide-gray-700 bg-blue-100 mb-4">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={review?.userPhoto}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{review?.userName}</h4>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
              <p>
                {review?.userMessage}
              </p>
            </div>
          </div>
    );
};

export default AllReviews;