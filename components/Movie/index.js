import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Movie = ({ movie }) => {
  return (
    <div
      className="flex flex-col md:w-3/4 custom-width h-48 p-3 md:p-0"
      key={movie}
    >
      <Link href="/movie/abc">
        <a className="group relative block mb-2 w-32 md:w-full">
          <img
            src="https://img.phimmoichill.net/images/info/spider-man-no-way-home.jpg"
            className="h-48 md:h-48 brightness-50 object-cover rounded-sm md:object-contain md:rounded-lg group-hover:scale-105 duration-300 delay-75 ease-in-out w-full group-hover:opacity-30"
          />
          <div className="absolute left-3 bottom-3 flex flex-col w-full h-44 justify-center">
            <div className="my-3 flex flex-col">
              <a
                href="#"
                className="text-xs hover:text-red-500 mb-3 text-white font-semibold"
              >
                Người Nhện: Không Còn Nhà
              </a>
              <span className="text-xs text-white font-semibold">
                1h 45mins
              </span>
            </div>
            <a
              href="#"
              class="bg-red-700 w-[35%] hidden xl:block font-semibold text-white px-2 py-2 text-xs transition duration-300 ease-in-out hover:bg-red-800"
            >
              <FontAwesomeIcon icon={faPlay} className="mx-2" />
              Play Now
            </a>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Movie;
