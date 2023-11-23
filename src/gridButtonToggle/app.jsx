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


    if (clickBox.length >= 7) {
      clickBox.push(Number(e.target.innerText))
      setClickBox(clickBox)
      removeColor()
    }
    else {
      clickBox.push(Number(e.target.innerText))
      setClickBox(clickBox)
    }
    // console.log("This is click box", clickBox.length);
  }


  useEffect(() => {
    if (totalCount) {
      // Use setTimeout within useEffect to avoid potential memory leaks
      const timer = setTimeout(() => {
        console.log("This element going to deactivate: ", boxElement.childNodes[clickBox.length - 1]);
        clickBox.pop()
        setClickBox(clickBox)
        setTotalCount(totalCount - 1)

      }, 300);

      console.log("This is log : ", clickBox);

    }
  }, [clickBox]);

  // useEffect(() => {
  //   if (clickBox.length > 0) {
  //     const revertTimer = setTimeout(() => {
  //       const lastClicked = clickBox.pop(); // Remove last clicked element
  //       const divs = document.querySelectorAll(".main-container div");

  //       divs[lastClicked - 1].style.backgroundColor = "red"; 
  //     }, 500);

  //   }
  // }, [clickBox]);

  return (
    <>
      <div className="main-container flex justify-center items-center h-full">

        <div className=" text-red-300 grid grid-cols-3-200px gap-5"
          onClick={boxElementPress}>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">1</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">2</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">3</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">4</div>
          <div className="h-[200px] bg-red-500 col-start-3 col-end-span-1 flex justify-center items-center">5</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">6</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">7</div>
          <div className="h-[200px] bg-red-500 flex justify-center items-center">8</div>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
