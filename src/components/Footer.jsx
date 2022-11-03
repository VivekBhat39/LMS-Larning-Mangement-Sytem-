import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  let path = useLocation();
  if (path.pathname !== "/") {
    return (
      <div className="bg-dark bottom">
        <h1 className="text-white">Footer</h1>
      </div>
    );
  } else {
  }
};

export default Footer;
