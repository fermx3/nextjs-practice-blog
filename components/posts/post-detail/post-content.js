import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';

import classes from './post-content.module.css';

function PostContent({ postDetails }) {
  const imagePath = `/images/posts/${postDetails.slug}/${postDetails.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${postDetails.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${postDetails.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              fill
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'left',
              }}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={postDetails.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {postDetails.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
