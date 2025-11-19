const imagekit = require("imagekit");

const imagekitInstance = new imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadImage(file,fileName) {
    return await imagekitInstance.upload({
        file: file,
        fileName: fileName,
    });
}

module.exports = { uploadImage };