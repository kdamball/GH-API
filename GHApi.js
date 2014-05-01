/*
 - Breakthrough
 - Now we only need to process the data received!
*/

var GH = (function(details){
  var user, repo, org,
    connectToAPI, successHandler;
  
  successHandler = function(data){
    return data ? console.log(JSON.parse(data)) : console.log("Something went wrong...call the GhostBusters");
  };
  
  connectToAPI = function(req){
    var xhrToGH = new XMLHttpRequest();
    xhrToGH.open("get", req, false);
    xhrToGH.send();
    xhrToGH.onload = successHandler(xhrToGH.response);
  };
  
  user = function(){
    var url = "https://api.github.com/users/" + details.user;
    details.user ? connectToAPI(url) : console.log("Error, you need to provide a Github Username");
  };
  
  repo = function(){
    var url = "https://api.github.com/repos/" + [details.user, details.repo].join("/");
    details.repo ? connectToAPI(url) : console.log("Error, please provide a repo name!");
  }; 
  
  org = function(){
    console.log("Sorry, Organization info isn't available yet. I'm working on it!");
  };
  
  return {
    getUser: user,
    getRepo: repo,
    getOrganization: org
  };
});