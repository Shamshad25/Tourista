import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/636/793/223/man-made-madrid-city-night-spain-hd-wallpaper-preview.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Spain</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://wallpaperaccess.com/full/889209.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Australia</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/originals/9c/21/58/9c21581b3ede2969670cb67256080352.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://wallpaperaccess.com/full/1180008.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>232 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
