import React from 'react'

export default function Success() {
    return (
        <svg
          id="successAnimation"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          className="animated"
          viewBox="0 0 70 70"
        >
          <circle
            id="successAnimationCircle"
            cx="35"
            cy="35"
            r="24"
            fill="transparent"
            stroke="#005596"
            strokeLinecap="round"
            strokeWidth="2"
          ></circle>
          <path
            id="successAnimationCheck"
            fill="transparent"
            stroke="#005596"
            strokeWidth="2"
            d="M23 34L34 43 47 27"
          ></path>
        </svg>
    )
}