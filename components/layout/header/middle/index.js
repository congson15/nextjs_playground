import SlideShow from "../../../SlideShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
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
          <img
            src="/svg/search.svg"
            className="absolute right-0 top-0 mt-4 mr-2"
          />
        </div>
      </div>
      <SlideShow
        className="background-image mb-4 md:mb-24"
        slideToShow={1}
        speed={750}
        dots={true}
        autoplay={true}
      >
        {img.map((item, index) => (
          <div className="relative h-80 md:h-[35rem] lg:h-[45.678rem] cursor-pointer" key={index}>
            <img
              src={`/img/bg${item}.png`}
              alt="background"
              className="brightness-[0.3] h-full object-cover"
            />

            <div className="absolute top-32 left-0 px-6 md:top-10 lg:top-40 lg:mx-20 grid grid-cols-2 grid-flow-col">
              <div className="col-span-10">
                <h3 className="hidden md:flex bg-gradient-to-r w-1/4 h-10 from-[#ff3741] opacity-70 border-l-4 border-[#e50914] mb-10 px-4 items-center">
                  <span className="items-center text-2xl font-bold text-white opacity-100">
                    FULL HD
                  </span>
                </h3>
                <h4 className="uppercase text-xl font-semibold tracking-tight text-white font-monsterrat lg:text-[3.026rem]">
                  Spider-Man: No Way Home
                </h4>
                <p className="block mb-9 md:mb-3 my-5 leading-normal font-normal text-gray-100">
                  <FontAwesomeIcon color="red" icon={faStar} /> 5.0 | 129 phút
                </p>
                <p className="hidden md:block font-monsterrat text-gray-50 md:mb-5 w-5/6 lg:w-2/3">
                  Người Nhện: Xa Nhà - Spider-Man: Far From Home lấy bối cảnh
                  vào mùa hè tại vùng đất Châu Âu rộng lớn. Peter nghỉ hè và
                  cùng với những người bạn của mình đi du lịch đễ giải tỏa căng
                  thẳng. Thế nhưng, tưởng chừng một chuyến đi chơi đầy thú vị và
                  hai hước, thì bọn họ lại vô tình gặp vô số rắc rối và vô tình
                  bị cuốn vào một cuộc hành trình đi đến một chiều không gian
                  khác. Tại đây, Peter phải chiến đấu để có thể bảo vệ bạn bè
                  của mình?
                </p>
                <div className="hidden md:block my-6 w-2/3">
                  <div className="text-red-700 text-lg font-monsterrat font-medium">
                    Thể loại:{" "}
                    <span className="text-gray-50 text-sm">
                      Phiêu Lưu, Viễn Tưởng, Hành Động
                    </span>
                  </div>
                  <div className="text-red-700 text-lg font-monsterrat font-medium">
                    Diễn viên:{" "}
                    <span className="text-gray-50 text-sm">
                      Tom Holland, Zendaya, Benedict Cumberbatch
                    </span>
                  </div>
                  <div className="text-red-700 text-lg font-monsterrat font-medium">
                    Lượt xem:{" "}
                    <span className="text-gray-50 text-sm">600,096</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="bg-red-700 font-medium font-monsterrat text-white px-2 py-3.5 leading-10 tracking-widest transition duration-300 ease-in-out hover:bg-red-800 mr-6"
                >
                  <FontAwesomeIcon icon={faPlay} className="mx-2" />
                  PLAY NOW
                </a>
              </div>
              <div className="hidden col-span-2 items-center lg:flex mb-16">
                <a
                  href="#"
                  className="playBut mr-5 transition delay-[1000ms] hover:border-none"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                    xmlSpace="preserve"
                  >
                    <polygon
                      className="triangle"
                      id="XMLID_18_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="
      73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      className="circle"
                      id="XMLID_17_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                </a>
                <span className="uppercase text-2xl leading-5 tracking-[0.75rem] text-gray-50">
                  Trailer
                </span>
              </div>
            </div>
          </div>
        ))}
      </SlideShow>
    </div>
  );
};

export default HeaderMiddle;
