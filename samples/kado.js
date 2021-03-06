//this first part deals with the auto update of the Recent Activity Feed
(function(){
  var kado = new GH({user:"kdamball", events:true}),
  kadoEvents = kado.getEvents(),
  eventsType = {
    "PushEvent": "Pushed to",
    "DeleteEvent": "Deleted something from",
    "WatchEvent": "Starred",
    "IssueCommentEvent": "Commented on",
    "ForkEvent": "Forked",
    "CreateEvent": "Created",
    "PullRequestEvent": "Pull Request on",
    "PullRequestReviewCommentEvent": "Commented on a pull request to",
    "FollowEvent": "Followed",
    "GollumEvent": "Wiki Edits for",
    "IssuesEvent": "Raised an issue on",
    "MemberEvent": "Joined"
  },
  parseTime = function(t){
    var t = t.split("T")[0].split("-").map(function(e){return Number(e)}),
      then = new Date(t[0],t[1]-1,t[2]),
      timeDiff = Math.floor((Date.now()-then.getTime())/86400000);
    return timeDiff ? timeDiff + " day(s) ago" : "Today" ;
  };

  var ghAPI = $(".gh-api li");

  ghAPI.each(function(index){
    $(this).html(
      eventsType[kadoEvents[index].type]+
      " <a href='"+ 
      kadoEvents[index].repo.url.replace(/api\./,'').replace(/repos\//,'')+
      "'>"+ kadoEvents[index].repo.name+"</a> Repo ["+
      parseTime(kadoEvents[index].created_at)+"]"
    );
  });
})();
