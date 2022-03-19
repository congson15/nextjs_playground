
import Movie from "../Movie";
import SlideShow from "../slideshow";
const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-14 mx-auto items-center">
      <div className="flex items-center justify-between text-white mx-5 md:mb-7 md:mx-[101px]">
        <h3 className="capitalize font-light text-sm md:uppercase md:text-3xl ">
          {title}
        </h3>
        <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs bg-gray-700 p-3 rounded h-5 inline-flex items-center">Xem tất cả</a>
      </div>
      <div class="flex md:mx-[101px]">
        <div className="mt-5 w-full">
          <SlideShow slideToShow={4.5} className="movie-slide" infinite={false} dots={false}>
            {Array(20).fill(null).map((index) => <Movie movie={index}/>)}
          </SlideShow>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
