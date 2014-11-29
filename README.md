spa_password_vault
==================

My password vault in a javascript single page app

This is a re-write of my old password vault, borrowing only the css and the gibberish AES library.  In this re-write I'm using Handlebars for templating, and Finch for routing. The old version used Riak for the data store, but this one is using an interface class to seperate out the data store CRUD operations. In this version I'll be using Amazon S3 for the data store.
