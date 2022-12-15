const Leads = require("../models/leads.Model");
// const multer = require("multer"); // require to upload files and save them to the server
const fs = require("fs"); // require to read files from the server
const csv = require("fast-csv"); // require to read csv files

const path = require("path"); // require to get the file extension
const crud = require("./crud.Controller");

const { get, getById, patch, post, deleteOne } = crud(Leads);

const createLeads = async (req, res) => {
  console.log("Started uploading file");
  const leadsDataArray = [];
  try {
    console.log(req.file);
    fs.createReadStream(req.file.path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        console.log(error);
        // throw error in response
        res.status(400).send({ error: "Error while parsing csv file" });
      })
      .on("data", (row) => {
        // console.log(row);
        leadsDataArray.push(row);
      })
      .on("end", async (rowCount) => {
        console.log(`Parsed ${rowCount} rows`);

        try {
          const leadsData = await Leads.insertMany(leadsDataArray);
          res.json({
            message: "File uploaded",
            fileDe: req.file,
            file: filePath,
          });
        } catch (error) {
          res.json(error);
        }
      });
  } catch (error) {
    res.send(error);
  }
};

const getAllLeads = async (req, res) => get(req, res);

module.exports = {
  createLeads,
  getAllLeads,
};
