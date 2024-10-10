import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import img from "../assets/1727438008481.jpg";

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const handleRating = (ratingValue) => {
    setRating(ratingValue);

    if (ratingValue === 4 || ratingValue === 5) {
      // Redirect immediately for 4-5 stars
      setTimeout(() => {
        window.location.href =
          "https://www.google.com/search?q=First+India+Credit&oq=First+India+Credit&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzQ0MGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x390ce3661a2e0ca9:0x1b30121558ae5bb3,3,,,,"; // Redirect to Google
      }, 0);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  // Define emojis based on rating
  const getEmoji = () => {
    if (rating === 1) return "😢";
    if (rating === 2) return "😕";
    if (rating === 3) return "😐";
    return null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900">
      {submitted && rating <= 3 ? (
        <div className="backdrop-blur-sm bg-white/30 p-10 rounded-xl shadow-xl text-center">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            Thank you! {getEmoji()}
          </h1>
          <p className="text-lg text-gray-600">We appreciate your feedback.</p>
        </div>
      ) : (
        <div className="border   h-[570px] w-[550px] rounded-lg justify-items-center ">
          <div className="flex absolute border m-[20px] mt-12 p-1 rounded-lg top-14">
            <img src={img} alt="img" className="w-[500px] rounded-lg" />
          </div>
          <div className="backdrop-blur-sm  bg-white/30 m-4 border mt-36 p-8 rounded-2xl shadow-5xl w-full max-w-lg">
            <h1 className="text-3xl font-bold bg-white inline-block text-transparent bg-clip-text mb-6 text-center">
              Rate Your Experience
            </h1>

            {/* Emoji Display for 1-3 Stars */}
            {rating && rating <= 3 && (
              <div className="text-center text-6xl mb-4">{getEmoji()}</div>
            )}

            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      className="hidden"
                      onClick={() => handleRating(ratingValue)}
                    />
                    <IoIosStar
                      className={`cursor-pointer transition-transform duration-200 transform hover:scale-110 ${
                        ratingValue <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      size={50}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            {/* Comment Field for 1-3 Stars */}
            {rating && rating <= 3 && (
              <div className="mb-6">
                <textarea
                  className="w-full p-2 backdrop-blur-sm bg-white/30 border border-gray-300 rounded-md"
                  placeholder="Please leave a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            )}

            {/* Submit Button for 1-3 Stars */}
            {rating && rating <= 3 && (
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 font-bold rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit your Feedback
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
