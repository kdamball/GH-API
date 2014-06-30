/*
  Author: Kado Damball
  URL: https://github.com/kdamball/GH-API
  Licence: MIT
*/

var GH = (function(details){
  var user, repo, org, events,
    connectToAPI, successHandler, errorHandler;
  
  successHandler = function(success){
    return JSON.parse(success);
  };
  
  errorHandler = function(id, extra){
    throw new Error("Please provide either the user or repo's name (dont forget to confirm events)");
  }
  
  connectToAPI = function(req){
    var xhrToGH = new XMLHttpRequest();
    xhrToGH.open("get", req, false);
    xhrToGH.send();
    return xhrToGH.onload = (function(){
      return xhrToGH.response
    }());
  };
  
  user = function(){
    var url = "https://api.github.com/users/" + details.user;
    return details.user ? successHandler(connectToAPI(url)) : errorHandler(0);
  };
  
  org = function(){
    var url = "https://api.github.com/orgs/" + details.organization;
    return details.organization ? successHandler(connectToAPI(url)) : errorHandler(1);
  };
  
  repo = function(){
    var url = "https://api.github.com/repos/" + [details.user || details.organization, details.repo].join("/");
    return details.repo && (details.user || details.organization) ? successHandler(connectToAPI(url)) : errorHandler(0, 2);
  };
  
  events = function(){
    var url = "https://api.github.com/users/" + [details.user || details.organization, "events"].join("/");
    return details.events && (details.user || details.organization) ? successHandler(connectToAPI(url)) : errorHandler(0, 3);
  };
  
  
  return {
    getUser: user,
    getOrganization: org,
    getRepo: repo,
    getEvents: events
  };
});