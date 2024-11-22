import React, { useState } from "react";
import useWindowSize from "../customHooks/useWindowSize";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width } = useWindowSize(); // Get window width from the hook

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          {/* Logo Section */}
          <img
            src="https://www.mcivietnam.com/media/home/new-logo.png"
            alt="Logo"
            className="logo-img"
          />

          {/* Conditional Navigation */}
          {width >= 768 ? (
            <nav className="nav-links">
              <a href="#courses">KHÓA HỌC</a>
              <a href="#schedule">LỊCH ĐÀO TẠO</a>
              <a href="#business">DOANH NGHIỆP</a>
              <a href="#blog">BLOG</a>
              <a href="#about">VỀ CHÚNG TÔI</a>
            </nav>
          ) : <button
            className="btn btn-menu"
            onClick={toggleMobileMenu}
          >
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>}
        </div>



        {/* Actions */}
        <div className="actions d-flex align-items-center">
          {width < 768 ? (
            <>
              <button className="btn btn-search">🔍</button>
              <button className="btn btn-login">→</button>
            </>
          ) : (
            <div className="actions d-flex align-items-center">
              <button className="btn btn-search">🔍</button>
              <button className="btn btn-outline-light me-2">Đăng nhập</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && width < 768 && (
        <div className="mobile-menu">
          <a href="#courses">KHÓA HỌC</a>
          <a href="#schedule">LỊCH ĐÀO TẠO</a>
          <a href="#business">DOANH NGHIỆP</a>
          <a href="#blog">BLOG</a>
          <a href="#about">VỀ CHÚNG TÔI</a>
        </div>
      )}
    </header>
  );
};

export default Header;
