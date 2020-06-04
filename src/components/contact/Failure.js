import React from 'react'

export default function Failure() {
    return (
        <svg
          id="failureAnimation"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          className="animated"
          viewBox="0 0 70 70"
        >
          <circle
            id="failureAnimationCircle"
            cx="35"
            cy="35"
            r="24"
            fill="transparent"
            stroke="#005596"
            strokeLinecap="round"
            strokeWidth="2"
          ></circle>
          <path
            fill="transparent"
            stroke="#005596"
            strokeWidth="2"
            d="M25 25L45 45"
            className="failureAnimationCheckLine"
          ></path>
          <path
            fill="transparent"
            stroke="#005596"
            strokeWidth="2"
            d="M45 25L25 45"
            className="failureAnimationCheckLine"
          ></path>
      </svg>
    )
}