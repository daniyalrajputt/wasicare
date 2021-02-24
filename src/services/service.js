import { baseUrl } from "../Constants";
class Service {
  getServices = () => {
    new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_services`);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}
export default new Service();
