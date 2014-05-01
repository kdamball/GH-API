GH-API
======

GitHub API to Query Users &amp; Repos Info

**Example:**

```
var githubUser = new GH({
	user: "JAshkenas",
	repo: "BackboneJS"
})

githubUser.getRepo(); //returns the BackboneJS repo information as an object

```