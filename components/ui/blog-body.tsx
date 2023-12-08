import ContentfulImage from "../contentful-ui/ContentfulImage";
import RichText2 from "./RichText2";
import RichText1 from "./richText1";
import RichText3 from "./richText3";
import RichText4 from "./richText4";
import RichText5 from "./richText5";
import RichText from "./richtext";

const BlogBody = ({ post }: any) => {
  const {
    title,
    content,
    subHeading,
    subHeadingContent,
    subHeadingImage,
    subHeading2,
    subHeading2Content,
    subHeading2Image,
    subHeading3,
    subHeading3Content,
    subHeading3Image,
    subHeading4,
    subHeading4Content,
    subHeading4Image,
    subHeading5,
    subHeading5Content,
    subHeading5Image,
  } = post.fields;

  return (
    <>
      <div className="blogBodyContent">
        <RichText content={content} />
      </div>

      {subHeading ? (
        <div className="blogBodysubContent">
          <h3>{subHeading}</h3>
          <p>
            <RichText1 subHeadingContent={subHeadingContent} />{" "}
          </p>
          {subHeadingImage?.fields?.file?.url && (
            <div>
              <ContentfulImage
                className="blogImageMain"
                alt={`Cover Image for ${title}`}
                src={subHeadingImage.fields.file.url}
                width={subHeadingImage.fields.file.details.image.width}
                height={subHeadingImage.fields.file.details.image.height}
              />
            </div>
          )}
        </div>
      ) : null}

      {subHeading2 ? (
        <div className="blogBodysubContent">
          <h3>{subHeading2}</h3>
          <p>
            <RichText2 subHeading2Content={subHeading2Content} />
          </p>
          {subHeading2Image?.fields?.file?.url && (
            <div>
              <ContentfulImage
                className="blogImageMain"
                alt={`Cover Image for ${title}`}
                src={subHeading2Image.fields.file.url}
                width={subHeading2Image.fields.file.details.image.width}
                height={subHeading2Image.fields.file.details.image.height}
              />
            </div>
          )}
        </div>
      ) : null}

      {subHeading3 ? (
        <div className="blogBodysubContent">
          <h3>{subHeading3}</h3>
          <p>
            <RichText3 subHeading3Content={subHeading3Content} />
          </p>
          {subHeading3Image?.fields?.file?.url && (
            <div>
              <ContentfulImage
                className="blogImageMain"
                alt={`Cover Image for ${title}`}
                src={subHeading3Image?.fields?.file.url}
                width={subHeading3Image?.fields?.file?.details?.image.width}
                height={subHeading3Image?.fields?.file?.details?.image.height}
              />
            </div>
          )}
        </div>
      ) : null}

      {subHeading4 ? (
        <div className="blogBodysubContent">
          <h3>{subHeading4}</h3>
          <p>
            <RichText4 subHeading4Content={subHeading4Content} />
          </p>
          <div>
            <ContentfulImage
              className="blogImageMain "
              alt={`Cover Image for ${title}`}
              src={subHeading4Image?.fields?.file.url}
              width={subHeading4Image?.fields?.file?.details?.image.width}
              height={subHeading4Image?.fields?.file?.details?.image.height}
            />
          </div>
        </div>
      ) : null}

      {subHeading5 ? (
        <div className="blogBodysubContent">
          <h3>{subHeading5}</h3>
          <p>
            <RichText5 subHeading5Content={subHeading5Content} />
          </p>
          <div>
            <ContentfulImage
              className="blogImageMain "
              alt={`Cover Image for ${title}`}
              src={subHeading5Image?.fields?.file.url}
              width={subHeading5Image?.fields?.file?.details?.image.width}
              height={subHeading5Image?.fields?.file?.details?.image.height}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlogBody;
