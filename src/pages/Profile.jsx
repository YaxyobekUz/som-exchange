import React, { useEffect } from "react";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";
import Balance from "../components/Balance";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Images
import statsIcon from "../assets/images/icons/stats-filled.svg";

// Utils
import { getFirstLetter, getRandomGradientColor } from "../utils";

const Profile = () => {
  const { tg, user } = useTelegram();
  useEffect(() => tg.setHeaderColor("#fff"), []);

  return (
    <>
      {/* Header */}
      <header className="flex flex-col items-center justify-center gap-4 pt-6">
        {/* profile image */}
        <div className="size-28 p-2">
          <div
            style={{ background: getRandomGradientColor() }}
            className="flex items-center justify-center size-full shrink-0 rounded-full"
          >
            <span className="text-white text-3xl font-medium">
              {getFirstLetter(user?.first_name) || "F"}
            </span>
          </div>
        </div>

        {/* page title */}
        <div className="w-full px-8 overflow-hidden">
          <h1 className="text-center text-xl font-semibold truncate xs:text-2xl">
            {user?.first_name || "Foydalanuvchi"}
          </h1>
        </div>

        {/* page description */}
        <p className="text-base text-center xs:text-lg">
          ID: {user?.id || 123345678}
        </p>
      </header>

      {/* Balance */}
      <Balance />

      <div className="section">
        <div className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl">
          <div className="flex items-center gap-4">
            {/* icon */}
            <div className="flex items-center justify-center size-[50px] shrink-0 bg-gradient-to-b from-lightAccent to-primary rounded-full xs:size-16">
              <Icon
                src={statsIcon}
                alt="exchange icon"
                className="size-6 xs:size-7"
              />
            </div>

            {/* details */}
            <div className="space-y-1.5">
              <h3 className="text-base font-medium xs:text-lg">Statistika</h3>

              {/* description */}
              <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                Tez orada
              </p>
            </div>
          </div>

          <Arrow fill="#555" direction="right" className="size-5 xs:size-6" />
        </div>
      </div>
    </>
  );
};

export default Profile;
