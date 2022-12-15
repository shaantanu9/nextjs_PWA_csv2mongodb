const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    // get the file extension
    console.log(file.originalname, "file.originalname");
    const [fileOriginalName, fileExtension] = file.originalname.split(".");
    // create a new filename
    const fileName = `${fileOriginalName}-${Date.now()}.${fileExtension}`;
    // call the callback and return the file name
    cb(null, fileName);
    // set the file name to the request body
    // req.body.file = fileName;
  },
});

const upload = multer({ storage });

module.exports = upload;
