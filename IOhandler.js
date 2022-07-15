/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */

const unzipper = require('unzipper')
const fs = require("fs").promises
const { createReadStream, createWriteStream } = require("fs");
const { resolve } = require('path');
PNG = require('pngjs').PNG,
path = require('path');


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  fs.createReadStream(pathIn)
  .pipe(unzipper.Extract(pathOut))
  .promise()
  .then(function() {
      console.log('Extraction operation complete!');
    })
  .catch(function() {
    console.log('Failed to create directory.');
  })
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {
  return new promise((resolve, reject) => {
    pngFiles = []
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err)
      } else {
        files.forEach(file => {
          if (path.extname(file) == ".png") {
            pngFiles.push(file)
          }
        })
        resolve(pngFiles)
      }
    })
  })

};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {

};

module.exports = {
  unzip,
  readDir,
  grayScale
};