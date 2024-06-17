import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starIcons = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FaStar key={i} className="text-yellow-500" />);
  }

  // Add half star if needed
  if (hasHalfStar) {
    starIcons.push(<FaStarHalfAlt key="half-star" className="text-yellow-500" />);
  }

  // Add empty stars if necessary to complete 5 stars
  const totalStars = 5;
  while (starIcons.length < totalStars) {
    starIcons.push(<FaStar key={starIcons.length} className="text-gray-300" />);
  }

  return (
    <div className="flex">
      {starIcons.map((star, index) => (
        <span key={index} className='mr-1'>
          {star}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
