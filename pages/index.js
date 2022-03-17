import Layout from "../components/layout/layout";
import Movie from "../components/Movie";
import MovieList from "../components/MovieList";

export default function HomePage() {
  return (
    <Layout>
      <MovieList title="Xem gần đây" />
      <MovieList title="Phim đề cử" />
      <MovieList title="Phim chiếu rạp" />
    </Layout>
  );
}
