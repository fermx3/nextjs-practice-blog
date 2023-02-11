import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

function PostContent({ postDetails }) {
  const imagePath = `/images/posts/${postDetails.slug}/${postDetails.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={postDetails.title} image={imagePath} />
      <ReactMarkdown>{postDetails.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
