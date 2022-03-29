import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Home from "../../components/blog/Home";

const Blog = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default Blog;
