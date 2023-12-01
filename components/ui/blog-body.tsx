import RichText from './richtext'

const BlogBody = ({ post }:any) => {
  const { content } = post.fields

  return (
    <div className='mx-auto prose text-white pb-12'>
      <RichText content={content} />
    </div>
  )
}

export default BlogBody