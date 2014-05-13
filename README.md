GH-API
======

GitHub API to Query Users &amp; Repos Info

**Example:**

```
var githubUser = new GH({
	user: "JAshkenas",
	repo: "Backbone"
})

githubUser.getRepo(); //returns the BackboneJS repo information as an object

```

## Why should I use this?

* Automatically display your latest GitHub activity on your website
* No need to authenticate to use GitHub's API
* Entirely front-end based 
* Made in vanilla JS, so no dependencies required
* Easy to build your own visualizations/tracking on it