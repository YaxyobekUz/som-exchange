import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Utils
import { getFirstLetter } from "../utils";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";
import Balance from "../components/Balance";

// Hooks
import useTelegram from "../hooks/useTelegram";

// Images
import botIcon from "../assets/images/icons/bot.svg";
import tasksIcon from "../assets/images/icons/tasks.svg";
import tonIcon from "../assets/images/icons/toncoin.svg";
import settingsIcon from "../assets/images/icons/settings.svg";
import exchangeIcon from "../assets/images/icons/exchange.svg";
import megaphoneImg from "../assets/images/others/megaphone.png";
import tgPremiumBg from "../assets/images/backgrounds/telegram-premium.jpg";

// Stickers
import Lottie from "lottie-react";
import duckSticker from "../assets/stickers/duck.json";

const Home = () => {
  const { tg, user } = useTelegram();

  // Change App header color
  useEffect(() => {
    tg.setHeaderColor("#007aff");

    const handleChangeHeaderColor = (e) => {
      if (window.scrollY >= 80) {
        tg.setHeaderColor("#fff");
      } else {
        tg.setHeaderColor("#007aff");
      }
    };

    window.addEventListener("scroll", handleChangeHeaderColor);
    return () => {
      window.removeEventListener("scroll", handleChangeHeaderColor);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-b from-primary to-primary/70 h-20 pb-3 xs:h-24">
        <div className="flex items-center justify-between h-full !pl-3 container">
          {/* Title */}
          <div className="flex items-center gap-2.5">
            <Lottie
              animationData={duckSticker}
              className="size-14 xs:size-16"
            />

            <b className="text-[17px] leading-normal text-white font-semibold xs:text-[19px]">
              Bizni telegram <br /> kanalda kuzating
            </b>
          </div>

          {/* Link */}
          <a
            href="https://t.me/mryaxyobek"
            className="flex items-center justify-center shrink-0 w-20 h-9 bg-white rounded-full font-medium xs:w-28"
          >
            Kanal
          </a>
        </div>
      </header>

      {/* Main */}
      <div className="bg-background pt-4 -mt-3 rounded-t-xl">
        {/* Sub Header */}
        <div role="sub header" className="container">
          <div className="flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-5 grow">
              {/* profile image */}
              <div className="flex items-center justify-center size-14 shrink-0 bg-gradient-orange rounded-full text-xl font-medium text-white">
                {getFirstLetter(user?.first_name) || "F"}
              </div>

              {/* user details */}
              <div className="space-y-1 overflow-hidden">
                {/* name */}
                <h3 className="text-lg font-medium truncate">
                  {user?.first_name || "Foydalanuvchi"}
                </h3>

                {/* id */}
                <p className="font-medium text-dark-800/70">
                  {user?.id || 123345678}
                </p>
              </div>
            </div>

            {/* settings */}
            <Link
              to="/settings"
              title="Sozlamalar"
              aria-label="Sozlamalar"
              className="bg-white p-2.5 rounded-full"
            >
              <Icon
                size={28}
                src={settingsIcon}
                alt="settings icon"
                className="size-6 xs:size-7"
              />
            </Link>
          </div>
        </div>

        {/* Balance */}
        <Balance />

        {/* Main pages list */}
        <section className="section">
          <h2 className="section-title">Asosiy sahifalar</h2>

          {/* main content */}
          <nav>
            <ul className="space-y-4">
              {/* Exchange */}
              <li>
                <Link
                  to="/exchange"
                  className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    {/* icon */}
                    <div className="flex items-center justify-center size-[50px] shrink-0 bg-gradient-to-b from-lightAccent to-primary rounded-full xs:size-16">
                      <Icon
                        src={exchangeIcon}
                        alt="exchange icon"
                        className="size-6 xs:size-7"
                      />
                    </div>

                    {/* details */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-medium xs:text-lg">
                        Almashish
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                        Tangalarni almashish
                      </p>
                    </div>
                  </div>

                  <Arrow
                    fill="#555"
                    direction="right"
                    className="size-5 xs:size-6"
                  />
                </Link>
              </li>

              {/* Tasks */}
              <li>
                <Link
                  to="/tasks"
                  className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    {/* icon */}
                    <div className="flex items-center justify-center size-[50px] shrink-0 bg-gradient-to-b from-accent to-purple-500 rounded-full xs:size-16">
                      <Icon
                        src={tasksIcon}
                        alt="tasks icon"
                        className="size-6 xs:size-7"
                      />
                    </div>

                    {/* details */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-medium xs:text-lg">
                        Vazifalar
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                        Vazifalar evaziga bonuslar
                      </p>
                    </div>
                  </div>

                  <Arrow
                    fill="#555"
                    direction="right"
                    className="size-5 xs:size-6"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        {/* Useful links list */}
        <section className="section">
          <h2 className="section-title">Foydali havolalar</h2>

          {/* main content */}
          <ul className="space-y-4">
            {/* Ton */}
            <li>
              <a
                href="https://t.me/mryaxyobek"
                className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  {/* icon */}
                  <div className="flex items-center justify-center size-[50px] shrink-0 bg-gradient-to-b from-cyan-300 to-primary rounded-full xs:size-16">
                    <Icon
                      src={tonIcon}
                      alt="ton coin icon"
                      className="size-6 xs:size-7"
                    />
                  </div>

                  {/* details */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-medium xs:text-lg">Ton</h3>

                    {/* description */}
                    <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                      Ton sotib olish
                    </p>
                  </div>
                </div>

                <Arrow
                  fill="#555"
                  direction="right"
                  className="size-5 xs:size-6"
                />
              </a>
            </li>

            {/* Premium */}
            <li>
              <a
                href="https://t.me/mryaxyobek"
                className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  {/* icon */}
                  <Icon
                    size={64}
                    src={tgPremiumBg}
                    alt="telegram premium background image"
                    className="size-[50px] bg-violet-500 rounded-full xs:size-16"
                  />

                  {/* details */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-medium xs:text-lg">
                      Premium
                    </h3>

                    {/* description */}
                    <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                      TG premium sotib olish
                    </p>
                  </div>
                </div>

                <Arrow
                  fill="#555"
                  direction="right"
                  className="size-5 xs:size-6"
                />
              </a>
            </li>
          </ul>
        </section>

        {/* Contact list */}
        <section className="section">
          <h2 className="section-title">Yordam</h2>

          {/* main content */}
          <ul className="space-y-4">
            {/* Ton */}
            <li>
              <a
                href="https://t.me/mryaxyobek"
                className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  {/* icon */}
                  <div className="flex items-center justify-center size-[50px] shrink-0 bg-gradient-to-b from-lightAccent/70 to-accent rounded-full xs:size-16">
                    <Icon
                      src={botIcon}
                      alt="telegram bot icon"
                      className="size-6 xs:size-7"
                    />
                  </div>

                  {/* details */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-medium xs:text-lg">Bot</h3>

                    {/* description */}
                    <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                      Bot orqali yordam olish
                    </p>
                  </div>
                </div>

                <Arrow
                  fill="#555"
                  direction="right"
                  className="size-5 xs:size-6"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
