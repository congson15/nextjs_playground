import SlideShow from "../../../slideshow";
const img = [1, 2, 3, 4];

const HeaderMiddle = () => {
  return (
    <div className="relative">
      <div className="md:hidden absolute z-50 text-white p-3 w-full">
        <div className="relative w-full">
          <input
            className="w-full h-10 px-5 bg-gray-700 opacity-70 text-sm text-white placeholder:text-white focus:outline-none"
            name="search"
            placeholder="Tìm kiếm...."
          />
          <img src="/svg/search.svg" className="absolute right-0 top-0 mt-4 mr-2" />
        </div>
      </div>
      <SlideShow className="background-image mb-4 md:mb-24" slideToShow={1}>
        {img.map((item, index) => (
          <img
            src={`/img/bg${item}.png`}
            alt="background"
            className="brightness-50"
          />
        ))}
      </SlideShow>
    </div>
  );
};

export default HeaderMiddle;
