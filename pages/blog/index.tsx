import Head from "next/head";
import React from "react";
import { client } from "@/lib/contentful/client";
import BlogCard from "@/components/ui/blog-card";
import BlogLatestCard from "@/components/ui/blog-latest-card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import router from "next/router";
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
    <div className="blog-layout">
      {/* <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex z-0" /> */}
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
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
            {/* <div className="pagination">
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
                  endIndex >= visiblePosts.length - 1 ||
                  visiblePosts.length === 0
                }
                className="pagination-button"
              >
                Next
              </button>
            </div> */}
          </>
        )}
      </div>
      <Callback />
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
