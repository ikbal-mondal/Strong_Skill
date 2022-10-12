import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShowQuize.css";

const ShowQuiz = ({ quiz, index }) => {
  const { options, question, correctAnswer } = quiz;

  //  console.log(quiz);
  const ShowRightAnswer = () => {
    if (true) {
      toast.success(correctAnswer, { autoClose: 500 });
    }
  };

  const handleRadioBox = (e) => {
    if (correctAnswer === e) {
      // console.log(correctAnswer);

      toast.success("correct answer", { autoClose: 500 });
    } else {
      toast.error("incorrect answer", { autoClose: 500 });
    }
  };

  return (
    <div className="">
      <div className="border my-8 shadow-2xl shadow-slate-900 rounded-2xl p-5 bg-yellow-100 ">
        <div className="">
          <div className="flex  justify-between items-center">
            <span className="text-2xl text-black">
              {" "}
              Quiz {index === 0 ? (index = 1) : index + 1}
            </span>
            <div className="">
              <EyeSlashIcon
                onClick={ShowRightAnswer}
                className="h-6 w-6 text-slate-600"
              />
            </div>
          </div>
          <h1 className="text-xl m-2 text-black">{question.slice(3, -4)}</h1>
          <ToastContainer />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[0]}{" "}
          </button>

          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[1]}{" "}
          </button>

          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[2]}{" "}
          </button>

          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[3]}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowQuiz;
