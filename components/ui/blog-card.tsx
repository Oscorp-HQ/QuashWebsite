import Link from "next/link";
import Avatar from "../contentful-ui/Avatar";
import DateComponent from "../contentful-ui/DateComponent";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import Name from "../contentful-ui/Name";

const BlogCard = ({ data }: any) => {
  console.log(data);
  const { title, slug, excerpt, coverImage, author, dateAndTime, readTime } =
    data?.fields;


  return (
    <>
      <li className="allPosts">
        <Link href={`/blog/${slug}`} aria-label={title}>
          <div className="postItems">
            <div className="postItemFields">
              <h3 className="titleTop">{title}</h3>
              <p className="truncSummary">{excerpt}</p>
              <div className="postItemFieldsDown">
               <p className="postItemFieldsDownAuthor"><Name name={author.fields.name} /></p>
                <p className="line">|</p>
                <p><DateComponent dateString={dateAndTime} /></p>
                <p className="line">|</p>
                <p className="aa">{readTime}</p>
              </div>
              <h3 className="titleDown">{title}</h3>
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

          <div className="postItemFieldsDownSmallScreen">
            <p className="downSummary">{excerpt}</p>
            <div className="postItemDownSmallScreen">
               <b><Name name={author.fields.name} /></b>
                <p className="line">|</p>
                <DateComponent dateString={dateAndTime} />
                <p className="line">|</p>
                <p className="">{readTime}</p>
              </div>
              <hr />
          </div>
        </Link>
      </li>
    </>
  );
};

export default BlogCard;

