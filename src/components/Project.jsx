import React from "react";
import SectionHead from "./SectionHead";

const Project = () => {
  return (
    <section className="bg-second-bg ">
      <div className="container mx-auto py-[128px]">
        <div className="wrapper">
          <SectionHead
            title={"Project"}
            text={"I had the pleasure of working with these awesome projects"}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
