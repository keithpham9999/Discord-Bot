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
  

  async function fetchBody(ProxySite) {
    let psRequest = await axios({
      url: ProxySite,
      headers: {
        "user-agent": "Mozilla"
      },
      method: "GET"
    }).catch(() => {
      throw new Error(`Error in '${ProxySite}' request.`);
    });
  
    let psBody = psRequest.data;
  
    State.requests.push({
      site: ProxySite,
      status: psRequest.status
    });
  
    return psBody;
  }
  
  function validateProxyHost(ProxyHost = String) {
    if (
      !ProxyHost.match("([0-9]+).([0-9]+).([0-9]+).([0-9]+)") ||
      ProxyHost.length <= 10
    ) {
      return false;
    }
    return true;
  }
  
 