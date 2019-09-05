---
title: "Useful code for debugging MovieClip.localToGlobal() headaches"
date: "2009-10-09"
categories: ["Development"]
tags: ["ActionScript 2", "Development", "localToGlobal"]
---

I hate localToGlobal. There I've said it. It seems that there are some things in Actionscript that always seem to throw me off - this is my main one.

Today I had another issue while adding a generic tooltip to buttons that in an assortment of sub clips and components - the tooltip needs to know the global \_x and \_y of the button. I couldn't work out why it was throwing me seemingly random results until I decided to get down and dirty and effectively trace out the entire localToGlobal calculation - the \_x position of each nested MovieClip.

Here's my code which I though was a fairly nice way of achieving this:

```
  
var mc= ttTarg; //ttTarg is the ref to the deeply nested button that is the toolTip target  
var arr = new Array();  
arr.push(mc._name+":"+mc._x);  
while(mc._parent != _root ){  
arr.push(mc._name+":"+mc._x);  
mc = mc._parent;  
}
```

...and what was my problem I hear you ask? Well this little trace told me that the \_x value calculated by localToGlobal was slightly more that the actual acculumulated \_x values. In fact it was appeared that the localToGlobal function was counting the \_x value of the ttTarg twice. Why? Well I haven't worked that out yet but in the meantime I can adjust the Math to make this spit out the x values the way I expect it to - I don't mind things working oddly, as long as they are consistently odd ;-)
