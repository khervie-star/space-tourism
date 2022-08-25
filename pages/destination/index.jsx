import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/molecules/navbar";
import styles from "../../styles/Home.module.css";

export default function Destination() {
  const [activeTab, SetActiveTab] = React.useState(0);

  const changeTab = (tab) => {
    SetActiveTab(tab);
  };
  const tabs = [
    {
      key: 1,
      tabName: "Moon",
      image: "/static/assets/destination/image-moon.png",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 km",
      travelTime: "3 days",
    },
    {
      key: 2,
      tabName: "Mars",
      image: "/static/assets/destination/image-mars.png",
      content:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 MIL. km",
      travelTime: "9 months",
    },
    {
      key: 3,
      tabName: "Europa",
      image: "/static/assets/destination/image-europa.png",
      content:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. km",
      travelTime: "3 years",
    },
    {
      key: 4,
      tabName: "Titan",
      image: "/static/assets/destination/image-titan.png",
      content:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "1.6 BIL. km",
      travelTime: "7 years",
    },
  ];

  return (
    <>
      {/* <Head>
        <title>Desttinattion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* <div className="bg-[url('/static/assets/destination/background-destination-desktop.jpg')] bg-fixed bg-center bg-no-repeat bg-cover m-0"> */}
      <div className="bg-[url('/static/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/static/assets/destination/background-destination-tablet.jpg')]  lg:bg-[url('/static/assets/destination/background-destination-desktop.jpg')] bg-fixed bg-center bg-no-repeat bg-cover m-0 w-full h-full">
        <Navbar />
        <div className="lg:p-32  p-8 pt-[88px] text-center lg:text-left">
          <p className="page-text font-normal text-[16px] lg:text-[28px] text-white lg:leading-[33.6px] leading-[19.2px] lg:tracking-[4.72px] tracking-[2.7px] uppercase">
            {" "}
            <span className="mr-6 mb-8 font-bold text-white/25">01</span>
            Pick your destination
          </p>
          <div className="flex lg:flex-row flex-col justify-evenly w-full">
            <div className="basis-1/2 flex row no-wrap justify-around items-end explore-button mt-8 mb-[26px]">
              <img
                src={tabs[activeTab].image}
                className="lg:w-[445px] lg:h-[445px] w-[170px] h-[170px]"
              />
            </div>
            <div className="basis-1/2">
              <div className="tabPane">
                <ul className="flex flex-row w-full h-full mb-[20px]">
                  {tabs.map((tab, i) => (
                    <li
                      className={
                        activeTab === i
                          ? `text-center py-4 mx-4  cursor-pointer font-normal text-[16px] leading-[19.2px] tracking-[2.7px] text-white uppercase border-b-[3px] border-solid border-inherit`
                          : `text-center py-4 mx-4 cursor-pointer  font-normal text-[16px] leading-[19.2px] tracking-[2.7px] text-[#D0D6F9] uppercase`
                      }
                      onClick={() => SetActiveTab(i)}
                      key={i}
                    >
                      {tab.tabName}
                    </li>
                  ))}
                </ul>
                <p className="font-normal lg:leading[114.6px]  leading[64.18px] text-white lg:text-[100px] text-[56px] uppercase font-[Bellefair]">
                  {tabs[activeTab].tabName}
                </p>
                <p className="font-normal lg:text-[18px] text-[15px] lg:leading-[32px] leading-[25px] tracking-[4.72px] text-[#D0D6F9]">
                  {tabs[activeTab].content}
                </p>
                <div className="bg-[#383B4B] w-full h-[1px] my-8" />
                <div className="flex lg:flex-row flex-col">
                  <div className="basis-1/2  mb-8">
                    <p className="text-[#D0D6F6] text-[14px] font-normal leading-[16.8px] tracking-[2.36px] uppercase mb-2">
                      AVG. DISTANCE
                    </p>
                    <p className="text-white text-[28px] font-normal leading-[32.09px] uppercase font-[Bellefair]">
                      {tabs[activeTab].avgDistance}
                    </p>
                  </div>
                  <div className="basis-1/2">
                    <p className="text-[#D0D6F6] text-[14px] font-normal leading-[16.8px] tracking-[2.36px] uppercase mb-2">
                      Est. travel time
                    </p>
                    <p className="text-white text-[28px] font-normal leading-[32.09px] uppercase font-[Bellefair]">
                      {tabs[activeTab].travelTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
