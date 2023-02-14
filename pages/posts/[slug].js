import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = ({ postData }) => {
  return (
    <Fragment>
      <Head>
        <title>{`${postData.title} | Fer's NextJS Blog`}</title>
        <meta name='description' content={postData.excerpt} />
      </Head>
      <PostContent postDetails={postData} />
    </Fragment>
  );
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
  const slugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
