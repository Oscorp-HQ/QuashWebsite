import Link from "next/link";
import Avatar from "../contentful-ui/Avatar";
import DateComponent from "../contentful-ui/DateComponent";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import Name from "../contentful-ui/Name";

const BlogCard = ({ data }: any) => {
  const { title, slug, excerpt, coverImage, author, dateAndTime, readTime } =
    data?.fields;

  return (
    <Link href={`/blog/${slug}`} aria-label={title} className="blog-card">
      {/* <div className="postItems"> */}
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
          {/* <div className="blog-card-meta-info-divider" /> */}

          <p className="postItemFieldsDownDate border-l border-[#BDBDBD] pl-4">
            <DateComponent dateString={dateAndTime} />
          </p>
          {/* <div className="blog-card-meta-info-divider" /> */}
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
    </Link>
  );
};

export default BlogCard;
