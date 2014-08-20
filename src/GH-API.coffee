@GH = (details)->
  baseUrl = "https://api.github.com/"

  successHandler = (success)->
    JSON.parse success
  
  errorHandler = ()->
    throw new Error "Please provide either the user, repo's name and/or confirm events"
  
  connectToAPI = (req)->
    xhrToGH = new XMLHttpRequest()
    xhrToGH.open "get", req, false
    xhrToGH.send()
    xhrToGH.onload = do ()->
      xhrToGH.response
      
  user = ->
    url = baseUrl + details.user
    if details.user then successHandler(connectToAPI url) else errorHandler
  
  org = ->
    url = baseUrl + "orgs/" + details.organization
    if details.organization then successHandler(connectToAPI url) else errorHandler
    
  repo = ->
    url = baseUrl + "repos/" + [details.user or details.organization, details.repo].join("/")
    if details.repo and (details.user or details.orgranization) then successHandler(connectToAPI url) else errorHandler
    
  events = ->
    url = baseUrl + "users/"
    url += [details.user or details.organization, "events"].join("/")
    if details.events and details.organization or details.user then successHandler(connectToAPI url) else errorHandler
    
  getUser: user, 
  getOrganization: org, 
  getRepo: repo, 
  getEvents: events