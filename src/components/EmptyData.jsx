import React from "react";

// Stickers
import Lottie from "lottie-react";
import emptyFolderSticker from "../assets/stickers/empty-folder.json";

const EmptyData = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3.5 ${className}`}
    >
      <Lottie
        width={96}
        className="size-20 xs:size-24"
        animationData={emptyFolderSticker}
      />

      {/* title */}
      <strong className="font-medium text-dark-800/70 text-sm xs:text-base">
        Ma'lumotlar mavjud emas
      </strong>
    </div>
  );
};

export default EmptyData;
