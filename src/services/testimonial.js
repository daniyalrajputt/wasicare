import { baseUrl } from "../Constants";

class Testimonial {
  gettestimonials = async () => {
    new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_testimonial`);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}

export default new Testimonial();
