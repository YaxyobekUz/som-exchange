import React, { useState } from "react";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";

// Images
import userIcon from "../assets/images/icons/user.svg";
import tonIcon from "../assets/images/icons/toncoin.svg";
import walletIcon from "../assets/images/icons/wallet.svg";
import uzsFlagIcon from "../assets/images/icons/uzbekistan-flag.svg";

const Exchange = () => {
  const [amount, setAmount] = useState("0.0");
  const [transactionId, setTransactionId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("00000000000000");

  return (
    <div className="pt-1 pb-20">
      {/* page title */}
      <div className="sticky inset-x-0 top-0 z-10 bg-background/70 backdrop-blur-xl py-5">
        <div className="container">
          <h1 className="text-xl font-semibold xs:text-2xl">
            So'mga almashish
          </h1>
        </div>
      </div>

      {/* Send */}
      <section className="section pt-0">
        {/* Section title */}
        <h2 className="section-title">Yuborasiz</h2>

        {/* Section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5 p-4">
          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-3.5">
              {/* Coin icon */}
              <span
                role="icon"
                className="flex items-center justify-center size-[50px] rounded-full bg-primary xs:size-14"
              >
                <Icon
                  size={28}
                  src={tonIcon}
                  alt="Ton coin icon"
                  className="size-6 xs:size-7"
                />
              </span>

              {/* Coin name */}
              <span className="font-medium text-lg xs:text-xl">TON</span>

              {/* Arrow icon */}
              <Arrow
                direction="right"
                fill="#555"
                size={20}
                className="size-5"
              />
            </button>

            {/* Amount */}
            <label className="flex flex-col items-end gap-1.5 grow">
              <span className="text-dark-800/70">Qiymatni kiriting</span>

              {/* Input */}
              <input
                type="text"
                maxLength={12}
                placeholder="0.0"
                onChange={(e) => setAmount(e.target.value)}
                className="w-full min-w-0 text-right outline-none xs:text-lg"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Recive */}
      <section className="section">
        {/* Section title */}
        <h2 className="section-title">Qabul qilasiz</h2>

        {/* Section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5 p-4">
          <div className="flex items-center gap-2.5">
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
            <label className="flex flex-col items-end gap-1.5 grow">
              <span className="text-dark-800/70">Qiymatni kiriting</span>

              {/* Input */}
              <input
                type="text"
                maxLength={12}
                placeholder="0.0"
                onChange={(e) => setAmount(e.target.value)}
                className="w-full min-w-0 text-right outline-none xs:text-lg"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="section">
        <h2 className="section-title">To'lov usuli</h2>

        {/* Section content */}
        <ul className="w-full bg-white rounded-2xl space-y-0.5">
          {/* For Wallet */}
          <li className="group">
            <label
              onClick={() => setPaymentMethod("card")}
              className="flex items-center gap-3.5 w-full h-20 pl-4 bg-white rounded-2xl xs:h-24"
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
              <div className="flex items-center gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 pr-4 xs:w-[calc(100%-70px)]">
                {/* details */}
                <div className="w-full space-y-1.5">
                  <h3 className="text-base font-medium truncate xs:text-lg">
                    Karta raqamga
                  </h3>

                  {/* amount */}
                  <input
                    type="text"
                    maxLength={16}
                    name="Card Number"
                    placeholder="0000 0000 0000 0000"
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full !min-w-0 text-primary text-[15px] leading-5 outline-none xs:text-base"
                  />
                </div>

                <button
                  className={`${
                    paymentMethod === "card" ? "opacity-100" : "opacity-10"
                  } flex items-center justify-center z-10 shrink-0 size-5 bg-primary rounded-full py-1.5 font-medium text-sm transition-opacity duration-300 xs:size-7`}
                >
                  <span className="size-2.5 bg-white rounded-full xs:size-4"></span>
                </button>
              </div>
            </label>
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
                <span className="size-2.5 bg-white rounded-full xs:size-4"></span>
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
          <label className="flex flex-col items-end gap-1.5 grow">
            <span className="text-dark-800/70 text-right">
              To'lovni tasdiqlash uchun ID raqamni kiriting
            </span>

            {/* Input */}
            <input
              type="text"
              maxLength={144}
              placeholder="Bu yerga kiriting..."
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full text-right outline-none xs:text-lg"
            />
          </label>
        </div>
      </section>

      {/* Submit */}
      <div className="fixed inset-x-0 z-10 bottom-16 bg-white/70 backdrop-blur-xl">
        <div className="container pt-4 pb-8">
          <button className="btn-primary">Tasdiqlash</button>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
