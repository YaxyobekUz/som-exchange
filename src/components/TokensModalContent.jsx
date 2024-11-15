import React from "react";

// Icon
import Icon from "./Icon";

// Data
import tokens from "../data/tokens";

const TokensModalContent = ({ closeModal }) => {
  const handleSelectToken = (name) => {
    closeModal({ name: "selectedTokenName", data: name });
  };

  return (
    <div className="max-h-[calc(100vh-212px)] overflow-y-auto xs:max-h-[calc(100vh-220px)]">
      {/* Tokens */}
      <ul>
        {tokens.map((token, index) => {
          const { name, description, icon } = token;

          return (
            <li key={index} className="flex items-center gap-3.5 group h-20">
              {/* Icon */}
              <Icon
                size={48}
                src={icon}
                alt={`${name} coin icon`}
                className="flex items-center justify-center size-[50px] shrink-0 bg-dark-800/10 rounded-full xs:size-14"
              />

              <div className="flex items-center justify-between gap-4 w-[calc(100%-64px)] h-full border-b border-background group-last:border-b-0 xs:w-[calc(100%-70px)]">
                <div className="space-y-1.5">
                  {/* token name */}
                  <h3 className="font-medium text-base line-clamp-2 uppercase xs:text-lg">
                    ${name}
                  </h3>

                  {/* token description */}
                  {description ? (
                    <p className="text-yellow-500 text-[15px] leading-5 xs:text-base">
                      {description}
                    </p>
                  ) : null}
                </div>

                {/* select btn */}
                <button
                  onClick={() => handleSelectToken(token.name)}
                  className="flex items-center justify-center z-10 shrink-0 w-[88px] bg-background rounded-full py-1.5 font-medium text-sm"
                >
                  Tanlash
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TokensModalContent;
