import Avatar from '../contentful-ui/Avatar'
import ContentfulImage from '../contentful-ui/ContentfulImage'
import DateComponent from '../contentful-ui/DateComponent'

const BlogHeader = ({ post }:any) => {
  const { title, coverImage, author, date } = post.fields

  return (
    <>
      <h1 className='text-white pt-24 mb-4'>{title}</h1>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10 text-white'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
    </>
  )
}

export default BlogHeader