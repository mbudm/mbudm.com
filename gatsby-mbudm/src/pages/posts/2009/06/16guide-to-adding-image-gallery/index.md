---
title: "Guide to adding an image gallery (or other actionscript 2 component) to the mbudm#001 template"
date: "2009-06-15"
categories: ["Development"]
tags: []
---

A few buyers and potential buyers have been asking me about adding an external SWF to my "[Minimalist, versatile, corporate site template](http://flashden.net/item/minimalist-versatile-corporate-site-template/42027?ref=mbudm "My mbudm#001 template on Flash Den")" on FlashDen.net. This is something I expected as the template is purposefully a 'lite' version - it has an inbuilt text module and support for external SWFs only. Other site templates on FlashDen often have other 'modules' like video player, image gallery, php form or news reader . I kept mine minimal for two reasons:

*   I don't yet have these modules coded. I'm getting there but I want my versions to be as stand-out as possible - which means quite a bit of work.
*   I saw a gap in the current site template market at Flash Den for a simplified entry level template

Therefore this blog post is a bit of a guide to existing and potential customers on how to add an external SWF to my template.

### Add an external item to the site index

An entry for an external page in the index XML file for the template looks like this:

```
<page type="external" url="swfs/externalDemo.swf" onresize="onResize" onload="init"
onloadparams="data/externalDemo.xml" title="An external SWF"  />
```

The attributes that are unique to the external type are these (this is copied from my documentation that comes with the template):

*   <span style="code">onresize</span>: The name of the function within your external swf that you want to be called when the size of the space allocated to the page changes. This function should be set up to receive width and height paremeter and it should be located at the root of your swf.
*   <span style="code">onload</span>: The name of the function within your external swf that you want to be called when it first loads. The parameter below is passed. This function should be located at the root of your swf.
*   <span style="code">onloadparams</span>:The parameter you want to pass to the function specified in the onload attribute

So the example XML node above tells the template that when it loads the external SWF it needs to:

*   Call a function in the \_root (\_level0) of the loaded SWF called "init", and pass the contents of the onloadparams attribute, "data/externalDemo.xml".
*   Whenever the width or height of the page area changes (eg. if the template is set to a fluid layout and the browser is resized) then the template should call a function called "onResize", which is also located at \_level0 of the external SWF. This function must be set up to receive two parameters, width and height.

### Setting the size of the loaded movie and calling the onload function

If the external SWF you are using is another purchased item, you may need to consult it's documentation or contact the author to find out what function you need to call to resize the SWF or to initialise it. Once you know this, you simply need to add the code to the external SWF. So for example, if you have a gallery and the gallery.FLA is set up like so;

*   all the gallery code in one movieclip called "gallery\_mc"
*   the gallery\_mc contains a function to initialise called "init" and this needs to receive the path of an XML file as a parameter
*   the gallery\_mc contains a function for setting the width and height called "setSize" and expects to receive two parameters, width and height.

Then the code you need to add to the \_root of the FLA is:

```
function onResize(w:Number,h:Number){
    gallery_mc.setSize(w,h);
}
```
```
function init(xmlFileName:String){
    gallery_mc.init(xmlFileName:String);
}
```

Too easy right?
