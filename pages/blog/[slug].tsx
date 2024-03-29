import BlogBody from "@/components/ui/blog-body";
import BlogCard from "@/components/ui/blog-card";
import BlogHeader from "@/components/ui/blog-header";
import { client, previewClient } from "@/lib/contentful/client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = ({ post, preview, posts }: any) => {
  const router = useRouter();
  const { slug } = router.query;
  const canonicalUrl = `https://quashbugs.com/blog/${slug}`;
  const [visiblePosts, setVisiblePosts] = useState<any[]>([]);

  useEffect(() => {
    const filteredPosts = posts
      ?.filter((item: any) => post?.sys?.id !== item.sys.id)
      .slice(0, 3);
    setVisiblePosts(filteredPosts);
  }, [posts, post, slug]);


  if (!posts || posts.length === 0) {
    return (
      <div className="flex text-white min-h-[280px]">No posts available</div>
    );
  }




    const postTitle = post?.fields?.title || 'Quash Blog';
    const postDescription = `Read our latest blog ${post?.fields?.title}` ;
    const publishDate = post?.fields?.publishDate || new Date().toISOString();
  
  
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: postTitle,
      author: {
        "@type": "Person",
        name: post?.fields?.author?.fields?.name || 'Quash Author',
      },
      datePublished: publishDate,
      description: postDescription,
    };
  
    
  
  return (
    <section>
      <Head>
        <title>{post.fields.title} - Quash Blog</title>
        <meta name="description" content={post.fields.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${post.fields.title} - Quash`} />
        <meta property="og:description" content={post.fields.description}/>
        <meta property="og:image" content= {`https:${post.fields.coverImage.fields.file.url}`} />
        <meta name="keywords" content="bug reporting in software testing, bug reporting tools, bug reporting tool, bug reporting, bug reporting template, jira bug reporting, bug reporting in Jira, iphone bug reporting, bug reporting tools in software testing, bug reporting software, Performance monitoring, bug report in software testing" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <motion.div 
      initial={{
        opacity: 0.0,
        y: 40,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }} className="blog-details-layout z-10 relative overflow-hidden">
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
      </motion.div>
      <div className="slug-blog-list-container">
      <div className="blogs-list" style={{ justifyContent: "center" }}>
          {visiblePosts.length > 0 &&
            visiblePosts.map((item: any,index) => (
              // Ensure the key is unique and correctly placed
              <motion.div
              initial={{ opacity: 0.0, x: index === 0 ? -40 : 0 ||  index === 2 ? 40 : 0  }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }} className="blog-card-display" key={item.sys.id}>
                <BlogCard data={item} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
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