import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const location = useLocation();
  const isOpenModal = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Main */}
      <div className="min-h-screen">
        <div className="pb-24">
          <Outlet />
        </div>
      </div>

      {/* Navigation bar */}
      <Navbar />

      {/* Modal */}
      {isOpenModal && <Modal />}
    </>
  );
};

export default MainLayout;
