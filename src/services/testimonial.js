import { baseUrl } from "../Constants";

class Testimonial {
  gettestimonials = async () => {
   return new Promise(async (resolve, reject) => {
      const response = await fetch(`${baseUrl}/get_testimonial`);
      // console.log('response service --->',response)
      if (response.ok) {
        const data = await response.json();
        // console.log('data--->',data)
        resolve(data);
      } else
        reject(`Server response ${response.status || response.statusText}`);
    });
  };
}

export default new Testimonial();
