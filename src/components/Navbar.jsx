import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-30 bottom-0 w-full h-16 bg-white border-primary shadow-sm">
      <ul className="flex h-full container !px-0">
        {/* Home */}
        <li className="w-1/5">
          <NavLink
            to="/"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              className="size-[25px] xs:size-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="active-fill"
                d="M26 21.1601V11.1957C26 9.49568 25.1153 7.92027 23.6696 7.0456L16.4696 2.68972C14.9496 1.77009 13.0504 1.77009 11.5304 2.68972L4.33042 7.0456C2.88464 7.92027 2 9.49568 2 11.1957V21.1601C2 23.8331 4.14903 26 6.8 26H21.2C23.8509 26 26 23.8331 26 21.1601Z"
              />
              <path
                d="M10 21C10 20.4477 10.4477 20 11 20H17C17.5523 20 18 20.4477 18 21V21C18 21.5523 17.5523 22 17 22H14H11C10.4477 22 10 21.5523 10 21V21Z"
                fill="white"
              />
            </svg>
            {/* link name */}
            <h3 className="active-text text-xs font-medium">Asosiy</h3>
          </NavLink>
        </li>

        {/* Tasks */}
        <li className="w-1/5">
          <NavLink
            to="/tasks"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              className="size-[25px] xs:size-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="active-fill"
                d="M9.25781 3.9534C9.25781 2.87401 10.0842 2 11.1024 2H16.8997C17.1419 2 17.3818 2.05053 17.6056 2.14869C17.8294 2.24686 18.0327 2.39075 18.204 2.57214C18.3753 2.75353 18.5112 2.96887 18.6039 3.20586C18.6966 3.44286 18.7443 3.69687 18.7443 3.9534C18.7443 4.20992 18.6966 4.46393 18.6039 4.70093C18.5112 4.93793 18.3753 5.15327 18.204 5.33466C18.0327 5.51605 17.8294 5.65993 17.6056 5.7581C17.3818 5.85627 17.1419 5.9068 16.8997 5.9068H11.1024C10.6132 5.9068 10.144 5.70099 9.79808 5.33466C9.45215 4.96833 9.25781 4.47147 9.25781 3.9534Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="active-fill"
                d="M7.93919 3.95439C7.93949 3.93105 7.93508 3.90792 7.92627 3.88653C7.91745 3.86514 7.90443 3.84599 7.88807 3.83036C7.8717 3.81472 7.85238 3.80296 7.83139 3.79586C7.8104 3.78876 7.78821 3.78649 7.76632 3.78919C6.81768 3.9276 6.0303 4.22452 5.40735 4.88309C4.77281 5.55618 4.50086 6.40228 4.37332 7.408C4.25 8.37688 4.25 9.60696 4.25 11.1362V18.52C4.25 20.0493 4.25 21.2805 4.37332 22.2482C4.49981 23.254 4.77386 24.1012 5.40735 24.7731C6.04189 25.4451 6.84086 25.7342 7.78951 25.8704C8.70338 25.9999 9.866 25.9999 11.3069 25.9999H16.6931C18.1351 25.9999 19.2966 25.9999 20.2105 25.8704C21.1591 25.7342 21.9581 25.4462 22.5926 24.7731C23.2272 24.1001 23.4991 23.2551 23.6277 22.2482C23.75 21.2805 23.75 20.0493 23.75 18.52V11.1362C23.75 9.60696 23.75 8.37688 23.6267 7.408C23.5002 6.40339 23.2261 5.55506 22.5926 4.88309C21.9708 4.22452 21.1823 3.9276 20.2337 3.78919C20.2118 3.78649 20.1896 3.78876 20.1686 3.79586C20.1476 3.80296 20.1283 3.81472 20.1119 3.83036C20.0956 3.84599 20.0825 3.86514 20.0737 3.88653C20.0649 3.90792 20.0605 3.93105 20.0608 3.95439C20.0608 4.39415 19.979 4.82959 19.8201 5.23588C19.6612 5.64216 19.4283 6.01131 19.1346 6.32227C18.841 6.63322 18.4924 6.87988 18.1088 7.04817C17.7251 7.21646 17.3139 7.30307 16.8986 7.30307H11.1014C10.2627 7.30307 9.45839 6.95026 8.86537 6.32227C8.27234 5.69427 7.93919 4.84252 7.93919 3.95439ZM9.78589 12.0459C9.57623 12.0459 9.37515 12.1341 9.2269 12.2911C9.07864 12.4481 8.99535 12.6611 8.99535 12.8831C8.99535 13.1051 9.07864 13.3181 9.2269 13.4751C9.37515 13.6321 9.57623 13.7203 9.78589 13.7203H18.2183C18.428 13.7203 18.6291 13.6321 18.7773 13.4751C18.9256 13.3181 19.0089 13.1051 19.0089 12.8831C19.0089 12.6611 18.9256 12.4481 18.7773 12.2911C18.6291 12.1341 18.428 12.0459 18.2183 12.0459H9.78589ZM9.78589 17.6271C9.57623 17.6271 9.37515 17.7153 9.2269 17.8723C9.07864 18.0293 8.99535 18.2422 8.99535 18.4642C8.99535 18.6863 9.07864 18.8992 9.2269 19.0562C9.37515 19.2132 9.57623 19.3014 9.78589 19.3014H14.0021C14.2118 19.3014 14.4128 19.2132 14.5611 19.0562C14.7094 18.8992 14.7926 18.6863 14.7926 18.4642C14.7926 18.2422 14.7094 18.0293 14.5611 17.8723C14.4128 17.7153 14.2118 17.6271 14.0021 17.6271H9.78589Z"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Vazifalar</h3>
          </NavLink>
        </li>

        {/* Exchange (Main) */}
        <li className="w-1/5">
          <NavLink
            to="/exchange"
            className="flex flex-col items-center justify-center gap-1.5 relative w-full h-full navlink"
          >
            <svg
              width="52"
              height="52"
              fill="none"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-4 size-12 active-rotate"
            >
              <g clipPath="url(#clip0_1229_4)">
                <path
                  className="active-fill"
                  d="M512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512C397.385 512 512 397.385 512 256Z"
                />
                <path
                  fill="white"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M152.934 331.315C155.611 336.416 159.971 340.432 165.274 342.682C170.035 345.107 175.291 346.403 180.634 346.47H330.061C335.701 346.823 341.319 345.505 346.214 342.682C349.311 341.665 352.173 340.04 354.635 337.904C357.096 335.768 359.107 333.162 360.55 330.24C363.77 324.775 365.169 318.428 364.544 312.115C364.086 306.287 362.011 300.702 358.554 295.987L265.907 134.195C264.752 132.503 263.207 131.113 261.403 130.142C259.599 129.171 257.588 128.647 255.539 128.615C253.431 128.439 251.318 128.871 249.448 129.86C247.579 130.849 246.032 132.354 244.992 134.195L151.936 295.987C148.666 301.081 147.065 307.067 147.354 313.114C147.656 319.553 149.576 325.813 152.934 331.315ZM267.29 184.679L338.637 309.197C340.48 312.986 341.427 314.88 341.427 314.88C341.695 316.571 341.359 318.301 340.48 319.77C339.766 321.483 338.404 322.844 336.691 323.559H267.29V184.679ZM172.058 314.189C171.673 312.28 171.673 310.313 172.058 308.403L244.992 184.064V322.739H181.632C179.392 322.985 177.126 322.65 175.053 321.767L174.054 320.768C173.056 320.768 173.056 318.976 172.058 318.976C171.597 317.414 171.597 315.751 172.058 314.189Z"
                />
              </g>

              <defs>
                <clipPath id="clip0_1229_4">
                  <rect
                    width="512"
                    height="512"
                    fill="white"
                    transform="matrix(-1 0 0 -1 512 512)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* link name */}
            <h3 className="active-text pt-8 text-xs font-medium xs:pt-[33px]">
              Almashish
            </h3>
          </NavLink>
        </li>

        {/* Friends */}
        <li className="w-1/5">
          <NavLink
            to="/friends"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="size-[25px] xs:size-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1224_60)">
                <rect
                  x="12"
                  y="13"
                  width="16"
                  height="9"
                  rx="4.5"
                  className="active-fill"
                />
                <rect
                  y="13"
                  width="16"
                  height="9"
                  rx="4.5"
                  className="active-fill"
                />
                <rect
                  x="15"
                  y="1"
                  width="10"
                  height="10"
                  rx="5"
                  className="active-fill"
                />
                <rect
                  x="3"
                  y="1"
                  width="10"
                  height="10"
                  rx="5"
                  className="active-fill"
                />
                <rect
                  x="4.5"
                  y="16.5"
                  width="19"
                  height="12"
                  rx="6"
                  fill="white"
                />
                <rect
                  x="7.5"
                  y="4.5"
                  width="13"
                  height="13"
                  rx="6.5"
                  fill="white"
                />
                <rect
                  x="9"
                  y="6"
                  width="10"
                  height="10"
                  rx="5"
                  className="active-fill"
                />
                <rect
                  x="6"
                  y="18"
                  width="16"
                  height="9"
                  rx="4.5"
                  className="active-fill"
                />
              </g>
              <defs>
                <clipPath id="clip0_1224_60">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Do'stlar</h3>
          </NavLink>
        </li>

        {/* Profile */}
        <li className="w-1/5">
          <NavLink
            to="/profile"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              className="size-[25px] xs:size-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="16"
                rx="5.5"
                width="20"
                height="11"
                fill="black"
                className="active-fill"
              />
              <rect
                y="1"
                x="7.5"
                rx="6.5"
                width="13"
                height="13"
                fill="black"
                className="active-fill"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Profil</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
