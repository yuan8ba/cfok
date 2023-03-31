export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    var reg = RegExp(/qq/);
    
    if (url.pathname.startsWith('/')) {
      url.hostname = 'usce9b.eu-ffaqrvbjixds.dopraxrocks.net'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
