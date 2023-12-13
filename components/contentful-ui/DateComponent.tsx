const DateComponent = ({ dateString, ...rest }: any) => {

  const date = new Date(dateString);
  const monthAbbreviation = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${monthAbbreviation} ${day}, ${year}`;

  return (
    <time dateTime={dateString} {...rest}>
      {formattedDate}
    </time>
  );
};

export default DateComponent;
