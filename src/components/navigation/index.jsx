import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {BtnList.map((btn, index) => (
          <NavButton key={index} {...btn} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;