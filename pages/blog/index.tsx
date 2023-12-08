import Head from "next/head";
import React from "react";
import { client } from "@/lib/contentful/client";
import BlogCard from "@/components/ui/blog-card";
import BlogLatestCard from "@/components/ui/blog-latest-card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import router from "next/router";


const Blog = (props: any) => {
  console.log(props);
  
  const [latestPost, setLatestPost] = useState<any | null>(null);
  useEffect(() => {
    if (props.posts && props.posts.length > 0) {
      const topPost = props.posts.find(
        (post: any) => post.fields.isTopPost === true
      );
      if (topPost) {
        setLatestPost(topPost);
      }
    }
  }, [props.posts]);

  return (
    <div className="allPosts">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex" />
      <div className="flex px-5 pb-[112px]  md:pt-[20px] md:pb-[143px] flex-col justify-center items-center">
        <div className="Section">
          <div className="latestPostMain">
            {latestPost ? (
              <BlogLatestCard data={latestPost} />
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
          <ul className="posts">
            {props.posts.map((post: any) => {
              if (latestPost && post.sys.id !== latestPost.sys.id) {
                return <BlogCard key={post.fields.slug} data={post} />;
              }
              return null;
            })}
          </ul>
        </div>
        <div className="relative w-full justify-center items-center flex-col overflow-hidden flex ">
          <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[115px] md:h-[200px] absolute top-0 bg-black"></div>
          <div className="absolute top-[115px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
            <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          </div>
        </div>
        <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px]">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[987px]">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full text-center leading-normal">
              Win the never ending battle of Quality vs Speed
            </span>

            <span className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
              Accelerate your Mobile Testing Workflow with Quash
            </span>
          </div>
          <Button
            className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-3 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-5 md:leading-normal hover:bg-[#FFFFFFCC]"
            variant="outline"
            onClick={() => {
              router.push("https://optimus.quashbugs.com/signup");
            }}
          >
            Get Started for Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};

export default Blog;
