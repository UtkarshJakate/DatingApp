import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";

const StarReview = (props) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        if (props.star_enable) {
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                className="radio-star"
                onClick={(e) => props.handleStar(e)}
              />
              {/* <FaStar
                size={30}
                color={
                  ratingValue <= (hover || props.rating) ? "#ffc107" : "e4e5e9"
                }
                className="star"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              /> */}
            </label>
          );
        } else {
          return (
            <label>
              {/* <FaStar
                size={30}
                color={
                  ratingValue <= (hover || props.rating) ? "#ffc107" : "e4e5e9"
                }
                className="star"
              /> */}
            </label>
          );
        }
      })}
    </div>
  );
};

export default StarReview;
