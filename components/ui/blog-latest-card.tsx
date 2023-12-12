import Link from "next/link";
import Avatar from "../contentful-ui/Avatar";
import DateComponent from "../contentful-ui/DateComponent";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import { ArrowRight } from "lucide-react";

const BlogLatestCard = ({ data }: any) => {
  console.log(data);
  const { title, slug, excerpt, coverImage, author, dateAndTime, readTime } =
    data?.fields;


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
            <h3 className="titleTop2">{title}</h3>
            <p className="truncSummary2">{excerpt}</p>
            <Link className="btnLatestPostMain" href={`/blog/${slug}`} aria-label={title}>
              <div className="btnLatestPost">
                  <h5>Read More</h5>
                  {/* <ArrowRight size={32} /> */}
                </div>
            </Link>
          </div>
          <Link className="btnLatestPostLast" href={`/blog/${slug}`} aria-label={title}>
              <div className="btnLatestPostLastSecond">
                  <h5>Read More</h5>
                  {/* <ArrowRight size={32} /> */}
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLatestCard;
