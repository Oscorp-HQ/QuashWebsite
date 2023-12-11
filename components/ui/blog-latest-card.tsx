import Link from "next/link";
import Avatar from "../contentful-ui/Avatar";
import DateComponent from "../contentful-ui/DateComponent";
import ContentfulImage from "../contentful-ui/ContentfulImage";

const BlogLatestCard = ({ data }: any) => {
  console.log(data);
  const { title, slug, excerpt, coverImage, author, dateAndTime, readTime } =
    data?.fields;

  const maxLengthTitle = 85;
  const truncatedTitle =
    title.length > maxLengthTitle
      ? `${title.substring(0, maxLengthTitle)}...`
      : title;

  const maxLengthSummary = 168;
  const truncatedSummary =
    excerpt.length > maxLengthSummary
      ? `${excerpt.substring(0, maxLengthSummary)}...`
      : excerpt;

  return (
    <div className="latestPostContainer">
      <div className="latestPost">
        <div className="latestPostItems">
          <div className="latestPostImage">
            <ContentfulImage
              alt={`Cover Image for ${title}`}
              src={coverImage?.fields?.file?.url}
              width={498}
              height={380}
            />
          </div>
          <div className="latestPostFields">
            <h3 className="">{truncatedTitle}</h3>
            <p className="">{truncatedSummary}</p>
            <Link className="btnLatestPostMain" href={`/blog/${slug}`} aria-label={title}>
              <div className="btnLatestPost">
                  <h5>Read More</h5>
                </div>
            </Link>
          </div>
          <Link className="btnLatestPostLast" href={`/blog/${slug}`} aria-label={title}>
              <div className="">
                  <h5>Read More</h5>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLatestCard;
