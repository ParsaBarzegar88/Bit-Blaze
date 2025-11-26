import { format, parseISO } from 'date-fns-jalali';

export const formatToPersianDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'd MMMM - yyyy / HH:mm');
  } catch{
    return dateString;
  }
};