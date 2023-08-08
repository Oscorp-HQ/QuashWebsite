import Api from "./api-config";

const BASE_URL = "https://quash-v1.el.r.appspot.com";

export const PostContact = (data: any) => {
  return Api()
    .post(`${BASE_URL}/api/contacts`, data)
    .then((result: any) => {
      return result.data;
    });
};
