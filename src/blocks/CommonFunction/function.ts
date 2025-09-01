import _ from "lodash";
import moment from "moment/moment";

export const matchDataCondition = (source?: string, data?: any) => {
  if (!source) return "";
  let formatData = source;
  formatData?.match(/\${(.*?)(?=})}/g)?.map((str: string) => {
    const key = str.slice(2, str.length - 1);
    const value = _.get(data, key, "");
    formatData = formatData.replace(str, value);
    return formatData;
  });
  return formatData;
};

export const diffTime = (dateTime:string) => {
  const expiredAt = moment(dateTime, "YYYY-MM-DD HH:mm:ss");
  const now = moment();

  const minutesDiff = expiredAt.diff(now, 'minutes');

  if (minutesDiff < 0) {
    return 0
  } else {
    return minutesDiff
  }
}
