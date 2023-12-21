import BlogBody from "@/components/ui/blog-body";
import BlogCard from "@/components/ui/blog-card";
import BlogHeader from "@/components/ui/blog-header";
import { client, previewClient } from "@/lib/contentful/client";
import Head from "next/head";
import { useRouter } from "next/router";

const Post = ({ post, preview, posts }: any) => {
  const router = useRouter();

  return (
    <div className="blog-details-layout z-10 relative overflow-hidden">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
        <meta property="image" content="/open-graph.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://quashbugs.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="🐞 Quash - Streamlining QA Processes 🚀"
        />
        <meta
          property="og:description"
          content="Bug & Crash Reporting for Mobile Developers"
        />
        <meta property="og:image" content="/open-graph.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="🐞 Quash - Streamlining QA Processes 🚀"
        />
        <meta
          name="twitter:description"
          content="Bug & Crash Reporting for Mobile Developers"
        />
        <meta name="twitter:image" content="/open-graph.png" />
      </Head>
      <div className="left-ellipse hidden md:flex absolute top-[25rem] -left-[10rem]" />
      <div className="left-sphere hidden md:flex absolute top-[40rem] -left-[2rem]" />
      <div className="right-ellipse hidden md:flex absolute top-[46rem] -right-[25rem]" />
      <div className="right-sphere hidden md:flex absolute top-[44rem] right-[17rem]" />
      {router.isFallback ? (
        <div>Loading</div>
      ) : (
        <>
          <BlogHeader post={post} />
          <BlogBody post={post} />
          <div className="blogs-list">
            {posts
              .filter((item: any) => post.sys.id !== item.sys.id)
              .slice(0, 2)
              .map((item: any) => (
                <BlogCard key={item.fields.slug} data={item} />
              ))}
          </div>
        </>
      )}
      <div className="blog-left-ellipse hidden md:flex absolute top-[131rem] -left-[10rem]" />
      <div className="left-sphere hidden md:flex absolute top-[132rem] left-[25rem]" />
      <div className="blog-right-ellipse hidden md:flex absolute top-[116rem] -right-[15rem]" />
      <div className="right-sphere hidden md:flex absolute top-[130rem] -right-[2rem]" />
    </div>
  );
};

export const getStaticProps = async ({ params, preview = false }: any) => {
  const cfClient = preview ? previewClient : client;

  const { slug } = params;
  const response = await cfClient.getEntries({
    content_type: "post",
  });

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
    },
    revalidate: 60,
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
