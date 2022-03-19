import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Movie = ({movie}) => {
  return (
    <div className="flex flex-col md:w-72 custom-width h-36 p-3 md:p-0" key={movie}>
      <a href="" className="group relative block mb-2">
        <span className="absolute right-0 text-white rounded-l-sm rounded-bl-lg p-1 md:rounded-md z-30 text-[8px] md:text-xs font-semibold tracking-tight cursor-pointer bg-gradient-to-r from-purple-500 to-red-500">
          1080 HD
        </span>
        <img
          src="https://img.phimmoichill.net/images/info/spider-man-no-way-home.jpg"
          className="h-36 object-cover rounded-sm md:object-contain md:rounded-lg group-hover:scale-105 duration-300 delay-75 ease-in-out w-full"
        />
        <FontAwesomeIcon
          icon={faPlay}
          className="group-hover:visible invisible duration-100 delay-75 ease-in-out text-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl opacity-75"
        />
      </a>
      <a
        href="#"
        className="text-xs hover:text-red-500 text-white md:font-semibold"
      >
        Người Nhện: Không Còn Nhà
      </a>
      <div className="hidden md:flex flex-wrap gap-2 mt-2">
        <a
          href="#"
          className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
        >
          Action
        </a>
        <a
          href="#"
          className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
        >
          Adventure
        </a>
      </div>
    </div>
  );
};

export default Movie;
