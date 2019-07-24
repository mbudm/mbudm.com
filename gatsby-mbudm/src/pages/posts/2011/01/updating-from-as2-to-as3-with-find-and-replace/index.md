---
title: "Updating from AS2 to AS3 with Find and replace"
date: "2011-01-11"
categories: ["Development"]
tags: ["ActionScript 2", "ActionScript 3", "as3",  "flash"]
---

I'm kidding really - there is no way you could find and replace your AS2 code into AS3 ;-) Actionscript 3 is hugely different from Actionscript 2, but that doesn't meant that you can't do a lot of the grunt work using a simple find and replace on these like for like items:

Find this in AS2 code

Replace it with this AS3 syntax

Notes

undefined

null

undefined is dead, long live null

.attributes.

.@

All XML attributes that are specified by attribute name

.attributes\[

.@\[

All XML attributes that are dynamically referenced

:XMLNode

:XML

keep the : in this replace so that any variables named _something_XMLNode don't get changed

.\_parent

.parent

Simple drop of the underscore from the property

".\_x "

".x "

I recommend including a space after this one so as not to mess up any vars starting with \_x

".\_y "

".y "

I recommend including a space after this one so as not to mess up any vars starting with \_y

.\_x;

.x;

Where the property is the last item in a statement

.\_y;

.y;

Where the property is the last item in a statement

.\_width

.width

Simple drop of the underscore from the property

.\_height

.width

Simple drop of the underscore from the property

.\_xscale

.scaleX

Convert values - e.g. 100 is equivalent to 1

.\_yscale

.scaelY

Convert values - e.g. 100 is equivalent to 1

When you're updating an old project with 100s of classes, this will make things a little bit easier. Of course, be careful with this - backup, and if unsure do a find all first to see what code is going to change.

**Other things to think about - these are the things that I most commonly had to change**

*   What variables typed _Number_ in AS2 can be changed to _int_ or _uint_?
*   Anything using ASBroadcaster now needs to dispatchEvent()

I had to sideline the AS2-AS3 project for now but there should be more tips when I get back to it.
