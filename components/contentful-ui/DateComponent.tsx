import { formatDate } from '@/lib/contentful/date'

const DateComponent = ({ dateString, options, ...rest }:any) => {
  return (
    <time dateTime={dateString} {...rest}>
      {formatDate(dateString, options)}
    </time>
  )
}

export default DateComponent