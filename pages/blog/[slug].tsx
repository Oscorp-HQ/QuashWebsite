import BlogBody from "@/components/ui/blog-body";
import BlogCard from "@/components/ui/blog-card";
import BlogHeader from "@/components/ui/blog-header";
import { client, previewClient } from "@/lib/contentful/client";
import Head from "next/head";
import { useRouter } from "next/router";

const Post = ({ post, preview, posts }: any) => {
  const router = useRouter();

  if (!posts || posts.length === 0) {
    return (
      <div className="flex text-white min-h-[280px]">No posts available</div>
    );
  }

  const visiblePosts = posts
    ?.filter((item: any) => post?.sys?.id !== item.sys.id)
    .slice(0, 3);

  return (
    <div>
      <div className="blog-details-layout z-10 relative overflow-hidden">
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
          </>
        )}
        <div className="blog-left-ellipse hidden md:flex absolute top-[131rem] -left-[10rem]" />
        <div className="left-sphere hidden md:flex absolute top-[132rem] left-[25rem]" />
        <div className="blog-right-ellipse hidden md:flex absolute top-[116rem] -right-[15rem]" />
        <div className="right-sphere hidden md:flex absolute top-[130rem] -right-[2rem]" />
      </div>
      <div className="slug-blog-list-container">
        <div className="blogs-list" style={{ justifyContent: "center" }}>
          {visiblePosts.length > 0 &&
            visiblePosts.map((item: any) => (
              <div className="blog-card-display">
                <BlogCard key={item.fields.slug} data={item} />
              </div>
            ))}
        </div>
      </div>
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
