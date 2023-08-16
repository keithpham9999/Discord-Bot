const axios = require("axios");
const htmlparser = require("node-html-parser");

const State = {
    list: [],
    requests: []
  };
  
  const ProxySites = [
    "https://sslproxies.org/",
    "https://free-proxy-list.net/",
    "https://free-proxy-list.net/anonymous-proxy.html"
  ];
  
  