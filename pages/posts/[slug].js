import PostContent from "../../components/posts/post-detail/post-content";
import { getAllPosts, getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = ({ postData }) => {
  return <PostContent postDetails={postData} />;
};

export default PostDetailPage;

export function getStaticProps(context) {
  const { slug } = context.params;

  const postData = getPostData(slug);

  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postsFileNames = getPostsFiles();
  const slugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
