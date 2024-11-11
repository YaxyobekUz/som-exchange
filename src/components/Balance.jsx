import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Redux
import { useDispatch } from "react-redux";
import { openModal } from "../store/features/modalSlice";

// Images
import dollarIcon from "../assets/images/others/dollar.png";
import historyIcon from "../assets/images/icons/history.svg";

const Balance = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <section className="section">
      <h2 className="section-title">Balansingiz</h2>

      {/* section content */}
      <div className="flex flex-col z-10 w-full relative h-56 bg-white p-4 rounded-2xl">
        {/* transaction history */}
        <Link
          title="Tarix"
          to="/history"
          aria-label="Tarix"
          className="flex items-center justify-center absolute z-10 size-12 top-1.5 left-1.5"
        >
          <Icon size={28} src={historyIcon} className="size-7" />
        </Link>

        <div className="flex flex-col items-center justify-center gap-2 mb-auto">
          <Icon src={dollarIcon} className="size-[88px]" />

          <b className="text-lg text-dark-800 font-semibold">
            {(5000).toLocaleString()} so'm
          </b>
        </div>

        {/* top up the account */}
        <button className="btn-primary" onClick={handleOpenModal}>
          Pulni yechib olish
        </button>
      </div>
    </section>
  );
};

export default Balance;
