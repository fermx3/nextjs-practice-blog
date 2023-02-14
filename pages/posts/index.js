import { Fragment } from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ allPosts }) => {
  return (
    <Fragment>
      <Head>
        <title>Posts | Fer's NextJS Blog</title>
        <meta
          name='description'
          content='A list of programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={allPosts} />
    </Fragment>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
