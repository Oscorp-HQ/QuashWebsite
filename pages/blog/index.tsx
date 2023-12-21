import Head from "next/head";
import React from "react";
import { client } from "@/lib/contentful/client";
import BlogCard from "@/components/ui/blog-card";
import BlogLatestCard from "@/components/ui/blog-latest-card";
import { useState, useEffect } from "react";

import Callback from "@/components/callback";

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
    <div className="blog-layout relative overflow-hidden">
      <div className="left-ellipse-mobile flex md:hidden absolute top-[6rem] -left-[8rem]" />
      <div className="left-sphere-mobile flex md:hidden absolute top-[4rem] left-[6rem]" />
      <div className="right-ellipse-mobile flex md:hidden absolute top-[33rem] -right-[5rem]" />
      <div className="right-sphere-mobile flex md:hidden absolute top-[35rem] right-[6rem]" />
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

      <div className="z-10 left-ellipse hidden md:flex absolute top-[25rem] -left-[10rem]" />
      <div className="z-10 left-sphere hidden md:flex absolute top-[40rem] -left-[2rem]" />
      <div className="z-10 right-ellipse hidden md:flex absolute top-[46rem] -right-[25rem]" />
      <div className="z-10 right-sphere hidden md:flex absolute top-[44rem] right-[17rem]" />
      <div className="blogs-container">
        <div className="">
          {latestPost ? (
            <BlogLatestCard data={latestPost} />
          ) : (
            <p className="empty-blogs-text">No blogs available.</p>
          )}
        </div>
        {visiblePosts.length > 0 && (
          <>
            <div className="blogs-list">
              {visiblePosts.slice(startIndex, endIndex + 1).map((post: any) => (
                <BlogCard key={post.fields.slug} data={post} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="z-10 blog-left-ellipse hidden md:flex absolute top-[131rem] -left-[10rem]" />
      <div className="z-10 left-sphere hidden md:flex absolute top-[132rem] left-[25rem]" />
      <div className="z-10 blog-right-ellipse hidden md:flex absolute top-[116rem] -right-[15rem]" />
      <div className="z-10 right-sphere hidden md:flex absolute top-[130rem] -right-[2rem]" />
      <Callback />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
    },
    revalidate: 60,
  };
};

export default Blog;
