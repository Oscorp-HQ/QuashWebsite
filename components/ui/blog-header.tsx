import { motion } from "framer-motion";
import Avatar from "../contentful-ui/Avatar";
import ContentfulImage from "../contentful-ui/ContentfulImage";
import DateComponent from "../contentful-ui/DateComponent";

const BlogHeader = ({ post }: any) => {
  const { title, coverImage, author, dateAndTime, excerpt, readTime } =
    post.fields;

  return (
    <motion.div
    initial={{
      opacity: 0.0,
      x: -40,
    }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeInOut",
    }} className="slugContainer">
      <div className="blogHeaderContent">
        <div className="blogHeaderTopContent">
          <p>Published on <DateComponent dateString={dateAndTime} className="" /></p>
          <p className="lineSlug">|</p>
          <p>{readTime}</p>
        </div>
        <h1 className="">{title}</h1>
        <p><Avatar className="" name={author.fields.name} picture={author.fields.picture} /></p>
      </div>
      <div className="blogSummary">{excerpt}</div>
    </motion.div>
  );
};

export default BlogHeader;
