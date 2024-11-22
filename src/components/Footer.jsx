import React from "react";
import "../css/Footer.css";
import useWindowSize from "../customHooks/useWindowSize";

const Footer = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <footer className="footer">
      <div className={`footer-container ${isMobile ? "mobile" : ""}`}>
        {/* Left: Fanpage Section */}
        <div className="footer-column">
          <h3>FANPAGE MCI</h3>
          <div className="footer-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/9c28/f39f/384712afa4f5a9969c25c31484c3d77b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iiQE~70ocE35GM2xfOwYJb5Ft5OkzF7kQ1~3nvlD0oVsnmHInsL~1DNskmaOgwEgjivmYvAueszH9D2kMi8gjIEI2ZSqYiZMbNm9Li3he9-gpJxFc25dcUvKIz1s345Vizv5M9U-G5MMlIQ4f4pNDRDB9r5AAwHEAKpZziT106TqtpktfzmRLbq0287g3wwaqGEc9u5w71o4z06fgKc7wLaEMbQZnEIeDBqBpP-h21fCn0dp2CBqzdaV19wsIFOofDRIMdRJi~CMvWjT-4NsG4ynalHncE-yZuxGnPqRU1qzOYPXeVfpTYdoouD~XRn0BwSY5xVwOBM7nEsnjzlPpw__"
              alt="Fanpage MCI"
              className="footer-img"
            />
          </div>
        </div>

        {/* Right: Contact Information */}
        {isMobile ? (
          <div className="footer-info">
            <div className="footer-column">
              <h3>HÀ NỘI</h3>
              <p>165 Thái Hà</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</p>
              <p>30 Trung Liệt</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Số 30, Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</p>
            </div>
            <div className="footer-column">
              <h3>HỒ CHÍ MINH</h3>
              <p>HCM - 13 Cao Thắng</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: 13 Cao Thắng, Phường 2, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</p>
              <p>HCM - 224 Điện Biên Phủ</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Tầng 4 & Tầng 6, 224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</p>
            </div>
            <div className="footer-column">
              <h3>HOTLINE</h3>
              <p>Kiếu nại CEO: 0982 521 378</p>
              <p>Kiếu nại DCE: 0916 442 368</p>
              <p>Hợp tác truyền thông: 0934 146 016</p>
              <p>Hotline đào tạo: 0961 123 988</p>
              <p>Kiếu nại dịch vụ CSKH: 024 7106 8368</p>
              <p>Tư vấn khóa học 1: Ms. Khánh Ly 0352 433 233</p>
              <p>Tư vấn khóa học 2: Ms. Ngọc Linh 0344 463 698</p>
              <p>CSKH: cskh@mcivietnam.com</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div>
        ) : (
          <div className="footer-right">
            <div className="footer-column">
              <h3>HÀ NỘI</h3>
              <p>165 Thái Hà</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</p>
              <p>30 Trung Liệt</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Số 30, Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</p>
            </div>
            <div className="footer-column">
              <h3>HỒ CHÍ MINH</h3>
              <p>HCM - 13 Cao Thắng</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Tầng 4, Yoko Building, 677/6, Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
              <p>HCM - 224 Điện Biên Phủ</p>
              <p>Hotline: 024 7106 8368</p>
              <p>Địa chỉ: Tầng 4 & Tầng 6, 224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</p>
            </div>
            <div className="footer-column">
              <h3>HOTLINE</h3>
              <p>Kiếu nại CEO: 0982 521 378</p>
              <p>Kiếu nại DCE: 0916 442 368</p>
              <p>Hợp tác truyền thông: 0934 146 016</p>
              <p>Hotline đào tạo: 0961 123 988</p>
              <p>Kiếu nại dịch vụ CSKH: 024 7106 8368</p>
              <p>Tư vấn khóa học 1: Ms. Khánh Ly 0352 433 233</p>
              <p>Tư vấn khóa học 2: Ms. Ngọc Linh 0344 463 698</p>
              <p>CSKH: cskh@mcivietnam.com</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div >
        )}

      </div>
    </footer>
  );
};

export default Footer;
