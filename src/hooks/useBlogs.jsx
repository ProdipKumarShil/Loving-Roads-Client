import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useBlog = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const {data} = await axios.get('https://loving-roads-server.vercel.app/blog/getBlogs')
      return data
    }
  })
}

export default useBlog
