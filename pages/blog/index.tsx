import Head from "next/head";
import React from "react";
import { client } from "@/lib/contentful/client";
import BlogCard from "@/components/ui/blog-card";
import BlogLatestCard from "@/components/ui/blog-latest-card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import router from "next/router";

const pageSize = 10;

const Blog = (props: any) => {
  const [latestPost, setLatestPost] = useState<any | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(pageSize - 1);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const visiblePosts = props.posts.filter(
    (post: any) => post.sys.id !== latestPost?.sys.id
  );

  const handleNextPage = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + pageSize);
    setEndIndex((prevEndIndex) => prevEndIndex + pageSize);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - pageSize, 0));
    setEndIndex((prevEndIndex) =>
      Math.max(prevEndIndex - pageSize, pageSize - 1)
    );
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (pageNumber: number) => {
    const newStartIndex = (pageNumber - 1) * pageSize;
    const newEndIndex = Math.min(
      newStartIndex + pageSize - 1,
      visiblePosts.length - 1
    );

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blogSec">
      <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex z-0" />
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      <div className="section">
        <div className="latestPostMain">
          {latestPost ? (
            <BlogLatestCard data={latestPost} />
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
        <div className="allPostsContainer">
          <ul className="posts">
            {visiblePosts.slice(startIndex, endIndex + 1).map((post: any) => (
              <BlogCard key={post.fields.slug} data={post} />
            ))}
          </ul>
        </div>
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={startIndex === 0}
            className="pagination-button"
          >
            Previous
          </button>
          <ul className="pagination-list">
            {Array.from({
              length: Math.ceil(visiblePosts.length / pageSize),
            }).map((_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`pagination-button ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextPage}
            disabled={
              endIndex >= visiblePosts.length - 1 || visiblePosts.length === 0
            }
            className="pagination-button"
          >
            Next
          </button>
        </div>
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
            Win the never-ending battle of Quality vs Speed
          </span>

          <span className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
            Accelerate your Mobile Testing Workflow with Quash
          </span>
        </div>
        <Button
          className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-3 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-5 md:leading-normal hover:bg-[#FFFFFFCC] hover:text-black"
          variant="outline"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started for Free
        </Button>
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
