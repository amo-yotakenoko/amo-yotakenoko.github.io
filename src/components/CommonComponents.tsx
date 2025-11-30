import React from "react";

const SectionTitle = ({ title }: { title: String }) => (
  <div className="mx-auto w-fit border-b-4 border-mint pt-8">
    <h1 className="font-asimovian text-center text-4xl px-4">{title}</h1>
  </div>
);

export default SectionTitle;
