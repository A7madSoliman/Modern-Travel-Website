import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import DestinationSilder from "./DestinationSilder";

const Destination = () => {
  return (
    <div className="pt-20 pb-20 ">
      {/* section heading */}
      <SectionHeading heading="Exploring Popular Destination" />

      {/* section content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* slider */}
        <DestinationSilder />
      </div>
    </div>
  );
};

export default Destination;
