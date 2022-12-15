//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import FeedbackForm from './components/FeedbackForm'
const FeedbackForm = (props) => {
  const [feedback, setFeedback] = React.useState("");

  const MailText = () => {
    window.open(
      `mailto:shantanubombatkar2@gmail.com?subject=Feedback&body=${feedback}` //to send mail
    );
  };

  return (
    <div className="flex justify-center items-center rounded-lg shadow-lg p-2 bg-blog md:w-[80vh] mx-auto animate-bounce mt-20 md:mt-5 hover:animate-none">
      <div className="flex flex-col justify-center items-center text-white font-semibold">
        <p>Feedback is the most important part of any website.</p>
        <p>
          If you have any query, suggestion or feedback, Please feel free to
          contact us.
        </p>
      </div>
      <br />
      <textarea
        type="text"
        name=""
        id=""
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-60 pl-1 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blog/75"
      />
      <button
        className="bg-white text-blog rounded-lg p-1 px-2 ml-3 font-semibold"
        onClick={MailText}
      >
        Submit
      </button>
    </div>
  );
};

export default React.memo(FeedbackForm);
