import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professional Kitchen",
    desc: "Donec bibendum bibendum mi. Morbi vulputate magna purus, vel vestibulum dolor pharetra interdum.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Duis bibendum auctor velit, ut porttitor nulla sodales finibus. Mauris faucibus nulla sed erat pulvinar elementum.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Nunc nunc mi, semper sit amet nisi eu, luctus scelerisque tortor. Etiam eget ante tortor.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Vestibulum semper auctor elementum. Vivamus justo magna, maximus eget neque vitae, rhoncus ullamcorper sapien.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Choose Best <span className="text-orange-500">Service</span>
        </h2>
        <p className="text-gray-700">
          Vestibulum eget dui sollicitudin, consectetur nibh nec, fermentum
          urna. <br />
          In ut mattis velit, a hendrerit sem.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-20 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            desc={item.desc}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
