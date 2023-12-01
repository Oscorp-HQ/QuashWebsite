import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { client } from '@/lib/contentful/client'
import BlogCard from "@/components/ui/blog-card";

const Blog = (props:any) => {
  console.log(props.posts);

  const posts = props.posts;

  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex" />
      <div className=" pt-[130px]  md:pt-[236px]   w-full text-center items-center justify-center flex flex-col ">
        <div className="flex flex-col text-center items-center justify-center w-full mb-[43px] lg:mb-[180px] lg:px-[200px] px-[18px]">
          <h1 className="justify-center bg-gradient-to-b  from-white to-gray-500 bg-clip-text text-transparent flex  text-[24px] font-[700] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Blogs show up here.
          </h1>
        </div>
      </div>
      <div className='section'>
      <div className=' p-8 rounded-md shadow-md'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
        {posts.map((post:any,index:number) => (
            <BlogCard key={post.fields.slug} data={post} />
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
  }
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}



export default Blog;
