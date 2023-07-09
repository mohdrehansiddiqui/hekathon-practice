import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"; 
  // const { initializeApp } = require("firebase/app");
  // import { getFirestore, collection, addDoc, getDocs, setDoc, doc, query, where} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-getFirestore.js";
  import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
  // import { getFirestore } from "firebase/firestore";
  // const {getFirestore} = require('firebase/firestore');
  
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  // const db2 = firebase.getFirestore(app)

let savePost = document.getElementById('savePostBtn')
let postImage = document.getElementById('postImage')
let imageAlt = document.getElementById('imageAlt')
let postTitle = document.getElementById('postTitle')
let descriptionPost = document.getElementById('descriptionPost')


savePost.addEventListener('click', async()=>{

  var ref = collection(db, "StudentsList");

  await addDoc(ref, {
    postTitle: postTitle.value,
    descriptionPost: descriptionPost.value,
    postImage: postImage.value,
    imageAlt: imageAlt.value,
  })
    .then(() => {
      alert("data added succesfully");
    })
    .catch((error) => {
      alert("Error in saving data");
      console.log(error);
    });
})
  
// let postImage = document.getElementById('postImage').value


//   postImage.addEventListener('click',()=>{
//     getDownloadURL(ref(storage, 'images/stars.jpg'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
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
// uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// });

// const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
// uploadBytes(storageRef, bytes).then((snapshot) => {
//   console.log('Uploaded an array!');
// });

// const message = 'This is my message.';
// uploadString(storageRef, message).then((snapshot) => {
//   console.log('Uploaded a raw string!');
// });

// const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// uploadString(storageRef, message2, 'base64').then((snapshot) => {
//   console.log('Uploaded a base64 string!');
// });

// const message3 = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// uploadString(storageRef, message3, 'base64url').then((snapshot) => {
//   console.log('Uploaded a base64url string!');
// });

// const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// uploadString(storageRef, message4, 'data_url').then((snapshot) => {
//   console.log('Uploaded a data_url string!');
// });
// uploadBytes()
// uploadString()