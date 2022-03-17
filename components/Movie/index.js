import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SlideShow from "../slideshow";
const Movie = () => {
  return (
    <div class="flex mx-4 md:mx-[101px]">
      <div className="mt-5 w-full">
        <SlideShow slideToShow={4.5} className="movie-slide" infinite={false}>
          {[1, 2, 3, 4,5,6,7].map((index) => {
            return (
              <div class="flex flex-col md:w-72 custom-width h-36 p-3 md:p-0" key={index}>
                <a href="" class="group relative block mb-2">
                  <img
                    src="https://img.phimmoichill.net/images/info/spider-man-no-way-home.jpg"
                    class="h-36 object-cover rounded-sm md:object-contain md:rounded-lg group-hover:scale-105 duration-300 delay-75 ease-in-out w-full"
                  />
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="group-hover:visible invisible duration-100 delay-75 ease-in-out text-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl opacity-75"
                  />
                </a>
                <a
                  href="#"
                  class="text-xs hover:text-red-500 text-white md:font-semibold"
                >
                  Người Nhện: Không Còn Nhà
                </a>
                <div class="hidden md:flex flex-wrap gap-2 mt-2">
                  <a
                    href="#"
                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                  >
                    Action
                  </a>
                  <a
                    href="#"
                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                  >
                    Adventure
                  </a>
                </div>
              </div>
            );
          })}
        </SlideShow>
      </div>
    </div>
  );
};

export default Movie;
