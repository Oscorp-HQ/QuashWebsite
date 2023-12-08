import BlogBody from "@/components/ui/blog-body";
import BlogCard from "@/components/ui/blog-card";
import BlogHeader from "@/components/ui/blog-header";
import { client, previewClient } from "@/lib/contentful/client";
import Head from "next/head";
import { useRouter } from "next/router";

const Post = ({ post, preview, posts }: any) => {
  console.log("posts", posts);

  const router = useRouter();

  return (
    <section className="section ">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      {preview}

      <div className="containerBlog">
        <article className="">
          {router.isFallback ? (
            <div>Loading</div>
          ) : (
            <>
              <BlogHeader post={post} />
              <BlogBody post={post} />
              <ul className="posts">
                {posts.map((item: any) => {
                  if (post.sys.id !== item.sys.id) {
                    return <BlogCard key={item.fields.slug} data={item} />;
                  }
                })}
              </ul>
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ params, preview = false }: any) => {
  const cfClient = preview ? previewClient : client;

  const { slug } = params;
  const response = await cfClient.getEntries({
    content_type: "post",
    // "fields.slug": slug,
  });

  console.log("fetched slug file is", response);

  const posts = response.items;
  const post = response?.items?.find((p: any) => slug === p.fields.slug);

  if (!post) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
      preview,
      posts,
      revalidate: 60,
    },
  };
};
export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "post" });
  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: true,
  };
};

export default Post;
