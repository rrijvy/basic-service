const wincmd = require("node-windows");
const Service = require("node-windows").Service;
const EventLogger = require("node-windows").EventLogger;
const fs = require("fs");
const path = require("path");
const service = require("./service");

console.log("filename:", __filename);
console.log("dirname:", __dirname);
console.log("script path:", path.join(__dirname, "script.js"));

const logger = new EventLogger();

console.log(service);

// Listen for the "install" event, which indicates the
// process is available as a service.
service.on("install", function () {
  service.start();
});

// Listen for the "uninstall" event so we know when it's done.
// service.on("uninstall", function () {
//   console.log("Uninstall complete.");
//   console.log("The service exists: ", service.exists);
// });

// Install the service.
// service.install();

// Uninstall the service.
// service.uninstall();

// This asynchronous command determines whether the current user has administrative privileges.
// It passes a boolean value to the callback, returning true if the user is an administrator or false if it is not.
wincmd.isAdminUser(function (isAdmin) {
  if (isAdmin) {
    console.log("The user has administrative privileges.");
  } else {
    console.log("NOT AN ADMIN");
  }
});

// The list method queries the operating system for a list of running processes.
// Supplying the optional true argument in the above example provides a list with verbose output.
// wincmd.list(function (service) {
//   const services = service.sort((a, b) => (a.ImageName > b.ImageName ? 1 : -1));
//   console.log(services.filter((x) => x.ImageName.includes("p1stonservice.")));
// }, true);

// This method will kill a process by PID.
// wincmd.kill(12345,function(){
//   console.log('Process Killed');
// });
