import React from "react";
import { APP_NAME } from "../config";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      &copy; {new Date().getFullYear()} {APP_NAME}
    </footer>
  );
};

export default Footer;
