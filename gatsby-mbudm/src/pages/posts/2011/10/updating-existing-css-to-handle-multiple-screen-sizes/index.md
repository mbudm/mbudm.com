---
title: "Updating existing CSS to handle multiple screen sizes"
date: "2011-10-03"
categories: ["CSS", "Development"]
tags: [] 
---

I'm revisiting some old CSS this week with the aim of making it work across multiple screen sizes for devices such as android phones, iphones, ipads and whatever else is out there in the ever expanding device ecosystem.

There are a bunch of great tips, frameworks and tools around for doing this. I'm using the process used by [320 and up](http://www.stuffandnonsense.co.uk/projects/320andup/ "320 and up boilerplate extension") boilerplate extension. Essentially this serves up common styles first, then delivers a stylesheet with dimension CSS that is appropriate to the device screen.

My existing CSS is about 1500 lines and the dimensions are mixed in with all the other styles, so I've had to be a bit methodical about how I sort all this out into the new CSS file arrangement.

Step 1 - create the global style sheet file.

Copy everything out of the original CSS file that is likely to work across all dimensions

Change as many fixed (pixel) values to relative (em or %) as you can. About the only thing that should remain measured in pixels are layouts and dimensions that are set to handle background images of a specific size.

Step 2 - create the largest dimension style sheet file.

Copy everything out of the original CSS file that is likely to be changed for each screen dimension - basically all the items that still have a fixed dimension.

In step 4 I'll revisit the global style sheet and see if anything else should be handled by the dimension files, such as large font-sizes.

Step 3 - change global styles to suit the smallest screen dimension and copy the changed styles into 992

The global styles are going to be all that is used by devices less than 480px in width, so these styles need to work for this.

As the styles in global.css are legacy from my full size website css then a lot of them will not look good. In particular, some fonts and buttons may look a bit oversize. So item by item I copied these over to 992.css and put a new rule in global.css to suyit the small window dimension.

When designing an alternate style for the small (mobile) screen I actually liked a lot of the solutions so much that I decided to use this for the full web version too. For me this is often the case when I come back to a design, I inevitably improve on it.

Step 4 - create each 'in-between' dimension style sheet file.

Now you have the smallest screen size and the biggest looking good it's time to fill in the middle sizes.

This is the fun bit as mostly this involves simply moving items from 992.css to a smaller screen stylesheet at the point you want that styel to kick in. For example my larger style ahs a lot of horizontally floated widgets, that are all vertically stacked in my single column less than 480px design. Depedning on the complexity of the widgets I may want them to move to the horizontal layout at 768px or 600px and in some cases simpler widgets may suit this layout at 480px (iPhone horizontal view).

Step 5 - revisit and optimise the global style sheet

Is their anything else in here that needs to be handled by the dimension CSS files?
