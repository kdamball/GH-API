GH-API
======

GitHub API to Query Public Users &amp; Repos Info. Provide a GitHub information (Username, organization, Repo or Events) you want data for
and receive JSON data back. Works with [GitHub's Restful API](https://api.github.com) 

**Example:**

```javascript
var githubUser = new GH({
	user: "JAshkenas",
	repo: "Backbone"
})

githubUser.getRepo(); //returns the BackboneJS repo information as an object

```

## Why should I use this?

* Automatically display your latest GitHub activity on your website
* No need to authenticate to use GitHub's API (at least when querying public info)
* Entirely front-end based 
* Made in vanilla JS, so no dependencies required
* Easy to build your own visualizations/tracking on it
