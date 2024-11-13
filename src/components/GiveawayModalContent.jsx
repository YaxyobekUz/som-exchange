import React from "react";

// Components
import Icon from "./Icon";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Images
import giftIcon from "../assets/images/icons/gift.svg";

const GiveawayModalContent = ({ data }) => {
  const giveaway = data;
  const { openTelegramLink } = useTelegram();

  return (
    <>
      <div className="overflow-y-auto max-h-[calc(100vh-212px)] space-y-4 xs:max-h-[calc(100vh-220px)]">
        {/* Task image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            width={448}
            height={240}
            alt="Giveaway banner"
            src={giveaway.image.banner}
            className="w-full h-52 bg-dark-800/10 object-cover rounded-lg xs:h-60 xs:rounded-xl"
          />

          {/* Giveaway amount */}
          <div className="flex items-center gap-4 absolute z-10 left-4 bottom-4">
            {/* gift icon */}
            <Icon src={giftIcon} className="size-[18px] xs:size-5" />

            {/* amount */}
            <div className="bg-yellow-500 py-1 px-2.5 rounded-full text-white text-sm xs:py-1.5 xs:px-3.5 xs:text-[15px]">
              {giveaway.amount.value.toLocaleString()}{" "}
              {giveaway.amount.type === "money" ? "so'm" : "Yulduz"}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-x-0 bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-black/70" />
        </div>

        {/* Info */}
        <p>
          <span>Konkursda qatnashish uchun </span>
          <span>quyidagi kanallarga obuna bo'lib </span>
          <b className="font-semibold">Qatnashish</b>
          <span> tugmasini bosing.</span>
        </p>

        {/* Channels */}
        <ul>
          {giveaway.channels.map((channel, index) => (
            <li key={index} className="flex items-center gap-3.5 group h-20">
              {/* Icon */}
              <Icon
                size={48}
                alt="Channel icon"
                src={giveaway.image.icon}
                className="flex items-center justify-center size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
              />

              <div className="flex items-center justify-between gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 xs:w-[calc(100%-70px)]">
                {/* channel name */}
                <h3 className="font-medium line-clamp-2">{channel.name}</h3>

                {/* channel url */}
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
      </div>

      <div className="pt-4">
        <button className="btn-primary">Qatnashish</button>
      </div>
    </>
  );
};

export default GiveawayModalContent;
