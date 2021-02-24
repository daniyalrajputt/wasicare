import { baseUrl } from "../Constants";
class Doctors {
  getDoctors = () => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_doctors`);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}
export default new Doctors();
