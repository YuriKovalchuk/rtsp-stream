Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "rtsp://192.168.1.13:554/Streaming/Channels/1",
  wsPort: 9909
});

/* const onvif = require("node-onvif");

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: "http://192.168.1.11:80/onvif/device_service",
  user: "admin",
  pass: "admin"
});

// Initialize the OnvifDevice object
device
  .init()
  .then(() => {
    // Get the UDP stream URL
    let url = device.getUdpStreamUrl();
    console.log(url);
  })
  .catch(error => {
    console.error(error);
  }); */

/* const onvif = require("node-onvif");

console.log("Start the discovery process.");
// Find the ONVIF network cameras.
// It will take about 3 seconds.
onvif
  .startProbe()
  .then(device_info_list => {
    console.log(device_info_list.length + " devices were found.");
    // Show the device name and the URL of the end point.
    device_info_list.forEach(info => {
      console.log("- " + info.urn);
      console.log("  - " + info.name);
      console.log("  - " + info.xaddrs[0]);
    });
  })
  .catch(error => {
    console.error(error);
  }); */
