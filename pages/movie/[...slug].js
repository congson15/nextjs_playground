import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DetailMobile from "../../components/Movie/DetailMobile";
const DetailPage = () => {
  return (
    <Layout>
      <DetailMobile />
    </Layout>
  );
};

export default DetailPage;
