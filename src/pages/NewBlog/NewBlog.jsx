import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const NewBlog = () => {
  const {user} = useContext(AuthContext)
  const { handleSubmit, register, reset } = useForm();
  const handleSubmitForm = (values) => {
    const formData = new FormData()
    formData.append('image', values.img[0])

    axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`, formData)
      .then(res => {
        const newBlogData = {
          title: values.title, 
          body: [values.para1, values.para2, values.para3, values.para4, values.para5 ], 
          category: values.category, 
          reacts: 0,
          views: 0,
          date: new Date(),
          img: {img:res.data.data.url, thumb: res.data.data.thumb.url},
          author: {
            name: user?.displayName,
            img: user?.photoURL
          }
        }
        axios.post('https://loving-roads-server.vercel.app/blog/postBlog', newBlogData)
          .then(res => {
            if(res.data.status){
              toast.success(res.data.message)
              reset()
            }
          })
      })
      .catch(e => console.log(e))
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="max-w-7xl mx-auto my-6 p-4 space-y-4 mt-4">
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
          <option value="gaming">Programming</option>
          <option value="gaming">Gaming</option>
          <option value="gaming">Movies</option>
          <option value="travel">Traveling</option>
          <option value="food">Foods</option>
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
          1st Paragraph
        </label>
        <textarea
          {...register("para1")}
          className="textarea w-full textarea-bordered"
          placeholder="Paragraph 1"></textarea>
      </div>

      <div className="">
        <label className="mb-4" htmlFor="title">
          2nd Paragraph
        </label>
        <textarea
          {...register("para2")}
          className="textarea w-full textarea-bordered"
          placeholder="Paragraph 2"></textarea>
      </div>
      <div className="">
        <label className="mb-4" htmlFor="title">
          3rd Paragraph
        </label>
        <textarea
          {...register("para3")}
          className="textarea w-full textarea-bordered"
          placeholder="Paragraph 3"></textarea>
      </div>
      <div className="">
        <label className="mb-4" htmlFor="title">
          4th Paragraph
        </label>
        <textarea
          {...register("para4")}
          className="textarea w-full textarea-bordered"
          placeholder="Paragraph 4"></textarea>
      </div>
      <div className="">
        <label className="mb-4" htmlFor="title">
          5th Paragraph
        </label>
        <textarea
          {...register("para5")}
          className="textarea w-full textarea-bordered"
          placeholder="Paragraph 5"></textarea>
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
