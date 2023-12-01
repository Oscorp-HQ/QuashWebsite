// const Blog = () => {
//   return (
//     <div className='text-white'>
//         <div className="py-56">
//             <p>Blog</p>
//         </div>
//     </div>
//   )
// }

// export default Blog

import BlogBody from '@/components/ui/blog-body'
import BlogHeader from '@/components/ui/blog-header'
import { client, previewClient } from '@/lib/contentful/client'
import { useRouter } from 'next/router'

const Post = ({ post, preview }:any) => {
  const router = useRouter()

  return (
    <section className='section'>
      {preview}
      <div className='container'>
        <article className='prose mx-auto'>
          {router.isFallback ? (
            <div>
                Loading
            </div>
          ) : (
            <>
              <BlogHeader post={post} />
              <BlogBody post={post} />
            </>
          )}
        </article>
      </div>
    </section>
  )
}

export const getStaticProps = async ({ params, preview = false }:any) => {
  const cfClient = preview ? previewClient : client

  const { slug } = params
  const response = await cfClient.getEntries({
    content_type: 'post',
    'fields.slug': slug
  })

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
      revalidate: 60
    }
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  const paths = response.items.map((item:any) => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post