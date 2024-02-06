import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp/')  //the folder where the file will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //the name the file will have
    }
})

export const upload = multer({
    storage, //the storage object
})