import React from "react";

// Components
import Icon from "./Icon";

// Images
import coinImg from "../assets/images/others/dollar.png";

const WidthdrawMoneyModalContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5">
      <Icon src={coinImg} className="size-[88px]" alt="dollar coin" />

      <h2 className="text-xl font-semibold">Pulni yechib olish</h2>

      <p className="">Pulni kartaga o'tkazish</p>
    </div>
  );
};

export default WidthdrawMoneyModalContent;
