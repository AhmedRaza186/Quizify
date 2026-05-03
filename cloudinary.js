

const url = 'https://api.cloudinary.com/v1_1/dddcijrz6/image/upload';
export async function uploadImg(formData){
    let response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    response = await response.json()
    return response.secure_url
}




