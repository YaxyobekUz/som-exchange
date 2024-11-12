import React, { useEffect, useState } from "react";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Components
import Icon from "../components/Icon";
import EmptyData from "../components/EmptyData";

// Stickers
import Lottie from "lottie-react";
import docsSticker from "../assets/stickers/docs.json";

const channelsData = [
  {
    id: 0,
    amount: 1500,
    username: "mryaxyobek",
    name: "Tezkor xabarlar",
    image: "https://imgtools.algoblend.in/assets/img/about.jpg",
  },
  {
    id: 1,
    amount: 3500,
    name: "Qitmir chol",
    username: "mryaxyobek",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHefGJZRlc9aw/company-logo_200_200/company-logo_200_200/0/1651146889985/dework_logo?e=2147483647&v=beta&t=a_WP-ysGNA2PSiOnY8PTBJn4jncGRH70grwLh-pqIxc",
  },
  {
    id: 2,
    amount: 500,
    name: "Foydali uz",
    username: "mryaxyobek",
    image:
      "https://m.media-amazon.com/images/I/81PA48nRH-L._AC_UF350,350_QL80_.jpg",
  },
];

const giveawaysData = [
  {
    id: 0,
    name: "Aladin konkurs",
    amount: { type: "money", value: 100000 },
    image: "https://imgtools.algoblend.in/assets/img/about.jpg",
    channels: [{ id: 0, name: "Foydali uz", username: "mryaxyobek" }],
  },
];

const Tasks = () => {
  const { tg } = useTelegram();
  const [channels, setChannels] = useState(channelsData);
  const [giveaways, setGiveaways] = useState(giveawaysData);

  useEffect(() => {
    tg.setHeaderColor("#fff");
  }, []);

  return (
    <>
      {/* Header */}
      <header className="flex flex-col items-center justify-center gap-4 pt-6">
        {/* page icon */}
        <Lottie
          loop
          animationData={docsSticker}
          className="size-20 xs:size-24"
        />

        {/* page title */}
        <h1 className="text-center text-xl font-semibold xs:text-2xl">
          Vazifalar
        </h1>

        {/* page description */}
        <p className="text-base text-center xs:text-lg">
          Vazifalarni bajarib qo'shimcha <br /> bonuslar oling
        </p>
      </header>

      {/* Channel subscription tasks section */}
      <section className="section">
        <h2 className="section-title">Kanallarga qo'shilish</h2>

        {/* section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5">
          {channels.length > 0 ? (
            <ul>
              {channels.map((channel) => (
                <li
                  key={channel.id}
                  className="flex items-center gap-3.5 group h-20 pl-4 w-full bg-white rounded-2xl xs:h-24"
                >
                  {/* image */}
                  <Icon
                    size={56}
                    src={channel.image}
                    alt="channel image"
                    className="size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
                  />

                  {/* task item content */}
                  <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)]">
                    {/* details */}
                    <div className="w-full overflow-hidden space-y-1.5">
                      <h3 className="text-base font-medium truncate xs:text-lg">
                        {channel.name}
                      </h3>

                      {/* amount */}
                      <p className="text-yellow-500 text-[15px] leading-5 xs:text-base">
                        + {channel.amount.toLocaleString()} so'm
                      </p>
                    </div>

                    {/* link */}
                    <a
                      href={`https://t.me/${channel.username}`}
                      className="flex items-center justify-center z-10 shrink-0 w-[88px] bg-background rounded-full py-1.5 font-medium text-sm"
                    >
                      Qo'shilish
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyData className="py-9" />
          )}
        </div>
      </section>

      {/* Giveaways list section */}
      <section className="section">
        <h2 className="section-title">Konkurslarda qatnashish</h2>

        {/* section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5">
          {giveaways.length > 0 ? (
            <ul>
              {giveaways.map((giveaway) => {
                const totalAmount = giveaway.amount.value;
                return (
                  <li
                    key={giveaway.id}
                    className="flex items-center gap-3.5 group h-20 pl-4 w-full bg-white rounded-2xl xs:h-24"
                  >
                    {/* image */}
                    <Icon
                      size={56}
                      src={giveaway.image}
                      alt="giveaway image"
                      className="size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
                    />

                    {/* task item content */}
                    <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)]">
                      {/* details */}
                      <div className="w-full overflow-hidden space-y-1.5">
                        <h3 className="text-base font-medium truncate xs:text-lg">
                          {giveaway.name}
                        </h3>

                        {/* amount */}
                        <p className="text-yellow-500 text-[15px] leading-5 xs:text-base">
                          {totalAmount.toLocaleString()}{" "}
                          {giveaway.amount.type === "money" ? "so'm" : "Yulduz"}
                        </p>
                      </div>

                      {/* link */}
                      <button className="flex items-center justify-center z-10 shrink-0 w-[88px] bg-background rounded-full py-1.5 font-medium text-sm">
                        Ba'tafsil
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <EmptyData className="py-9" />
          )}
        </div>
      </section>
    </>
  );
};

export default Tasks;
