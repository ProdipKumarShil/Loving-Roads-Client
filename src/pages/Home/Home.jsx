import CardContainer from "../../components/Card/CardContainer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import TopDestinations from "../../components/TopDestinations/TopDestinations";

const Home = () => {
  return (
    <div>
      <Header />
      <CardContainer />
      <Gallery />
      <TopDestinations />
      <RelatedBlogs />
    </div>
  );
};

export default Home;