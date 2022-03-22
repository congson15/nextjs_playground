import Layout from "../components/layout/layout";
import MovieList from "../components/MovieList";
import HeaderMiddle from "../components/layout/header/middle";
export default function HomePage() {
  return (
    <Layout>
      <HeaderMiddle />
      <MovieList title="Xem gần đây" />
      <MovieList title="Phim đề cử" />
      <MovieList title="Phim chiếu rạp" />
    </Layout>
  );
}
