"use client";
import { useState } from "react";
import bgImage from "/src/assets/background.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 25;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure harshu?",
      "What if I asked really nicely?",
      "Harshu Baby please",
      "With a dal bhat and papad and me",
      "What about kitkat chocolate",
      "PLEASE Harshu bala",
      "Me yeil bhetayla",
      "Me marel haa ata",
      "Nhi aikt tu mazza",
      "accha nkooy na me valentine ??",
      "please harshu babyyy",
      "tu prem nhi karat mazavr",
      "Harshu Madam plzz",
      "thikeee ata ky",
      "No :("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
    className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
  
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center text-pink-400 text-stroke" style={{
    WebkitTextStroke: "1px white", // White stroke around text
    WebkitTextFillColor: "rgb(212, 29, 121)", // Tailwind's pink-500 color
  }}>
            Yaayyyyyyy!!! I love you soooooo much Harshuuu!!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl font-bold text-center text-pink-400 text-stroke" style={{
    WebkitTextStroke: "1px white", // White stroke around text
    WebkitTextFillColor: "rgb(212, 29, 121)", // Tailwind's pink-500 color
  }}>
            Harshuuu.. I have a question for you.<br /> Will you be my Valentine?
          </h1>
          <div className="flex items-center flex-col lg:flex-row gap-4">
            <button
              className={`rounded bg-green-500 px-4 py-2 font-bold text-black hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-black hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}