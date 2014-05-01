/*
  Here's the problem. I can make this work fine. However:
  I need to find a way to ensure that when getUser() is called, only then can it fire
  the ajax request. However, this means it will take time to return the result.
  Currently it either fires both requests (ie getUser & getRepo) or it tries to parse the response before ajax
  has received anything. I'm trying to find an optimal point where only the specific 
  ajax request is fired AND we parse the response at the right time.
  
  ALSO, I can easily solve this using jQuery but we dont need anymore jQUERY!!!
*/

var GH = (function(details){
  var user, repo, org,
    connectToAPI;
  
  connectToAPI = function(req){
    var xhrToGH = new XMLHttpRequest();
    xhrToGH.open("get", req, "open");
    xhrToGH.send();
    return xhrToGH;
  };
  
  user = function(){
    var url = "https://api.github.com/users/" + details.user;
    return details.user ? connectToAPI(url) : console.log("Error, you need to provide a Github Username");
  };
  
  repo = function(){
    var url = "https://api.github.com/repos/" + [details.user, details.repo].join("/");
    return details.repo ? connectToAPI(url) : console.log("Error, please provide a repo name!");
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