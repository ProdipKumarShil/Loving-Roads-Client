import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewBlog = () => {
  const { handleSubmit, register } = useForm();
  const handleSubmitForm = (values) => {
    const formData = new FormData()
    formData.append('image', values.img[0])

    axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMG_KEY}`, formData)
      .then(res => {
        const newBlogData = {
          title: values.title, 
          body: values.body, 
          category: values.category, 
          reacts: 0, 
          comments: [],
          date: new Date(),
          img: {img:res.data.data.url, thumb: res.data.data.thumb.url},
        }
        axios.post('http://localhost:5000/blog/postBlog', newBlogData)
          .then(res => {
            if(res.data.status){
              toast.success(res.data.message)
            }
          })
      })
      .catch(e => console.log(e))
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="max-w-7xl mx-auto h-screen space-y-4 mt-4">
      <div className="">
        <label className="mb-4" htmlFor="title">
          Title
        </label>
        <input
          {...register("title")}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <div className="">
        <label className="mb-4" htmlFor="title">
          Category
        </label>
        <select
          {...register("category")}
          defaultValue="defaultValue"
          className="select select-bordered w-full ">
          <option value="defaultValue" disabled>
            Select a category
          </option>
          <option value="gaming">Gaming</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
        </select>
      </div>
      <div className="">
        <label className="mb-4" htmlFor="title">
          Image
        </label>
        <input
          {...register("img")}
          type="file"
          className="file-input file-input-bordered w-full"
        />
      </div>
      <div className="">
        <label className="mb-4" htmlFor="title">
          Body
        </label>
        <textarea
          {...register("body")}
          className="textarea w-full textarea-bordered"
          placeholder="Bio"></textarea>
      </div>
      <button className="btn btn-primary mb-10">Submit</button>
    </form>
  );
};

export default NewBlog;

// title: String,
//   body: String,
//   category: String,
//   reacts: Number,
//   comments: [commentSchema],
//   date: Date,
//   img: Object,
//   author: {
//     name: String,
//     img: String
//   }
