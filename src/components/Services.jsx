import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import {
  check,
  service10,
  service12,
  service13,
  service14,
  service7,
} from "../assets";
import {
  brainwaveServices,
  brainwaveServicesIcons,
  mubaServices,
  mubaServices1,
} from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";
const Services = () => {
  return (
    <Section id="ourwork">
      <div className="container">
        <Heading
          title="Our Services"
          text="Our team of skilled professionals is dedicated to delivering high-quality, cost-effective solutions tailored to meet the unique needs of our clients. From project planning and design to execution and maintenance, we are committed to enhancing your operations with our expertise and cutting-edge technology. Partner with us to experience unparalleled service and achieve your engineering goals."
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-fullvh-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="contruction"
                src={service7}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Engineering and construction</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                We construct medium to low and high cost houses for individuals
                and companies. We Provide Architectural Services on a range of
                developments.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 mb-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service14}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="fire/dust"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">
                  Fire/Dust Detection and suppression{" "}
                </h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Suppression systems have become a necessity to several
                  industries as they help control damage and loss to equipment.
                  Common means Of detection are through heat sensors, wiring. or
                  manual detection depending on system selection.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Locomotive Spares</h4>
                <p className="body-2 mb-[2rem]">
                  Muba Works and Supplies is specialised in supplying locomotive
                  spares for all makes of trains operating in the country. Muba
                  works can also fit the spares supplied based on client
                  requiremen
                </p>
                <ul className=" rounded-2xl flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img width={24} height={24} alt={item} src={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service10}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="locomotive"
                />
                <VideoChatMessage text="Locomotive spares" />
              </div>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 mb-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Supply services</h4>
                <p className="body-2 mb-[2rem]">
                  We do not specialize in a specific product or service, but
                  Offer a competitive range Which can be sourced effortlessly,
                  Whatever your business need we can source it for you, The name
                  Muba Works & Supplies describes the way we operate, how
                  versatile we are and this makes us to stand out amongst our
                  competitors, Some of the products and services include but are
                  not limited to
                </p>
                <ul className="body-2">
                  {mubaServices1.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service13}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="locomotive"
                />
                <VideoChatMessage text="Supply services" />
              </div>
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Transportation and Haulage</h4>
                <p className="body-2 mb-[2rem]">
                  Muba Works & Supplies provides several types Of transportation
                  services to meet our clients' needs. Whether you have a well
                  established route of customers with multiple loads to deliver
                  in multiple locations or you're a new client with Muba Works &
                  Supplies Transportation equipment includes:
                </p>
                <ul className="body-2">
                  {mubaServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service12}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="locomotive"
                />
                <VideoChatMessage text="Transportation and Haulage" />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
