import React from "react";
import "../css/TrainingPrograms.css";
import useWindowSize from "../customHooks/useWindowSize";

const programs = [
  {
    title: "Phân tích dữ liệu",
    description:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị và những logic Toán học và các ngôn ngữ lập trình...",
    image: "path/to/your/image1.png", // Replace with actual image paths
    link: "#",
  },
  {
    title: "Khoa học dữ liệu",
    description:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị và những logic Toán học và các ngôn ngữ lập trình...",
    image: "path/to/your/image2.png", // Replace with actual image paths
    link: "#",
  },
  {
    title: "Kĩ sư dữ liệu",
    description:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị và những logic Toán học và các ngôn ngữ lập trình...",
    image: "path/to/your/image3.png", // Replace with actual image paths
    link: "#",
  },
  {
    title: "Lập trình ứng dụng",
    description:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ và phần mềm rất thú vị và những logic Toán học và các ngôn ngữ lập trình...",
    image: "path/to/your/image4.png", // Replace with actual image paths
    link: "#",
  },
];

const TrainingPrograms = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="training-programs container">
      <h2 className="section-title">Chương trình đào tạo của MCI</h2>
      <div
        className="programs-grid"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-image">
              <img
                src={program.image}
                alt={program.title}
                style={{ width: "100%", height: "auto", borderRadius: "5px" }}
              />
            </div>
            <h3 className="program-title">{program.title}</h3>
            <p className="program-description">{program.description}</p>
            <a href={program.link} className="program-link">
              Xem thêm
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;
