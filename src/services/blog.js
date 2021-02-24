import { baseUrl } from "../Constants";
class Blog {
  getBlog = () => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_blog`);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}
export default new Blog();
