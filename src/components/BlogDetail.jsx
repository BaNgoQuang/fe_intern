import React, { useState } from "react";
import "../css/BlogDetail.css";
import Header from "./Header";
import Footer from "./Footer";
import useWindowSize from "../customHooks/useWindowSize";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogDetail = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(true);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const subMenuItems = [
    "Phân tích dữ liệu",
    "Kỹ sư dữ liệu",
    "Khoa học dữ liệu",
    "Lập trình ứng dụng",
  ];

  const relatedPosts = [
    {
      title: "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
      content:
        "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình...",
      link: "#",
    },
    {
      title: "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
      content:
        "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình...",
      link: "#",
    },
    {
      title: "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
      content:
        "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình...",
      link: "#",
    },
  ];

  return (
    <>
      <Header />
      {isMobile ? (
        <Row>
          <Col>
            {/* Search Bar and Tabs */}
            <div className="search-and-tabs" style={{ padding: "10px" }}>
              <input
                type="text"
                className="search-bar"
                placeholder="Tìm kiếm bài viết"
              />
              <div
                className="tabs"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <a href="#experience">Chia sẻ kinh nghiệm</a>
                <a href="#knowledge">Kiến thức chuyên môn</a>
                <a href="#careers">MCI Careers</a>
                <a href="#practical">Kinh nghiệm thực chiến</a>
                <a href="#schedule">Lịch khai giảng</a>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <div className="search-detail">
          <input
            type="text"
            className="search-bar"
            placeholder="Tìm kiếm bài viết"
          />
          <div
            className="tabs"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <a href="#experience">Chia sẻ kinh nghiệm</a>|
            <a href="#knowledge">Kiến thức chuyên môn</a>|
            <a href="#careers">MCI Careers</a>|
            <a href="#practical">Kinh nghiệm thực chiến</a>|
            <a href="#schedule">Lịch khai giảng</a>
          </div>
        </div>
      )}
      {isMobile ? (
        <div className="blog-image"></div>
      ) : (
        <header className="blog-header">
          <div className="breadcrumb">
            Trang chủ &gt; Blog &gt; Chia sẻ kinh nghiệm &gt;{" "}
            <span className="current-page">
              Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua
              nó như nào
            </span>
          </div>
        </header>
      )}
      <div className={`blog-detail-container ${isMobile ? "mobile" : ""}`}>

        <div className="content">
          {/* Main Content */}
          <div className="blog-main">
            <h1>
              Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua
              nó như nào
            </h1>
            <p>
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
            </p>
            <div className="table-of-contents">
              <h2>Nội dung bài viết</h2>
              <ul>
                <li>Nội dung bài viết 1</li>
                <li>Nội dung bài viết 2</li>
                <li>Nội dung bài viết 3</li>
                <li>Nội dung bài viết 4</li>
                <li>Nội dung bài viết 5</li>
              </ul>
            </div>
            <p>
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
            </p>
            <p>
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
            </p>
            <p>
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
            </p>
            {isMobile ? (
              <></>
            ) : (
              <div className="blog-image"></div>
            )}
            <p>
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
            </p>
            <p>
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
            </p>
          </div>


          {/* Sidebar */}
          <div className="sidebar">
            {/* Sticky Course Menu */}
            <div className="course-menu" onClick={toggleSubMenu}>
              <h2>Các khóa học</h2>
              <ul className={`sub-menu ${isSubMenuOpen ? "open" : ""}`}>
                {subMenuItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Consultation Form */}
            <div className="consult-form">
              <h2>Đăng ký tư vấn khóa học</h2>
              <form>
                <input type="text" placeholder="Họ và tên" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Số điện thoại" required />
                <select>
                  <option>Khóa học mà bạn muốn tư vấn</option>
                  <option>Phân tích dữ liệu</option>
                  <option>Kỹ sư dữ liệu</option>
                  <option>Khoa học dữ liệu</option>
                  <option>Lập trình ứng dụng</option>
                </select>
                <button type="submit">Đăng ký tư vấn</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? (
        <>
          <Row>
            <Col>
              {/* Carousel */}
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={20}
                slidesPerView={1}
              >
                {relatedPosts.map((article, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="article-card"

                    >
                      <img
                        src="https://www.mcivietnam.com/media/home/new-logo.png"
                        alt="imggg"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Text Below Carousel */}
              <div className="text-below-carousel">
                <h4 style={{ fontWeight: "bold", color: "#f58120" }}>
                  {relatedPosts[0].title}
                </h4>
                <p>{relatedPosts[0].content}</p>
                <a href={relatedPosts[0].link} style={{ color: "#f58120" }}>
                  Xem thêm
                </a>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div style={{ backgroundColor: "#f5f5f5", padding: '5px 0px' }}>
          <div className="related-posts">
            <h2 className="section-title">Các bài đăng liên quan</h2>
            <div className={`related-posts-grid ${isMobile ? "mobile-related-posts" : ""
              }`}>
              {relatedPosts.map((post, index) => (
                <div key={index} className="related-post-card">
                  <div className="related-post-image"></div>
                  <h3 className="related-post-title">{post.title}</h3>
                  <p className="related-post-content">{post.content}</p>
                  <a href={post.link} className="related-post-link">
                    Xem thêm
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default BlogDetail;
