// Images
import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { closeModal } from "../store/features/modalSlice";
import { useEffect, useRef } from "react";

// Images
import coinImg from "../assets/images/others/dollar.png";
import crossIcon from "../assets/images/icons/cross.svg";

const Modal = () => {
  const dispatch = useDispatch();
  const modalContainerRef = useRef();
  const { modal } = useSelector((state) => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(e.target)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalContainerRef, handleCloseModal]);

  return (
    <div className="flex items-end fixed inset-0 z-40 size-full bg-black/70">
      {/* Modal container */}
      <div
        ref={modalContainerRef}
        className="relative w-full h-max bg-white p-4 rounded-t-xl animate-up"
      >
        {/* Close modal btn */}
        <button
          title="Close modal"
          aria-label="Close modal"
          onClick={handleCloseModal}
          className="flex items-center justify-center absolute size-12 top-0 right-0"
        >
          <Icon src={crossIcon} alt="cross icon" />
        </button>

        {/* Modal content */}
        <div className="">
          <div className="flex flex-col items-center justify-center gap-3.5">
            <Icon src={coinImg} className="size-[88px]" alt="dollar coin" />

            <h2 className="text-xl font-semibold">Top up the account</h2>

            <p className="">salom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
