import React from "react";
import "./Container.scss";

const Container = ({ children, className }) => {
  return <div className={className ? className : "container"}>{children}</div>;
};

export default Container;
