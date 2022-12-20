const express = require('express');
const router = express.Router();
const multer = require('multer')
const StreamZip = require('node-stream-zip');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

let upload = multer({ storage: storage }).single('file')

router.post('/',(req, res) => {

        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }

            console.log(req.file.path);

            const zip = new StreamZip({
                file: req.file.path,
                storeEntries: true
            });

            let zipDotTxtContents = "";

            zip.on('ready', () => {
                // Take a look at the files
                console.log('Entries read: ' + zip.entriesCount);
                for (const entry of Object.values(zip.entries())) {
                    const desc = entry.isDirectory ? 'directory' : `${entry.size} bytes`;
                    console.log(`Entry ${entry.name}: ${desc}`);
                }

                // Read a file in memory
                zipDotTxtContents = zip.entryDataSync('Microsoft.Flow/flows/d58f5d5c-3720-4d48-a085-72fb1f403136/definition.json').toString('utf8');
                //console.log("The content of Microsoft.Flow/flows/d58f5d5c-3720-4d48-a085-72fb1f403136/definition.json is: " + zipDotTxtContents);
                // Do not forget to close the file once you're done
                zip.close();
            });



            return res.status(200).send(zipDotTxtContents);

        });
    });





module.exports = router;