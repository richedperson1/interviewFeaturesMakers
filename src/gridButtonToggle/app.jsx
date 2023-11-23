import { useEffect, useState } from "react";

const GridLayout = () => {
  const [clickBox, setClickBox] = useState([]);
  const [totalCount, setTotalCount] = useState(null)
  const boxElement = document.querySelector("div.main-container div");

  const removeColor = () => {
    console.log("remove color activate");
    setTotalCount(7)
  }
  const boxElementPress = (e) => {
    // console.log("The press element is", e.target.innerText);
    e.target.style.backgroundColor = 'green';

    const Pushing2Array = (e) => {
      clickBox.push(Number(e.target.innerText))
      const newArr = clickBox.map((val) => {
        return val
      });

      // newArr.push(Number(e.target.innerText));
      setClickBox(newArr);
      console.log("This is final array : ", clickBox);
    }
    if (clickBox.length >= 7) {
      Pushing2Array(e)
      removeColor()

    }
    else {
      Pushing2Array(e)
      setClickBox(clickBox)
    }
  }


  useEffect(() => {
    if (totalCount >= 0) {
      // Use setTimeout within useEffect to avoid potential memory leaks
      setTimeout(() => {
        // console.log("This element going to deactivate: ", boxElement.childNodes[clickBox.length - 1]);
        boxElement.childNodes[clickBox[clickBox.length - 1] - 1].style.backgroundColor = 'red'
        reduceCount()
        clickBox.pop()
        const newDivBox = clickBox.map((val) => {
          return val
        })
        setClickBox(newDivBox)

      }, 500);

      console.log("This is log : ", clickBox);

    }
  }, [clickBox, totalCount]);

  const reduceCount = () => {
    setTotalCount(totalCount - 1)

  }



  return (
    <>
      <div className="main-container flex justify-center items-center h-full">

        <div className=" text-red-300 grid grid-cols-3-200px gap-5">
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>1</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>2</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>3</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>4</div>
          <div className="h-[200px] bg-red-500 col-start-3 col-end-span-1 flex cursor-pointer justify-center items-center" onClick={boxElementPress}>5</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>6</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>7</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center cursor-pointer" onClick={boxElementPress}>8</div>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
