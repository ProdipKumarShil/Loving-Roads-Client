import RecommendedBlogLg from "../RecommendedBlog-lg/RecommendedBlogLg";
import BlogsByCategory from "./BlogsByCategory/BlogsByCategory";

const RelatedBlogs = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 mb-40">
      <div className="col-span-8">
        <BlogsByCategory />
      </div>
      {/* recent blogs */}
      <div className="col-span-4">
        <RecommendedBlogLg />
        <RecommendedBlogLg />
        <RecommendedBlogLg />
        <RecommendedBlogLg />
      </div>
    </div>
  );
};

export default RelatedBlogs;