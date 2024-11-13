import React, { useEffect, useState } from "react";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Components
import Icon from "../components/Icon";
import EmptyData from "../components/EmptyData";

// Stickers
import Lottie from "lottie-react";
import docsSticker from "../assets/stickers/docs.json";

// Redux
import { useDispatch } from "react-redux";
import { openModal } from "../store/features/modalSlice";

const channelsData = [
  {
    id: 0,
    amount: 1500,
    username: "dot_tv",
    name: "Tezkor xabarlar",
    image: "https://imgtools.algoblend.in/assets/img/about.jpg",
  },
  {
    id: 1,
    amount: 3500,
    name: "Qitmir chol",
    username: "dot_tv",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHefGJZRlc9aw/company-logo_200_200/company-logo_200_200/0/1651146889985/dework_logo?e=2147483647&v=beta&t=a_WP-ysGNA2PSiOnY8PTBJn4jncGRH70grwLh-pqIxc",
  },
  {
    id: 2,
    amount: 500,
    name: "Foydali uz",
    username: "dot_tv",
    image:
      "https://m.media-amazon.com/images/I/81PA48nRH-L._AC_UF350,350_QL80_.jpg",
  },
];

const giveawaysData = [
  {
    title: "Aladin konkurs",
    amount: { type: "money", value: 100000 },
    channels: [{ name: "Foydali uz", username: "dot_tv" }],
    image: {
      icon: "https://imgtools.algoblend.in/assets/img/about.jpg",
      banner: "https://imgtools.algoblend.in/assets/img/about.jpg",
    },
  },
  {
    title: "Yulduzli konkurs",
    amount: { type: "stars", value: 500 },
    channels: [
      { name: "Abosyan Community", username: "dot_tv" },
      { name: "Javohir Boom", username: "dot_tv" },
      { name: "Qitmir Chol", username: "dot_tv" },
    ],
    image: {
      icon: "https://thumbs.dreamstime.com/z/giveaway-banner-post-template-win-prize-giveaway-social-media-poster-vector-design-illustration-giveaway-banner-post-template-212212400.jpg",
      banner:
        "https://t3.ftcdn.net/jpg/04/83/58/90/360_F_483589048_DN0uPcM4D8EfKJ6gaBZbHc3pApgYnHgs.jpg",
    },
  },
];

const Tasks = () => {
  const { tg } = useTelegram();
  const dispatch = useDispatch();
  const { openTelegramLink } = useTelegram();
  useEffect(() => tg.setHeaderColor("#fff"), []);
  const [channels, setChannels] = useState(channelsData);
  const [giveaways, setGiveaways] = useState(giveawaysData);

  const openGiveawayModal = (index) => {
    dispatch(
      openModal({
        name: "Giveaway",
        data: giveaways[index],
        title: giveaways[index].title,
      })
    );
  };

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
                    <button
                      onClick={() => openTelegramLink(channel.username)}
                      className="flex items-center justify-center z-10 shrink-0 w-[88px] bg-background rounded-full py-1.5 font-medium text-sm"
                    >
                      Qo'shilish
                    </button>
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
              {giveaways.map((giveaway, index) => {
                const totalAmount = giveaway.amount.value;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-3.5 group h-20 pl-4 w-full bg-white rounded-2xl xs:h-24"
                  >
                    {/* image */}
                    <Icon
                      size={56}
                      alt="Giveaway icon"
                      src={giveaway.image.icon}
                      className="size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
                    />

                    {/* task item content */}
                    <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)]">
                      {/* details */}
                      <div className="w-full overflow-hidden space-y-1.5">
                        <h3 className="text-base font-medium truncate xs:text-lg">
                          {giveaway.title}
                        </h3>

                        {/* amount */}
                        <p className="text-yellow-500 text-[15px] leading-5 xs:text-base">
                          {totalAmount.toLocaleString()}{" "}
                          {giveaway.amount.type === "money" ? "so'm" : "Yulduz"}
                        </p>
                      </div>

                      {/* open modal btn */}
                      <button
                        onClick={() => openGiveawayModal(index)}
                        className="flex items-center justify-center z-10 shrink-0 w-[88px] bg-background rounded-full py-1.5 font-medium text-sm"
                      >
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
