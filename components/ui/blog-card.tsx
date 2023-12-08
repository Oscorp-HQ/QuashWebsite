import Link from "next/link";
import Avatar from "../contentful-ui/Avatar";
import DateComponent from "../contentful-ui/DateComponent";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import Name from "../contentful-ui/Name";

const BlogCard = ({ data }: any) => {
  console.log(data);
  const { title, slug, excerpt, coverImage, author, dateAndTime, readTime } =
    data?.fields;

    const maxLengthTitle = 105;
    const truncatedTitle =
      title.length > maxLengthTitle ? `${title.substring(0, maxLengthTitle)}...` : title;

      const maxLengthSummary = 168;
      const truncatedSummary =
      excerpt.length > maxLengthSummary ? `${excerpt.substring(0, maxLengthSummary)}...` : excerpt;

  return (
    <>
      <li className="allPosts">
        <Link href={`/blog/${slug}`} aria-label={title}>
          <div className="postItems">
            <div className="postItemFields">
              <h3 className="">{truncatedTitle}</h3>
              <p className="">{truncatedSummary}</p>
              <div className="postItemFieldsDown">
               <Name name={author.fields.name} />
                <p className="line">|</p>
                <DateComponent dateString={dateAndTime} />
                <p className="line">|</p>
                <p className="">{readTime}</p>
              </div>
            </div>
            <div className="postItemImage">
              <ContentfulImage
                alt={`Cover Image for ${title}`}
                src={coverImage?.fields?.file?.url}
                width={200}
                height={150}
              />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default BlogCard;

