import _ from "lodash";

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
