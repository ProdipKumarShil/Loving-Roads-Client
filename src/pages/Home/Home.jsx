import Button from "../../components/Button";
import CardContainer from "../../components/Card/CardContainer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import TopDestinations from "../../components/TopDestinations/TopDestinations";


const Home = () => {
  return (
    <div>
      {/* <Button className="bg-red-400 py-2 px-4 rounded-full" /> */}
      <Header />
      <CardContainer />
      <Gallery />
      <TopDestinations />
      <RelatedBlogs />
    </div>
  );
};

export default Home;