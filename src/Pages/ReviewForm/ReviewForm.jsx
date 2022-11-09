import React from 'react';

const ReviewForm = () => {
    return (
        <>
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
        </>
    );
};

export default ReviewForm;