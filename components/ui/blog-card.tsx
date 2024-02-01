import Link from "next/link";
import Avatar from "../contentful-ui/Avatar";
import DateComponent from "../contentful-ui/DateComponent";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import Name from "../contentful-ui/Name";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ data }: any) => {
  const {
    title,
    slug,
    excerpt,
    coverImage,
    author,
    dateAndTime,
    readTime,
    topicType,
  } = data?.fields;

  return (
    <div>
      <div className="blog-card-new">
        <div className="blog-card-image-container">
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage?.fields?.file?.url}
            width={408}
            height={229}
          />
        </div>
        <div className="blog-card-text-container">
          <div className="blog-card-info">
            <h3 className="blog-topic-text">{topicType}</h3>
            <h3 className="blog-card-title">{title}</h3>
          </div>
          <div className="blog-card-meta-info">
            <p className="postItemFieldsDownAuthor"> 
              <Name name={author.fields.name} />
            </p>
            <p className="postItemFieldsDownDate border-l border-[#BDBDBD] pl-4">
              <DateComponent dateString={dateAndTime} />
            </p>
            <p className="postItemFieldsDownReadTime border-l border-[#BDBDBD] pl-4">
              {readTime}
            </p>
          </div>
          <Link
            href={`/blog/${slug}`}
            aria-label={title}
            className="blog-learn-more-button-mob"
          >
            <p>Read More</p>  
            <ArrowRight size={24} color="#FFD233" className="" />
          </Link>
          <Link
            href={`/blog/${slug}`}
            aria-label={title}
            className="blog-learn-more-button"
          >
            <p>Read More</p>  
            <ArrowRight size={24} color="#FFD233" className="" />
          </Link>
        </div>
      </div>

      {/* <Link href={`/blog/${slug}`} aria-label={title} className="blog-card">
        <div className="blog-card-details">
          <div className="flex items-center justify-between w-full gap-3">
            <h3 className="blog-card-title">{title}</h3>
            <div className="blog-card-image-container-mobile">
              <ContentfulImage
                alt={`Cover Image for ${title}`}
                src={coverImage?.fields?.file?.url}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>

          <p className="blog-card-description">{excerpt}</p>
          <div className="blog-card-meta-info">
            <p className="postItemFieldsDownAuthor">
              <Name name={author.fields.name} />
            </p>

            <p className="postItemFieldsDownDate border-l border-[#BDBDBD] pl-4">
              <DateComponent dateString={dateAndTime} />
            </p>
            <p className="postItemFieldsDownReadTime border-l border-[#BDBDBD] pl-4">
              {readTime}
            </p>
          </div>
        </div>
        <hr className="blog-card-divider" />
        <div className="blog-card-image-container">
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage?.fields?.file?.url}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </Link> */}
    </div>
  );
};

export default BlogCard;
