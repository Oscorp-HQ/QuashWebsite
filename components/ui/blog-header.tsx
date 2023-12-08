import Avatar from "../contentful-ui/Avatar";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import DateComponent from "../contentful-ui/DateComponent";

const BlogHeader = ({ post }: any) => {
  const { title, coverImage, author, dateAndTime, excerpt, readTime } =
    post.fields;

  return (
    <>
      <div className="blogHeaderContent">
        <div className="blogHeaderTopContent">
          <p>Published on <DateComponent dateString={dateAndTime} className="" /></p>
          <p>|</p>
          <p>{readTime}</p>
        </div>
        <h1 className="">{title}</h1>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
      </div>
      <div className="blogSummary">{excerpt}</div>
      <div className="blogImageContainer ">
        <ContentfulImage
          className="blogImageMain "
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
    </>
  );
};

export default BlogHeader;
