const Service = require("node-windows").Service;
const path = require("path");

// Create a new service object
service = new Service({
  name: "P1ston Service",
  description: "New custom p1ston service.",
  script: path.join(__dirname, "script.js"),
  nodeOptions: ["--harmony", "--max_old_space_size=4096"],
  // env: {
  //   name: "HOME",
  //   value: process.env["USERPROFILE"], // service is now able to access the user who created its' home directory
  // },
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

module.exports = service;
