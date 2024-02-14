import React, { useState, useEffect } from "react";
import patternBg from "../assets/mobileBg.svg";
import { Link } from "react-router-dom";
import Trash from "../assets/trash.svg";
import Delete from "./card/delete";
import AddList from "./card/add-list-btn";
import ListItem from "./card/list-item";

const Hero = () => {
  const txtArray = [" Efficiency", " Simplicity", " Planning", " Improving"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTxt, setCurrentTxt] = useState(txtArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex >= txtArray.length ? 0 : newIndex;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentTxt(txtArray[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <section id="LandingSection" className="custom-animation">
        <div className="mt-12 ml-6 sm:ml-12 sm:mt-44">
          <div className="md:mx-20">
            <h1 className="text-ultraDarkPurple font-bold text-[3.4em] leading-[54px] tracking-tighter sm:text-[60px] dark:text-lightPurple">
              Join PlanUp for
              <span className="custom_gradient pr-4" id="changingTxt">
                {currentTxt}
              </span>
            </h1>
            <p className="text-basePurple text-[16px] w-[270px] mt-3 sm:mt-10 sm:text-[25px] sm:w-[580px]">
              Effortless task management for a more organized and productive
              life.
            </p>

            <Link to="/todo">
              <button
                className="w-[140px] h-[45px] mt-6 text-[18px] sm:mt-10 sm:w-[200px] sm:h-[60px] sm:text-[22px] bg-basePurple text-lightestPurple rounded-[8px] font-bold hover:bg-darkPurple"
                id="getStartedBtn"
                title="Start Being Productive"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <img
          src={patternBg}
          className="hidden -z-10 absolute sm:block sm:right-0 sm:mt-20 sm:translate-y-[-500px] sm:w-[800px] sm:h-[600px]"
          id="bg-img"
        />

        <div className="absolute w-80 h-96 -mx-[155px] mt-10 z-10 sm:my-0 sm:relative sm:mx-auto sm:mt-[-18%] sm:mr-[25%] ">
          <div className="relative mx-auto bg-white w-72 h-96 rounded-xl md:-top-20 ml-48 mt-10 dark:bg-[#1f1f1f] dark:text-white">
            {/* header  */}

            <div className="flex items-center justify-between p-2 px-6 border-b-[3px] border-b-basePurple">
              <input
                type="text"
                placeholder="Set Title"
                defaultValue="Title"
                className="text-black text-[30px] w-36 font-semibold outline-none bg-transparent dark:text-white"
              />

              <Delete wid="25" />
            </div>

            <div className="flex flex-col md:mt-5 md:h-96 md:w-full max-h-[200px] w-72 overflow-y-auto mx-auto mt-4 px-3">
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
            <div className="flex items-center justify-center mt-[20%] md:mt-1">
              <AddList />
            </div>

            {/* spacer  */}
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
