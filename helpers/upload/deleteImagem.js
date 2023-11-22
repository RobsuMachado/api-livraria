const { initializeApp } = require('firebase/app');
const { getStorage, ref, deleteObject } = require('firebase/storage');

/* DADOS DE ACESSO AO FIREBASE */
const firebaseConfig = {
    apiKey: "AIzaSyBHotGLe750EyTZGU43py2wZzKrqzvNA08",
    authDomain: "upload-nodejs-76cf6.firebaseapp.com",
    projectId: "upload-nodejs-76cf6",
    storageBucket: "upload-nodejs-76cf6.appspot.com",
    messagingSenderId: "814828247917",
    appId: "1:814828247917:web:3bb33ec127fb7715c11864",
    measurementId: "G-8PTPJWSWL1"
};

/* INICIALIZAÇÃO DO FIREBASE */
const firebaseApp = initializeApp(firebaseConfig);

/* INICIALIZAÇÃO DO STORAGE DO FIREBASE */
const storage = getStorage(firebaseApp);

const deleteImage = (imagem) => {

    const deleteRef = ref(storage, imagem);

    deleteObject(deleteRef)
        .then(() => {
            console.log('IMAGEM EXCLUÍDA COM SUCESSO!');
        })
        .catch((error) => {
            console.log('ERRO AO EXCLUIR IMAGEM!');
        });
}

module.exports = deleteImage;