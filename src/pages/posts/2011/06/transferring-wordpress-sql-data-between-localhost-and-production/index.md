---
title: "Transferring WordPress sql data between localhost and production"
date: "2011-06-02"
categories: ["Development"]
tags: []
---

There are quite a few blog posts around that provide helpful tips on transferring the sql data (all the posts and category content in the wordpress database) between your local development environment and production (live) site. This is something that needs to be done when making significant changes to the site design - especially when you need to see how real content will work with the new design.

I followed the tips, which basically are:

*   Use phpmyadmin or some other means of database access to export your database structure and content form the production site
*   Save as a text file
*   Find and replace all instances of your production url (http://mydomain.com) and replace with your localhost url. I use MAMP Pro so mine is http://localhost:8888/
*   Use a similar database access method to import the changed text file into your local database.

Then you just have to do the non-data releated:

*   FTP all the other files in wp\_content from production to local
*   Change the local wp-config.php fileto point to your local db.

This didn't work for me but I discovered the reason why. The bit that I have to add to this is to:

*   Also do a find and replace for any server path strings in the sql text file and replace with the local equivalent.

My server path on production was /hsphere/local/home/<username>/<sitename> which I had to replace with /Users/steve/Sites/<sitename>/.

So just one more little step.
