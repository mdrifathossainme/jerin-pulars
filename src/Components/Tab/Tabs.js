import { useState } from "react";
import './Tab.css'
import BreakFast from "../MealTime/BreakFast/BreakFast";
import Lunch from "../MealTime/Lunch/Lunch";
import Dinner from "../MealTime/Dinner/Dinner";
import { useNavigate } from "react-router-dom";
const Tabs=()=> {
  const [toggleState, setToggleState] = useState(2);
  const navigate=useNavigate()
const handleAllFood=()=>{
navigate('/allFood')
}
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          BrackFast
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Lunch
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Dinner
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
             <BreakFast/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
       <Lunch/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Dinner/>
        </div>
      </div>
      <div className="btn flex justify-center">
      <button onClick={handleAllFood} className="bg-red-500 block py-3 px-4 text-white font-semibold  rounded-3xl hover:bg-transparent border-solid border-2 border-red-500 hover:text-black ">Checkout Your Food</button>

      </div>
    </div>
  );
}

export default Tabs;
