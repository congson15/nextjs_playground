import SlideShow from "../../../slideshow";
const img = [1,2,3,4]

const HeaderMiddle = () => {
  return (
    <SlideShow className="background-image mb-4 md:mb-24" slideToShow={1}>
      {img.map((item, index) => <img src={`/img/bg${item}.png`} alt="background" className="brightness-50"/>)}
    </SlideShow>
  );
};

export default HeaderMiddle;
