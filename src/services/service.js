import { baseUrl } from "../Constants";
class Service {
  getServices = () => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_services`);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };


  submitForm = (values) => {
    return new Promise(async (resolve, reject) => {
      const myHeaders = new Headers();
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(values),
        redirect: "follow",
      };

      const response = await fetch(
        `${baseUrl}/save_appointment`,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };


  contactForm = (values) => {
    return new Promise(async (resolve, reject) => {
      const myHeaders = new Headers();
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(values),
        redirect: "follow",
      };

      const response = await fetch(
        `${baseUrl}/save_contact`,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}
export default new Service();
