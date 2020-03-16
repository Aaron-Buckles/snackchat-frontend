import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api"
});

async function getSignedRequest(file, uploadedCallback) {
  const response = await api.get(
    `/sign-s3?file-name=${file.name}&file-type=${file.type}`
  );

  if (response.status === 200) {
    await uploadFile(
      file,
      response.data.signedRequest,
      response.data.url,
      uploadedCallback
    );
  } else {
    console.log("Could not get signed request:\n", response);
  }
}

async function uploadFile(file, signedRequest, url, uploadedCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", signedRequest);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        uploadedCallback(url);
      } else {
        console.log("Could not upload file");
      }
    }
  };
  xhr.send(file);
}

const awsService = { getSignedRequest };

export default awsService;
