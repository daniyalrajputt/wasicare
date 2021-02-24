import { baseUrl } from "../Constants";
class Departments {
  getDepartments = () => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_departments`);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}
export default new Departments();
