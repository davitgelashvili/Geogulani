// routes/upload.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: 'dox8wltod',
  api_key: '647329218327454',
  api_secret: 'xvIrfdul5u_n8cRaiK6Fz8rZnqk'
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
