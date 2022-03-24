import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SlideShow from "../../components/slideshow";
import Movie from "../../components/Movie";
import MovieList from "../../components/MovieList";
const DetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <div className="group relative block mb-2 w-full">
        <img
          src="https://img.phimmoichill.net/images/info/spider-man-no-way-home.jpg"
          className="h-48 brightness-75 opacity-60 blur-sm object-cover rounded-sm w-full"
        />
        <FontAwesomeIcon
          icon={faPlay}
          className="border-4 border-red-400 h-6 w-6 p-2 rounded-full text-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
        />
      </div>
      <div className="absolute top-24 flex flex-col justify-center w-full">
        <div className="max-h-80 sm:rounded-3xl p-5 flex">
          <div className="h-48 overflow-visible w-1/3">
            <img
              className="w-24 object-cover h-36 rounded-[2px]"
              src="https://img.phimmoichill.net/images/info/spider-man-no-way-home.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col max-w-[250px] mt-5">
            <h1 className="text-white text-xl truncate">
              Trận Chiến Cuối Cùng 1996 Trận Chiến Cuối Cùng 1996
            </h1>
            <h2 className="text-white text-xs truncate">
              Spider-Man: No Way Home (2021)
            </h2>
            <div className="flex mt-4 text-white">
              <div className="w-6 h-6 p-3 text-xs flex justify-center items-center border mr-3">
                21
              </div>
              <span className="text-gray-400 text-sm">2019 | 102 phút</span>
            </div>
            <div className="flex mt-1 text-white">
              <span className="text-gray-400 text-xs">
                Phim Hành Động, Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Chiếu Rạp
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-20 p-5 text-white">
        <h2 className="mb-1 leading-5 tracking-wider">Thông tin</h2>
        <span className="text-xs te opacity-80">
        Người Nhện: Không Còn Nhà - Spider-Man: No Way Home tiếp nối câu chuyện
        ở những phần phim trước, khi giờ đây siêu anh hùng người nhện là Peter
        Parker đã bị bại lộ ra danh tính thật sự của mình cho cả thế giới biết,
        tất cả đều do Mysterio thực hiện. Giờ đây Peter phải đối mặt với vô số
        nguy hiểm không những thế còn phải bảo vệ những người thân của mình. Vì
        không thể nào chống đỡ nổi, Peter Parker đã tìm đến Doctor Strange xin
        sự trợ giúp. Nhưng mọi chuyện ngày càng đi xa và rắc rối hơn, giờ đây
        Peter phải cố gắng khám phá ra được ý nghĩa thật sự của bản thân khi trở
        thành một siêu anh hùng.            
        </span>
        <div className="flex flex-col">
            <div className="flex my-1">
                <h2 className="text-sm w-1/4 opacity-70">Đạo diễn</h2>
                <h2 className="text-sm w-full opacity-80">Jon Watts</h2>
            </div>
            <div className="flex">
                <h2 className="text-sm w-1/4 opacity-70">Diễn viên</h2>
                <h2  className="text-sm w-full opacity-80">Tom Holland, Zendaya, Benedict Cumberbatch, Jon Favreau, Jacob Batalon, Marisa Tomei</h2>
            </div>
        </div>
      </div>
      <div className="w-full mb-20 text-white">
      <MovieList title="Có thể bạn muốn xem" />
      </div>
    </Layout>
  );
};

export default DetailPage;
