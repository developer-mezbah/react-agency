import "./Banner.css";
import banner from "../../assets/images/banner.png";

const SlideItem = () => {
  return (
    <>
    <div className="banner">
      <div className="banner-content">
        <h1>Grow your brand through digital</h1>
        <p>
          If the path is beautiful, let us not ask where it leads. my religion
          is very simple. my religion is kindness. each of us has within our
          power the ability to disrupt
        </p>
        <button className="btn">Learn more</button>
      </div>
      <div className="banner-image">
        <img src={banner} alt="" />
      </div>
      </div>
    </>
  );
};

export default SlideItem;
