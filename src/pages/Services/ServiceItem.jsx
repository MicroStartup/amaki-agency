import React from "react";

const ServiceItem = ({ item }) => {
  return (
    <div
      className="w-full items-center justify-center flex flex-col border border-black"
    >
      <div className="items-start space-y-2 justify-start flex flex-col w-full">
      <img src={item.image} alt={item.alt} loading='lazy' width='700' height='400' />
      </div>
    </div>
  );
}

export default ServiceItem;
