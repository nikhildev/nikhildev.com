import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PostT } from "../utils/types";

const getAllPosts = () => fetch("/api/blog").then((res) => res.json());

const Blog = () => {
  const queryClient = new QueryClient();

  const { isLoading, error, data } = useQuery("/api", getAllPosts);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {isLoading && <div>Loading</div>}
        {data && data.map((post: PostT) => <div>{post.title}</div>)}
      </div>
    </QueryClientProvider>
  );
};

export default Blog;
