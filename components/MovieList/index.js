
import Movie from "../Movie";
import SlideShow from "../slideshow";
const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-5 lg:mb-14 mx-auto items-center">
      <div className="flex items-center justify-between text-white mx-5 md:mb-7 md:mx-[101px]">
        <h3 className="capitalize leading-5 text-sm md:tracking-wider md:text-[1.675rem] font-monsterrat">
          {title}
        </h3>
        <a href="#" className="hidden lg:inline-flex hover:bg-gray-600 text-gray-300 text-xs bg-gray-700 p-3 rounded h-5 items-center">Xem tất cả</a>
      </div>
      <div className="flex md:mx-[101px]">
        <div className="md:mt-3 w-full">
          <SlideShow slideToShow={4.5} className="movie-slide" infinite={false} dots={false}>
            {Array(20).fill(null).map((index) => <Movie movie={index}/>)}
          </SlideShow>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
