const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {
  cloudinaryStorage,
  CloudinaryStorage
} = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req) => {
    const model = req.baseUrl.split('/')[3] //le paso en que modelo estamos
    return {
      folder: `bravablue/${model}`,
      allowedFormats: ['jpg', 'png', 'jpeg', 'webp']
    }
  }
})
const upload = multer({ storage })

module.exports = { upload }
