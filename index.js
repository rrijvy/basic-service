const Service = require("node-windows").Service;
const EventLogger = require('node-windows').EventLogger;
const fs = require("fs");
const path = require("path");

console.log("filename:", __filename);
console.log("filename:", __dirname);

const logger = new EventLogger();

// Create a new service object
var svc = new Service({
  name: "Hello World",
  description: "The nodejs.org example web server.",
  script: path.join(__dirname, "script.js"),
  nodeOptions: ["--harmony", "--max_old_space_size=4096"],
  env: {
    name: "HOME",
    value: process.env["USERPROFILE"], // service is now able to access the user who created its' home directory
  },
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
});

// Listen for the "uninstall" event so we know when it's done.
svc.on("uninstall", function () {
  console.log("Uninstall complete.");
  console.log("The service exists: ", svc.exists);
});

// Install the service.
// svc.install();

// Uninstall the service.
// svc.uninstall();
