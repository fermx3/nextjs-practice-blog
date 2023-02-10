import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Post 1",
    image: "getting-started-nextjs.png",
    date: "2023-02-10",
    excerpt: "This is the 1st excerpt.",
    slug: "post-1",
  },
  {
    title: "Post 2",
    image: "getting-started-nextjs.png",
    date: "2023-02-11",
    excerpt: "This is the 2nd excerpt.",
    slug: "post-2",
  },
  {
    title: "Post 3",
    image: "getting-started-nextjs.png",
    date: "2023-02-12",
    excerpt: "This is the 3rd excerpt.",
    slug: "post-3",
  },
  {
    title: "Post 4",
    image: "getting-started-nextjs.png",
    date: "2023-02-13",
    excerpt: "This is the 4rd excerpt.",
    slug: "post-4",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
