import { useQuery } from "react-query";
import { PostT, UserT } from "../../utils/types";
import Loading from "../Loading";
import Post from "./PostCard";

const getAllPosts = () => fetch("/api/blog").then((res) => res.json());
const getAllUsers = () => fetch("/api/user").then((res) => res.json());

const BlogHome = () => {
  const {
    isLoading: isLoadingPosts,
    error: postsError,
    data: postsData,
  } = useQuery("getAllPosts", getAllPosts);

  const {
    isLoading: isLoadingUsers,
    error: usersError,
    data: usersData,
  } = useQuery("getAllUsers", getAllUsers);

  return (
    <div className="flex sm:place-content-center sm:flex-col md:flex-row flex-wrap">
      {isLoadingPosts && <Loading text="Loading posts" />}
      {postsData &&
        postsData.map((post: PostT) => (
          <Post key={post._id.toString()} {...post} />
        ))}
      {postsError && <div>postsError</div>}
    </div>
  );
};

export default BlogHome;
