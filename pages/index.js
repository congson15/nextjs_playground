import Layout from "../components/layout/layout";
import MovieList from "../components/MovieList";
import HeaderMiddle from "../components/layout/header/middle";
import Loading from '../components/loading';
export default function HomePage() {
  if(true) return <Loading />;
  return (
    <Layout>
      <HeaderMiddle />
      <MovieList title="Xem gần đây" />
      <MovieList title="Phim đề cử" />
      <MovieList title="Phim chiếu rạp" />
    </Layout>
  );
}
