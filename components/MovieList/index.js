
import Movie from "../Movie";
const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-24 mx-auto">
      <h3 className="text-white capitalize font-light text-sm mx-5 md:text-3xl md:mb-7 md:mx-[101px] md:uppercase">
        {title}
      </h3>
      <Movie />
    </div>
  );
};

export default MovieList;
