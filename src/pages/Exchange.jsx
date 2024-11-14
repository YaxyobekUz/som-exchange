import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Components
import Icon from "../components/Icon";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Images
import userIcon from "../assets/images/icons/user.svg";
import tonIcon from "../assets/images/icons/toncoin.svg";
import statsIcon from "../assets/images/icons/stats.svg";
import walletIcon from "../assets/images/icons/wallet.svg";
import historyIcon from "../assets/images/icons/history.svg";
import sortArrowsIcon from "../assets/images/icons/sort-arrows.svg";
import uzsFlagIcon from "../assets/images/icons/uzbekistan-flag.svg";
import solidDownArrowIcon from "../assets/images/icons/solid-down-arrow.svg";

const Exchange = () => {
  const { tg } = useTelegram();
  useEffect(() => tg.setHeaderColor("#fff"), []);
  const [somAmount, setSomAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cryptoCoinAmount, setCryptoCoinAmount] = useState("");

  return (
    <div className="pt-6 pb-20">
      {/* Links */}
      <header className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-center text-xl font-semibold xs:text-2xl">
            Almashish
          </h1>

          <div className="flex items-center justify-end gap-4">
            {/* History */}
            <Link
              to="/history"
              title="Tarix"
              aria-label="Tarix"
              className="inline-block bg-white p-2.5 rounded-full"
            >
              <Icon
                size={28}
                src={historyIcon}
                alt="History icon"
                className="size-6 xs:size-7"
              />
            </Link>

            {/* Stats */}
            <Link
              to="/statistics"
              title="Statistika"
              aria-label="Statistika"
              className="inline-block bg-white p-2.5 rounded-full"
            >
              <Icon
                size={28}
                src={statsIcon}
                alt="Statistics icon"
                className="size-6 xs:size-7"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Send */}
      <section className="section">
        {/* Section title */}
        <h2 className="section-title">Yuborasiz</h2>

        {/* Section content */}
        <div className="relative w-full bg-white rounded-2xl space-y-0.5 p-4">
          <div className="flex items-center gap-4 xs:gap-10">
            <button className="flex items-center shrink-0">
              {/* Coin icon */}
              <span
                role="icon"
                className="flex items-center justify-center shrink-0 size-[50px] mr-3.5 rounded-full bg-primary xs:size-14"
              >
                <Icon
                  size={28}
                  src={tonIcon}
                  alt="Ton coin icon"
                  className="size-6 xs:size-7"
                />
              </span>

              {/* Coin name */}
              <span className="font-medium text-lg mr-2.5 xs:text-xl">TON</span>

              {/* Arrow icon */}
              <Icon
                size={20}
                src={sortArrowsIcon}
                alt="Sort arrows icon"
                className="size-4 xs:size-5"
              />
            </button>

            {/* Amount */}
            <div className="flex flex-col items-end gap-1.5 grow">
              <label
                htmlFor="crypto-coin-amount-input"
                className="text-dark-800/70 text-right"
              >
                Qiymatni kiriting
              </label>

              {/* Input */}
              <input
                type="text"
                maxLength={12}
                placeholder="0.0"
                autoComplete="off"
                value={cryptoCoinAmount}
                id="crypto-coin-amount-input"
                onChange={(e) => setCryptoCoinAmount(e.target.value)}
                className="w-full min-w-0 text-right outline-none xs:text-lg"
              />
            </div>
          </div>

          {/* Down arrow */}
          <div className="flex items-center justify-center absolute -bottom-[52px] right-5 size-11 bg-white rounded-full xs:-bottom-14 xs:size-12">
            <Icon
              size={28}
              alt="Down arrow icon"
              src={solidDownArrowIcon}
              className="size-6 xs:size-7"
            />
          </div>
        </div>
      </section>

      {/* Recive */}
      <section className="section">
        {/* Section title */}
        <h2 className="section-title">Qabul qilasiz</h2>

        {/* Section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5 p-4">
          <div className="flex items-center gap-4 xs:gap-10">
            <div className="flex items-center gap-3.5 shrink-0">
              {/* Coin icon */}
              <Icon
                size={48}
                src={uzsFlagIcon}
                alt="Uzbekistan square flag icon"
                className="size-[50px] rounded-full xs:size-14"
              />

              {/* Coin name */}
              <span className="font-medium text-lg xs:text-xl">SO'M</span>
            </div>

            {/* Amount */}
            <div className="flex flex-col items-end gap-1.5 grow">
              <label
                htmlFor="som-amount-input"
                className="text-dark-800/70 text-right"
              >
                Qiymatni kiriting
              </label>

              {/* Input */}
              <input
                type="text"
                maxLength={12}
                placeholder="0.0"
                value={somAmount}
                autoComplete="off"
                id="som-amount-input"
                onChange={(e) => setSomAmount(e.target.value)}
                className="w-full min-w-0 text-right outline-none xs:text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="section">
        <h2 className="section-title">To'lov usuli</h2>

        {/* Section content */}
        <ul className="w-full bg-white rounded-2xl space-y-0.5">
          {/* For Card */}
          <li
            onClick={() => setPaymentMethod("card")}
            className="flex items-center gap-3.5 group w-full h-20 pl-4 bg-white rounded-2xl xs:h-24"
          >
            {/* image */}
            <div
              role="icon"
              className="flex items-center justify-center shrink-0 size-[50px] rounded-full bg-gradient-to-b from-lightAccent to-primary xs:size-14"
            >
              <Icon
                size={28}
                src={walletIcon}
                alt="Wallet icon"
                className="size-6 xs:size-7"
              />
            </div>

            {/* task item content */}
            <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)] xs:gap-16">
              {/* details */}
              <div className="w-full space-y-1.5">
                <h3 className="inline text-base font-medium truncate xs:text-lg">
                  Karta raqamga
                </h3>

                {/* amount */}
                <input
                  type="text"
                  maxLength={16}
                  value={cardNumber}
                  name="Card Number"
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full !min-w-0 text-dark-800/70 text-[15px] leading-5 outline-none xs:text-base"
                />
              </div>

              <button
                className={`${
                  paymentMethod === "card" ? "opacity-100" : "opacity-10"
                } flex items-center justify-center z-10 shrink-0 size-5 bg-primary rounded-full py-1.5 font-medium text-sm transition-opacity duration-300 xs:size-7`}
              >
                <span className="size-2.5 bg-white rounded-full xs:size-3.5"></span>
              </button>
            </div>
          </li>

          {/* For personal account */}
          <li
            onClick={() => setPaymentMethod("account")}
            className="flex items-center gap-3.5 group h-20 pl-4 w-full bg-white rounded-2xl xs:h-24"
          >
            {/* image */}
            <div
              role="icon"
              className="flex items-center justify-center size-[50px] rounded-full bg-gradient-to-b from-accent to-purple-500 xs:size-14"
            >
              <Icon
                size={28}
                src={userIcon}
                alt="User icon"
                className="size-6 xs:size-7"
              />
            </div>

            {/* task item content */}
            <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)]">
              {/* details */}
              <div className="w-full overflow-hidden space-y-1.5">
                <h3 className="text-base font-medium truncate xs:text-lg">
                  Shaxsiy hisobga
                </h3>
              </div>

              {/* open modal btn */}
              <button
                className={`${
                  paymentMethod === "account" ? "opacity-100" : "opacity-10"
                } flex items-center justify-center z-10 shrink-0 size-5 opacity-10 bg-primary rounded-full py-1.5 font-medium text-sm transition-opacity duration-300 xs:size-7`}
              >
                <span className="size-2.5 bg-white rounded-full xs:size-3.5"></span>
              </button>
            </div>
          </li>
        </ul>
      </section>

      {/* Transaction ID */}
      <section className="section">
        {/* Section title */}
        <h2 className="section-title">O'tkazma ID raqami</h2>

        {/* Section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5 p-4">
          {/* Amount */}
          <div className="flex flex-col items-end gap-1.5 grow">
            <label
              htmlFor="transaction-id-input"
              className="text-dark-800/70 text-right"
            >
              Tasdiqlash uchun ID raqam
            </label>

            {/* Input */}
            <input
              type="text"
              maxLength={144}
              value={transactionId}
              id="transaction-id-input"
              placeholder="08aBcd11fE20...06HY"
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full text-right outline-none xs:text-lg"
            />
          </div>
        </div>
      </section>

      {/* Submit */}
      <div className="fixed inset-x-0 z-10 bottom-16 bg-white/70 backdrop-blur-xl animate-up">
        <div className="container pt-4 pb-8">
          <button className="btn-primary">Almashish</button>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
