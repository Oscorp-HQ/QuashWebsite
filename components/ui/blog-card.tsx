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
            aria-label={`Read more about ${title}`}
            className="blog-learn-more-button-mob"
          >
            Read more <ArrowRight size={24} color="#FFD233" />
          </Link>
          <Link
            href={`/blog/${slug}`}
            aria-label={`Read more about ${title}`}
            className="blog-learn-more-button"
          >
            Read more <ArrowRight size={24} color="#FFD233" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
