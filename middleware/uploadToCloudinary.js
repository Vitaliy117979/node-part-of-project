const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadFileToCloudinary = async (fileData, options) => {
  try {
    const result = await cloudinary.uploader.upload(fileData, options);
    console.log("File uploaded to Cloudinary:", result);
    return result;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};

const uploadFile = async (fieldname, originalname) => {
  let folder;
  if (fieldname === "avatarURL") {
    folder = "avatars";
  } else if (fieldname === "preview") {
    folder = "preview";
  } else {
    folder = "misc";
  }
  const tempDir = path.join(__dirname, "../", "tmp");

  const filePath = path.join(tempDir, originalname);

  const options = {
    folder: folder,
    allowed_formats: ["jpg", "png"],
    chunk_size: 6000000,
    public_id: originalname,
    transformation: [
      { width: 350, height: 350 },
      { width: 700, height: 700 },
    ],
  };

  const result = await uploadFileToCloudinary(filePath, options);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
    }
  });
  return result;
};

module.exports = uploadFile;
