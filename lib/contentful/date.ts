export function formatDate(dateString: any, options: any) {
    try {
      const { format } = new Intl.DateTimeFormat('en-US', options);
      const formattedDate = format(new Date(dateString));
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  }