import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import BlogHome from "../../components/blog/BlogHome";

const Blog = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BlogHome />
    </QueryClientProvider>
  );
};

export default Blog;
