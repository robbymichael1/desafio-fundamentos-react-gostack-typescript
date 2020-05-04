import { format, parseISO } from 'date-fns';

const formatDate = (date: Date): string => {
  const dateString = date.toString();
  return format(parseISO(dateString), 'dd/MM/yyyy');
};
export default formatDate;
