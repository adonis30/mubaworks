import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { collabApps, collabContent } from "../constants";
import { MubaLogo, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses id="about">
      <div className="container">
        <Heading title="About Us" />
        <p className="body-2 mb-4 md:mb-16 lg:mb-32  lg:mx-auto">
          The company aims to become a leading infrastructure development
          company in Zambia, a national player who safely, profitably and
          sustainably delivers best-in- class integrated services, products and
          solutions to meet our customers needs .As a construction and a
          supplies company working on some of the most important projects,
          quality of delivery is a priority. The Muba Works & Supplies quality
          management system spans all phases of the project life cycle, from
          preliminary feasibility analysis and concept development through to
          final commissioning of the project. Meeting the systems objectives
          requires a clear understanding of the qualitative and quantitative
          principles of management, costings, programme and delivery as applied
          to each project.
        </p>
      </div>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8"></h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && <p className="body-2 mt-3 ">{item.text}</p>}
              </li>
            ))}
          </ul>
          <Button>Contect us now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Contact us for our world class workmanship and outstanding work and
            services delivery
          </p>
          <div
            className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75
          md:scale-100"
          >
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full  rounded-full">
                  <img
                    src={MubaLogo}
                    width={150}
                    height={150}
                    alt="Mubaworks"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem bg-n-7 border border-n-1/15] rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
