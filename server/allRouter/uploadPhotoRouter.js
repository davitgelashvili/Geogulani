// routes/upload.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: 'drqjr0n4r',
  api_key: '771335389864798',
  api_secret: '9EsAadXC-h9iQ7iN7iJ6CRpXLpY'
});

uploadRouter.post('/image', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path); // დროებითი ფაილის წაშლა
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = uploadRouter;
