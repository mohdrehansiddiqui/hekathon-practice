import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js"; 
import { getDatabase  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAgi2ZN1VSMNXIAvVzkWNt0rTeXgaqsq1U",
    authDomain: "hekathon-practice.firebaseapp.com",
    databaseURL: "https://hekathon-practice-default-rtdb.firebaseio.com",
    projectId: "hekathon-practice",
    storageBucket: "hekathon-practice.appspot.com",
    messagingSenderId: "280785919765",
    appId: "1:280785919765:web:11d190b7bd2c307d60531c",
    measurementId: "G-XNJC5HD9T8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const firebaseApp = getApp(app);
  const storage = getStorage(firebaseApp, "gs://my-custom-bucket");
  const storageRef = ref(storage, 'some-child');
  const imagesRef = ref(storage, 'images');
  const sparkyRef = ref(storage, 'images/sparky.jpg')
  const mountainsRef = ref(storage, 'mountains.jpg');
  const mountainImagesRef = ref(storage, 'images/mountains.jpg');
  mountainsRef.name === mountainImagesRef.name;           // true
  mountainsRef.fullPath === mountainImagesRef.fullPath;   // false

  let postImage = document.getElementById('postImage').value


//   postImage.addEventListener('click',()=>{
//     getDownloadURL(ref(storage, 'images/stars.jpg'))
//   .then((url) => {

//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     // Or inserted into an <img> element
//     const img = document.getElementById('myimg');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });
//   })

let savePost = document.getElementById('savePostBtn')

savePost.addEventListener('change',()=>{
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  
  const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
  uploadBytes(storageRef, bytes).then((snapshot) => {
    console.log('Uploaded an array!');
  });
  
  const message = 'This is my message.';
  uploadString(storageRef, message).then((snapshot) => {
    console.log('Uploaded a raw string!');
  });
  
  const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storageRef, message2, 'base64').then((snapshot) => {
    console.log('Uploaded a base64 string!');
  });
  
  const message3 = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storageRef, message3, 'base64url').then((snapshot) => {
    console.log('Uploaded a base64url string!');
  });
  
  const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storageRef, message4, 'data_url').then((snapshot) => {
    console.log('Uploaded a data_url string!');
  });
  
  // Create file metadata including the content type
  /** @type {any} */
  const metadata = {
      contentType: 'image/jpeg',
    };
    
  // Upload the file and metadata
  const uploadTask = uploadBytes(storageRef, file, metadata);
  
  uploadTask.pause();
  
  uploadTask.resume();
  
  uploadTask.cancel();
  
  uploadBytes()
  uploadString()
})
