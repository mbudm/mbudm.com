---
title: "Semantic HTML"
date: "2011-01-15"
categories: ["Development"]
tags: ["html", "web standards"]
---

In the past year I have begun to outsource the front-end development work (XHTML, CSS and mostly jQuery) of some client projects. This frees me up to do more of the strategy and design work that makes better use of my time. After reviewing the folios of over 50 front end developers and working with quite a few, I've come to the conclusion that when it comes to semantic markup, most developers talk the talk but in reality have no clue what it means. Even if they do get that semantic markup is crucial to accessibility, SEO and is more backend coder friendly I suspect there is little incentive to code this way as clients don't know how to judge if it's done right.

The best approach to marking up a new page is to code the HTML first, without concerning yourself with the layout, colors, or any graphic decoration - basically without using any CSS. This process let's you focus on the semantic structure of the document, asking yourself questions like:

*   What is the most important information?
*   What information is tabular or a list of related items?
*   What content is connected, hierachically or as siblings. Are there any bits of information that are related to each other, but perhaps not visually adjacent to each other?

Nowadays page designs can often be very graphical and may use a lot of JavaScript, for slideshows and banners. What most coders do is tackle each element of the design in whatever order occurs to them as they code - in addition to this flaw, (hack) coders often resort to heavy use of  `<div>`  and  `<span<`  tags that are purely intended to hold some css design that they will add later. This often results in:

*   Important information not appearing early in the code - very bad for SEO
*   Headings that are mostly graphics, now being coded as a heading (the heading tag should at least contain a text version of the heading graphic that is indented off screen, with a better option being to use the browser text over a background image) - again this is very bad for SEO as the important keywords that describe wha the page is about are either not there or seen as less important because they are in a  `<div>`  and/or  `<span<`  rather than a  `<h1>`  or  `<h2<` 
*   Code that is hard to redesign or reuse - if code reflects the content structure, then applying a new design to it or a different stylesheet for another device (such as an iphone) is much easier. If the code is littered with hacks to make one design work, then it can be impossible to make that code fit another design.

All of this is not rocket science, and it has been best practice for a good 10 years now (since web standards became the accepted methodology and table hacks a distant memory). So, next time you outsource some HTML and CSS work to one of the many dirt cheap operations that are available nowadays, ask yourself if you are really getting the best mid to long term option.
