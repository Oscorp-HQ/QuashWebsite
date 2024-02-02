import Image from 'next/image';

const contentfulLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
}

const ContentfulImage = (props: any) => {
  const { alt, ...otherProps } = props; 

  return <Image loader={contentfulLoader} alt={alt || ''} {...otherProps} />;
}

export default ContentfulImage;
