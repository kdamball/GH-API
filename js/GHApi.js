/*
  Author: Kado Damball
  URL: https://github.com/kdamball/GH-API
  Licence: MIT
*/

var GH = (function(details){
  var user, repo, org, events,
    connectToAPI, successHandler;
  
  successHandler = function(success){
    return JSON.parse(success());
  };
  
  connectToAPI = function(req){
    var xhrToGH = new XMLHttpRequest();
    xhrToGH.open("get", req, false);
    xhrToGH.send();
    return xhrToGH.onload = function(){return xhrToGH.response};
  };
  
  user = function(){
    var url = "https://api.github.com/users/" + details.user;
    return details.user ? successHandler(connectToAPI(url)) : console.log("Error, you need to provide a Github Username");
  };
  
  repo = function(){
    var url = "https://api.github.com/repos/" + [details.user, details.repo].join("/");
    return details.repo && details.user ? successHandler(connectToAPI(url)) : console.log("Error, please provide a repo & username!");
  };
  
  events = function(){
    var url = "https://api.github.com/users/" + [details.user, "events"].join("/");
    return details.events && details.user ? successHandler(connectToAPI(url)) : console.log("Error, please provide username and/or confirm events!");
  };
  
  org = function(){
    var url = "https://api.github.com/orgs/" + details.organization;
    return details.organization ? successHandler(connectToAPI(url)) : console.log("Error, please provide an organization name");
  };
  
  return {
    getUser: user,
    getOrganization: org,
    getRepo: repo,
    getEvents: events
  };
});