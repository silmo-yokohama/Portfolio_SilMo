import { format } from "date-fns";

export const dateTimeFormat = (date, _format = "yyyy/MM/dd HH:mm:ss") => {
  return format(new Date(date), _format);
};
