import { useEffect, useRef } from "react";

// Components
import Icon from "./Icon";
import GiveawayModalContent from "./GiveawayModalContent";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/features/modalSlice";

// Images
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
        className="relative w-full max-h-[calc(100vh-72px)] bg-white pb-4 rounded-t-xl animate-up xs:max-h-[calc(100vh-80px)]"
      >
        {/* Modal header */}
        <div className="py-4" role="heading">
          {/* title */}
          <h1 className="text-xl font-medium text-center">Aladin konkurs</h1>

          {/* close modal btn */}
          <button
            title="Close modal"
            aria-label="Close modal"
            onClick={handleCloseModal}
            className="flex items-center justify-center absolute size-12 top-1.5 right-1.5"
          >
            <Icon
              size={28}
              src={crossIcon}
              alt="cross icon"
              className="size-7"
            />
          </button>
        </div>

        {/* Modal content */}
        <div
          role="main"
          className="container max-h-[calc(100vh-132px)] overflow-y-auto xs:max-h-[calc(100vh-140px)"
        >
          <GiveawayModalContent />
        </div>
      </div>
    </div>
  );
};

export default Modal;
