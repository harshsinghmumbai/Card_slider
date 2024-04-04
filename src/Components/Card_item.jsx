import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card_item = ({ Card_data }) => {
  const settings = {
    //this is my default responsive design property,were 1224px ka after what should be applyed//
    dots: true,
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        // if screen is 1224px before then applied this below property//
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          lazyLoad: true,
        },
      },
      {
        // if screen is 790px before then applied this below property//
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          lazyLoad: true,
        },
      },
      {
        // if screen is 500px before then applied this below property//
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {Card_data.map((elem, i) => {
          const { name, img, review } = elem;
          return (
            <div className="relative h-[400px] w-[300px] rounded-md" key={i}>
              <img
                src={img}
                alt="image"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">{review}</p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Read More &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Card_item;

//Customizing arrow in react slick//
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#00000033",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#00000033" }}
      onClick={onClick}
    />
  );
}
