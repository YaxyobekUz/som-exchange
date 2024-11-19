import React, { useState } from "react";
import { Link } from "react-router-dom";

// Data
const friendsData = [
  {
    id: 29082480,
    income: 1000,
    name: "Yaxyobek",
    image: "https://imgtools.algoblend.in/assets/img/about.jpg",
  },
  {
    id: 29082481,
    income: 100000,
    name: "Mr Duck",
    image:
      "https://thumbs.dreamstime.com/z/giveaway-banner-post-template-win-prize-giveaway-social-media-poster-vector-design-illustration-giveaway-banner-post-template-212212400.jpg",
  },
];

// Components
import Icon from "../components/Icon";

// telegram
import useTelegram from "../hooks/useTelegram";

// Images
import infoIcon from "../assets/images/icons/info.svg";

// Stickers
import Lottie from "lottie-react";
import friendsSticker from "../assets/stickers/friends.json";

const Friends = () => {
  const { openTelegramLink } = useTelegram();
  const [friends, setFriends] = useState([]);

  return (
    <>
      <header className="flex flex-col items-center justify-center gap-4 pt-6">
        {/* page icon */}
        <Lottie
          loop
          animationData={friendsSticker}
          className="size-20 xs:size-24"
        />

        {/* page title */}
        <h1 className="text-center text-xl font-semibold xs:text-2xl">
          Do'stlar
        </h1>

        {/* page description */}
        <p className="text-base text-center xs:text-lg">
          <span>Taklif qilgan do'stlaringiz daromadidan </span>
          <br />
          <span className="text-yellow-500">100.000 so'm</span>
          <span> gacha ulush oling.</span>
        </p>
      </header>

      {/* Invitation link */}
      <section className="section">
        {/* Section title */}
        <h2 className="section-title">Taklif havolasi</h2>

        {/* Section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5 p-4">
          {/* Amount */}
          <div className="flex flex-col items-end gap-4 grow">
            {/* Info */}
            <button
              onClick={() => openTelegramLink("dot_tv")}
              className="flex items-center text-start gap-3.5 group w-full bg-white"
            >
              {/* image */}
              <Icon
                size={56}
                src={infoIcon}
                alt="Information icon"
                className="size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
              />

              {/* task item content */}
              <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full xs:w-[calc(100%-70px)]">
                {/* details */}
                <div className="w-full overflow-hidden space-y-1.5">
                  <h3 className="text-base font-medium truncate xs:text-lg">
                    Ma'lumot
                  </h3>

                  {/* amount */}
                  <p className="text-dark-800/70 text-[15px] leading-5 xs:text-base">
                    Tizim haqida ma'lumot
                  </p>
                </div>
              </div>
            </button>

            {/* Share btn */}
            <a
              href="https://telegram.me/share/url?url=https://t.me/dot_tv&text=saaaaloooom"
              className="btn-primary"
            >
              Havolani ulashish
            </a>

            {/* Copy btn */}
            <button className="btn-primary bg-primary/15 text-primary">
              Havolani nusxalash
            </button>
          </div>
        </div>
      </section>

      {/* Friends list */}
      <section className="section">
        {/* Section title */}
        <h2 className="section-title">
          <span>Do'stlar </span>
          <span className="text-dark-800/70">0</span>
        </h2>

        {/* Section content */}
        <div className="w-full bg-white rounded-2xl">
          {friends.length > 0 ? (
            <ul>
              {friends.map((friend, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-3.5 group h-20 pl-4 w-full bg-white rounded-2xl xs:h-24"
                  >
                    {/* image */}
                    <Icon
                      size={56}
                      alt="Giveaway icon"
                      src={friend.image}
                      className="size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
                    />

                    {/* task item content */}
                    <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)]">
                      {/* details */}
                      <div className="w-full overflow-hidden space-y-1.5">
                        <h3 className="text-base font-medium truncate xs:text-lg">
                          {friend.name}
                        </h3>

                        {/* amount */}
                        <p className="text-yellow-500 text-[15px] leading-5 xs:text-base">
                          <span>+ </span>
                          <span>{friend.income.toLocaleString()} </span>
                          <span>so'm</span>
                        </p>
                      </div>

                      {/* open modal btn */}
                      <Link
                        to={`/users/${friend.id}`}
                        className="flex items-center justify-center z-10 shrink-0 w-[88px] bg-background rounded-full py-1.5 font-medium text-sm"
                      >
                        Profil
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Friends;
