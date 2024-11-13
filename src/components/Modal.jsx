import { useEffect, useRef } from "react";

// Components
import Icon from "./Icon";
import EmptyData from "./EmptyData";
import GiveawayModalContent from "./GiveawayModalContent";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/features/modalSlice";

// Images
import crossIcon from "../assets/images/icons/cross.svg";

const Modal = () => {
  const dispatch = useDispatch();
  const modalContainerRef = useRef();
  const handleCloseModal = () => dispatch(closeModal());
  const { title, name, data } = useSelector((state) => state.modal);

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

  const renderContent = () => {
    switch (name?.toLowerCase()) {
      case "giveaway":
        return <GiveawayModalContent data={data} />;
        break;

      default:
        return <EmptyData />;
        break;
    }
  };

  return (
    <div
      rel="modal"
      className="flex items-end fixed inset-0 z-40 size-full bg-black/70"
    >
      {/* Modal container */}
      <div
        ref={modalContainerRef}
        className="relative w-full max-h-[calc(100vh-72px)] bg-white pb-4 rounded-t-xl animate-up xs:max-h-[calc(100vh-80px)]"
      >
        {/* Modal header */}
        <div className="py-4" role="heading">
          {/* title */}
          <h1 className="text-xl font-medium text-center">{title}</h1>

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
          className="container max-h-[calc(100vh-132px)] xs:max-h-[calc(100vh-140px)"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
