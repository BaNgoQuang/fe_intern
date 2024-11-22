import useWindowSize from "../customHooks/useWindowSize";
import Header from "./Header"
import EventSection from "./EventSection"
import PhotoGallery from "./PhotoGallery"
import TrainingPrograms from "./TrainingProgram"
import Footer from "./Footer"

const Home = () => {
  const { width } = useWindowSize()

  return (
    <>
      <Header />
      <img
        src={width > 768 ?
          "https://s3-alpha-sig.figma.com/img/b31f/82ce/f5e45e953e991aae8ee26ef0ae503701?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bOK1RACj6GLRxq-QrsK2GgxJ9jMeAdT8Bfp~bmyjC~M8AJTX4Cm4BfjML3EWSxFGQgOLH5Mnt~tk2Mo-lXqL5EixyfmrFDQEWeroBJGnJU6-KK4Mx0VcSjlow2l7xUepCsF6LNQD4gOmHhajaW6YY85GaurTQnRf4y4TEjJ6-uTrEBdHuM09nAl4pjOk5SiqOq5dOysgSo~KoO6mllpfN6ET9T9NwnJeOABmAcJasbWJhu5OO5wCRikjl42Z3oL-KygfTyxUzvcKzQ4~MWnBRGSlbZvzw~bKsehftI57Po8kfMYoR7CkjZNgYE-xGxgMLmgYRpemcAyEA0PsfiQ6HA__"
          :
          "https://s3-alpha-sig.figma.com/img/a0a7/8f22/3179f7861d0b501147e42ca364ba4575?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6RBlc36w85QYT1kdVLO4UsxI8QAtIUL~7x9gKcLrHSvMbxsGGZdxNh1Bct-u3~U1lkgpnYycNUNgRvUEtF2OW75fMKc9jOTt8xqHgRn-3J-YyOHOHWnk9vUBpiTFcwBaYpIjluBiosGIqhZeFp8SZsill7EX~5xXAKg9HcFxfJlctPZpQDV4L6YeXwcC912WoLlVrbXTs9qAXJ9xyj6b-2Whey3hr4~3DXz8EpioI178uIBnW8kXDcxsX2ryBRDBjia6BaRrkMz9wTY35wi7Gfg0p5XZ4qTl-RODK7x0VW08FxbIX-epjcuwAwzhvF7-tSXT-kNBWcdIwbU02qTaA__"
        }
        alt="Logo"
        className="banner"
      />
      <EventSection />
      <PhotoGallery />
      <TrainingPrograms />
      <Footer />

    </>
  );
}

export default Home;