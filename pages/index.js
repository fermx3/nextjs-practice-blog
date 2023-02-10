import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

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
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
