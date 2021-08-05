import { useRef } from "react";

function App() {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();

  const refCollection = [
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    fifthRef,
    sixthRef,
  ];

  const handleKeyDown = (e, i) => {
    if (e.target.value && e.code === "Backspace") {
      return;
    }

    if (refCollection[i].current.value) {
      refCollection[i].current.value = "";
    }
    if (e.code === "Backspace") {
      if (i === 0) return;

      refCollection[i - 1].current.focus();
    } else if (i < 5) {
      setTimeout(() => {
        refCollection[i + 1].current.focus();
      }, 0);
    }
  };

  return (
    <div className="bg-blue-700 p-4 h-screen grid place-items-center">
      <div className="grid gap-2 grid-cols-6 w-96 h-14">
        <input
          className="text-center"
          type="number"
          ref={firstRef}
          // onChange={(e) => handleChange(0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
        />
        <input
          className="text-center"
          type="number"
          ref={secondRef}
          // onChange={(e) => handleChange(1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        />
        <input
          className="text-center"
          type="number"
          ref={thirdRef}
          // onChange={(e) => handleChange(2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
        />
        <input
          className="text-center"
          type="number"
          ref={fourthRef}
          // onChange={(e) => handleChange(3)}
          onKeyDown={(e) => handleKeyDown(e, 3)}
        />
        <input
          type="number"
          className="text-center"
          ref={fifthRef}
          // onChange={(e) => handleChange(4)}
          onKeyDown={(e) => handleKeyDown(e, 4)}
        />
        <input
          className="text-center"
          type="number"
          ref={sixthRef}
          // onChange={(e) => handleChange(5)}
          onKeyDown={(e) => handleKeyDown(e, 5)}
        />
      </div>
    </div>
  );
}

export default App;
