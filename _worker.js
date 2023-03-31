export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    var reg = RegExp(/qq/);
    if(reg.exec(request.url)){
      url.hostname = 'usqm6z.eu-eejfutefcmzq.dopraxrocks.com'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    if (url.pathname.startsWith('/')) {
      url.hostname = 'usqm6z.eu-eejfutefcmzq.dopraxrocks.com'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
