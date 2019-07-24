---
title: "SEO friendly Flash templates"
date: 2009-08-15T10:54:50+02:00
categories: ["Development"]
tags: []
---

This weekend I have updated my [existing FlashDen template](http://flashden.net/item/minimalist-versatile-corporate-site-template/42027?ref=mbudm "Minimalist, versatile, corporate template") and added a new one to the queue which should be available early next week.

I have been doing some research over the past few months into making my Flash Templates more SEO friendly. Initially I avoided the SWFAddress solution as this involves editing a .htaccess file on your server to enable rewriting of the URLs (phpmodrewrite) which is not terribly difficult but I'm always after the simplest solution possible.

My attempts to find a workaround that would avoid this server meddling proved unsuccessful. I tried all sorts of things, like putting source into the <noscript> tag which I discovered Google does not read. And putting the content in the <div> that would be replaced by the Flash Object didn't work either as you would get an ugly glimpse of the basic html site before the Flash Object. Actually that last part is no longer an issue I have moved to SWFObject 2.2 which embeds the SWF before the <body> tag - meaning that the glimpse of HTML content no longer occurs.

In reality though the real problem is that without URL rewriting I would be dumping the entire site contents onto the one page. Not so bad with a small mostly text site, but as my new template is all about phtographs, artworks and other visual images this would mean a very heavy page load.

The new templates are on my site too as I'll be interested to see how well they get indexed by Google. By linking to them here I'll be wiring them up to the interweb for the first time. The first is the [updated mbudm#001 site](http://mbudm.com/stock/001/ "mbudm#001 template"), and this is a link directly to [one of it's sub pages](http://mbudm.com/stock/001/3/0 "The contact us page"). The second is the new as yet unrevealed [mbudm#002 Curator's Gallery template](http://mbudm.com/stock/002/ "Curator's Gallery template - mbudm#002"). I'm particularly interested in seeing how Google Image Search handles this site as the deep linking extends all the way down to each individual image, as [this link to a nice llama](http://mbudm.com/stock/002/llamas "Fred the Llama") shows.
