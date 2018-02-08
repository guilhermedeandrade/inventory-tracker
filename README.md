# Inventory Tracker

This is an inventory tracker application built with Rails. I was requested to build an application where the user would be able to create categories and store some items using them. One category may have multiple items related to it, an item, however, must belong to a single category. The database was not specified and I decided to use PostgreSQL.

To build the application I will use some gems that were requested:

* Paranoid: to delete and object without actually deleting it from the db
* Devise: login/authentication system
* Paperclip: to upload a product image
* Bower: to implement AngularJS
