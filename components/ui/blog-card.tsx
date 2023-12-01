import Link from 'next/link'
import Avatar from '../contentful-ui/Avatar'
import DateComponent from '../contentful-ui/DateComponent'
import ContentfulImage from '../contentful-ui/ContentfulImage'

const BlogCard = ({ data }:any) => {
    console.log(data)
   const { title, slug, excerpt, coverImage, author, dateAndTime } = data?.fields

  return (
    <>
    <li className='overflow-hidden shadow-md text-white  border border-white mb-4 bg-transparent hover:bg-white hover:text-black'>
      <Link href={`/blog/${slug}`} aria-label={title}>
        <div className='pt-6'>
        <div className='mb-2 pl-6 '>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage?.fields?.file?.url}
            width={200}
            height={150}
          />
        </div>
        <div className='p-6'>
          <h3 className='text-xl mb-1 leading-snug'>{title}</h3>
          <div className='text-sm mb-4 text-gray-400'>
            <DateComponent dateString={dateAndTime} />
          </div>
          <p className='text-base mb-4'>{excerpt}</p>
          <Avatar name={author?.fields?.name} picture={author?.fields?.picture} />
        </div>
        </div>
      </Link>
    </li>
    </>
  )
}

export default BlogCard


// import React from 'react'

// const Card = ({key , data}:any) => {
//   return (
//     <div key={key} className="text-white">
//               {data.fields.title}
//             </div>
//   )
// }

// export default Card

