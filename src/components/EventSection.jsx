import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import useWindowSize from "../customHooks/useWindowSize";
import { Row, Col, Container } from "react-bootstrap";
import "../css/EventSection.css";

const EventSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const events = Array(6).fill({});
  const articles = Array(5).fill({
    title: "Bạn Nguyễn Quang Hưng - Học DATA là gì...",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị...",
    link: "#",
  });

  const openArticle = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
    const url = `http://localhost:3000/blog-detail/${formattedTitle}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  return (
    <Container>
      {isMobile ? (
        // Mobile Layout
        <>
          <Row>
            <Col>
              {/* Search Bar and Tabs */}
              <div className="search-and-tabs">
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
                {articles.map((article, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="article-card"
                      onClick={() => openArticle(article.title)}
                      style={{ cursor: "pointer" }}
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
                  {articles[0].title}
                </h4>
                <p>{articles[0].content}</p>
                <a href={articles[0].link} style={{ color: "#f58120" }}>
                  Xem thêm
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <h2 className="section-title">Sự kiện của MCI</h2>
              {/* Event Slider */}
              <Swiper
                modules={[Grid, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                grid={{
                  rows: 1, // Single row for mobile
                  fill: "row",
                }}
                slidesPerView={1}
              >
                {events.map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="event-card"></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </>
      ) : (
        // Desktop Layout
        <Row>
          <Col md={5}>
            <h2 className="section-title">Sự kiện của MCI</h2>
            {/* Event Slider */}
            <Swiper
              modules={[Grid, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              grid={{
                rows: 3, // Multi-row for desktop
                fill: "row",
              }}
              slidesPerView={1}
            >
              {events.map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="event-card"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={7}>
            {/* Search Bar and Tabs */}
            <div className="search-and-tabs">
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
            {/* Articles */}
            <div className="articles-list">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="article-card"
                  onClick={() => openArticle(article.title)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="https://www.mcivietnam.com/media/home/new-logo.png"
                    alt="imggg"
                  />
                  <div>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                    <a href={article.link}>Xem thêm</a>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default EventSection;
