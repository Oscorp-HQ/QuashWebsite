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
      {/* <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex z-0" /> */}
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      {preview}

      <div className="containerBlog ">
        <article className="z-10">
          {router.isFallback ? (
            <div>Loading</div>
          ) : (
            <>
              <BlogHeader post={post} />
              <BlogBody post={post} />
              <ul className="posts">
                {posts
                  .filter((item: any) => post.sys.id !== item.sys.id)
                  .slice(0, 2)
                  .map((item: any) => (
                    <BlogCard key={item.fields.slug} data={item} />
                  ))}
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
