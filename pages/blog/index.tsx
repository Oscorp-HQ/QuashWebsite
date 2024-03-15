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

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(props.posts);

  useEffect(() => {
    if (selectedTopic === "all") {
      setFilteredPosts(props.posts);
    } else {
      const filtered = props.posts.filter(
        (post: any) => post.fields.topicType === selectedTopic
      );
      setFilteredPosts(filtered);
    }
  }, [selectedTopic, props.posts]);

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

  const handleTopicChange = (topicType: string) => {
    setSelectedTopic(topicType);
  };

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

  const canonicalUrl = "https://quashbugs.com/blog";

  return (
    <section>
      <Head>
        <title>Quash - Blogs published by the team</title>
        <meta
          name="description"
          content="Read original articles and opinion pieces by the team building Quash. Know more about mobile app development, testing, and best practices."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quash - Blogs published by the team" />
        <meta property="og:description" content="Read original articles and opinion pieces by the team building Quash. Know more about mobile app development, testing, and best practices." />
        <meta property="og:image" content="/Quash_Website_Blurb.jpg" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: "Quash Blog",
            url: canonicalUrl,
            description:
              "Read original articles and opinion pieces by the team building Quash. Know more about mobile app development, testing, and best practices.",
            publisher: {
              "@type": "Organization",
              name: "Quash",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
          })}
        </script>
      </Head>
      <div className="blog-layout relative overflow-hidden ">
        <div className="left-ellipse-mobile flex md:hidden absolute top-[6rem] -left-[8rem]" />
        <div className="left-sphere-mobile flex md:hidden absolute top-[4rem] left-[6rem]" />
        <div className="right-ellipse-mobile flex md:hidden absolute top-[33rem] -right-[5rem]" />
        <div className="right-sphere-mobile flex md:hidden absolute top-[35rem] right-[6rem]" />
        {/* 
      <div className="z-10 left-ellipse hidden md:flex absolute top-[25rem] -left-[10rem]" />
      <div className="z-10 left-sphere hidden md:flex absolute top-[40rem] -left-[2rem]" /> */}
        <div className="z-10 right-ellipse hidden md:flex absolute top-[46rem] -right-[25rem]" />
        <div className="z-10 right-sphere hidden md:flex absolute top-[44rem] right-[17rem]" />
        <div className="blogs-container z-20">
          <h1 className="justify-center bg-gradient-to-r  from-white to-gray-500 bg-clip-text text-transparent flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] pb-[65px] ">
            Blogs
          </h1>

          <div className="top-blog-card">
            {latestPost ? (
              <BlogLatestCard data={latestPost} />
            ) : (
              <p className="empty-blogs-text">No blogs available.</p>
            )}
          </div>

          <div className="filter-container">
            <div className="filter-heading">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5148 16.5272C27.5961 12.2009 29.1673 7.72966 26.9823 5.54466C24.7973 3.35966 20.3261 4.93091 15.9998 8.01216C11.6736 4.93091 7.20231 3.35966 5.01732 5.54466C2.83232 7.72966 4.40357 12.2009 7.48482 16.5272C4.40357 20.8534 2.83232 25.3247 5.01732 27.5097C5.72107 28.2134 6.66106 28.5272 7.75606 28.5272C10.0661 28.5272 13.0661 27.1309 16.0061 25.0422C18.9336 27.1309 21.9336 28.5272 24.2498 28.5272C25.3448 28.5272 26.2861 28.2122 26.9886 27.5097C29.1673 25.3247 27.5961 20.8534 24.5148 16.5272ZM25.5686 6.95841C26.5236 7.91341 25.8786 11.0084 23.2536 14.8684C22.4231 13.8404 21.539 12.8569 20.6048 11.9222C19.6699 10.9893 18.6865 10.1064 17.6586 9.27716C21.5186 6.65216 24.6136 6.00216 25.5686 6.95841ZM22.0361 16.5272C21.1515 17.6461 20.2015 18.7117 19.1911 19.7184C18.1844 20.7289 17.1188 21.6789 15.9998 22.5634C14.8809 21.6789 13.8152 20.7289 12.8086 19.7184C11.7981 18.7117 10.8481 17.6461 9.96356 16.5272C11.7382 14.2909 13.7635 12.2655 15.9998 10.4909C17.1188 11.3754 18.1844 12.3254 19.1911 13.3359C20.2015 14.3426 21.1515 15.4082 22.0361 16.5272ZM6.43107 6.95841C6.70607 6.68216 7.15981 6.53966 7.75856 6.53966C9.23606 6.53966 11.5948 7.40216 14.3398 9.27716C13.3129 10.1071 12.3299 10.9899 11.3948 11.9222C10.4619 12.857 9.57904 13.8405 8.74981 14.8684C6.12481 11.0084 5.47607 7.91341 6.43107 6.95841ZM6.43107 26.0959C5.47607 25.1409 6.12481 22.0459 8.74981 18.1859C9.58026 19.2139 10.4644 20.1974 11.3986 21.1322C12.3328 22.0643 13.315 22.9472 14.3411 23.7772C10.4811 26.4022 7.38607 27.0522 6.43107 26.0959ZM25.5686 26.0959C24.6136 27.0522 21.5186 26.4059 17.6586 23.7809C18.686 22.9498 19.6694 22.0657 20.6048 21.1322C21.5377 20.1973 22.4206 19.2138 23.2498 18.1859C25.8748 22.0459 26.5236 25.1409 25.5686 26.0959ZM17.4998 16.5272C17.4998 16.8238 17.4118 17.1138 17.247 17.3605C17.0822 17.6072 16.8479 17.7994 16.5738 17.913C16.2998 18.0265 15.9982 18.0562 15.7072 17.9983C15.4162 17.9405 15.1489 17.7976 14.9392 17.5878C14.7294 17.378 14.5865 17.1108 14.5286 16.8198C14.4708 16.5288 14.5005 16.2272 14.614 15.9531C14.7275 15.679 14.9198 15.4448 15.1665 15.28C15.4131 15.1151 15.7031 15.0272 15.9998 15.0272C16.3976 15.0272 16.7792 15.1852 17.0605 15.4665C17.3418 15.7478 17.4998 16.1293 17.4998 16.5272Z"
                  fill="white"
                />
              </svg>
              <p>Topics</p>
            </div>
            <div className="topic-filter-btn z-20">
              <button
                className={selectedTopic === "all" ? "active" : ""}
                onClick={() => handleTopicChange("all")}
              >
                All
              </button>
              {props.uniqueTopics.sort().map((topic: any) => (
                <button
                  key={topic}
                  onClick={() => {
                    console.log(`Clicked on ${topic}`);
                    handleTopicChange(topic);
                  }}
                  className={selectedTopic === topic ? "active" : ""}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="blogs-list-container">
            {filteredPosts.length > 0 && (
              <div className="blogs-list">
                {filteredPosts
                  .sort(
                    (
                      a: { fields: { dateAndTime: string | number | Date } },
                      b: { fields: { dateAndTime: string | number | Date } }
                    ) =>
                      new Date(b.fields.dateAndTime).getTime() -
                      new Date(a.fields.dateAndTime).getTime()
                  )
                  .map((post: any) => (
                    <div className="blog-card-display" key={post.fields.slug}>
                      <BlogCard data={post} />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="-z-10 blog-left-ellipse hidden md:flex absolute top-[131rem] -left-[10rem]" />
        <div className="-z-10 left-sphere hidden md:flex absolute top-[132rem] left-[25rem]" />
        <div className="-z-10 blog-right-ellipse hidden md:flex absolute top-[116rem] -right-[15rem]" />
        <div className="-z-10 right-sphere hidden md:flex absolute top-[130rem] -right-[2rem]" />
        <Callback />
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "post" });

  const posts = response.items;
  const uniqueTopics = Array.from(
    new Set(posts.map((post: any) => post.fields.topicType))
  );

  return {
    props: {
      posts,
      uniqueTopics,
    },
    revalidate: 60,
  };
};

export default Blog;
