---
title: "Finding a specific node in an AS3 XML object"
date: "2010-03-30"
categories: ["Development"]
tags: ["ActionScript 2", "ActionScript 3", "as3", "flash"]
---

Continuing with my updating an Actionscript 2 project to Actionscript 3 I'm really enjoying the optimisation possibilities that AS3 provides.

For example, In my as2 code I had a recursive method for finding a node.  

```

```
// recursive node search
	private function findNode(n:XMLNode,name:String,attname:String,attdata:String):XMLNode{
		

> var xNode:XMLNode;
> 		if(n.hasChildNodes()){
> 			
> 
> > for(var i = 0; i < n.childNodes.length; i++){
> > 				
> > 
> > > if(n.childNodes[i].nodeName == name){
> > > 					
> > > 
> > > > if(n.childNodes[i].attributes[attname] == attdata){
> > > > 						
> > > > 
> > > > > xNode = n.childNodes[i];
> > > > 
> > > > 					}
> > > 
> > > 				}
> > > 				if(xNode != undefined){
> > > 					
> > > 
> > > > break;
> > > 
> > > 				}else if(n.childNodes[i].hasChildNodes()){
> > > 					
> > > 
> > > > xNode = findNode(n.childNodes[i],name,attname,attdata);
> > > 
> > > 				}
> > 
> > 			}
> 
> 		}
> 		return xNode;

	}
```

```

  
In as3 this is now so much cleaner:  

```


> private function findNode(n:XMLNode,name:String,attname:String,attdata:String):XMLNode{
> 
> > return n.descendants(name).(@[attname] == attdata);
> 
> }


```

  
This makes me happy.
