---
title: "Actionscript 3: Inheritance Subclass and private vars"
date: "2010-03-28"
categories: ["Development"]
tags: ["ActionScript 3", "as3",  "extends", "inheritance", "oop", "private", "public"]
---

I'm currently updating some as2 projects to as3 and I had a series of 1120 compiler errors this afternoon. I'm a fan of using the 'extends' keyword to create customised versions of base classes. In Actionscript 2 the subclass can access all the variables and methods of the original class. It appears that in ActionScript 3, things are much stricter and only public variables and methods are accessible.

For example, this won't work:

_A.as_  
```
  
package  
{  
public class A{  
private var propertyA:String = "Private Property from the A class";
```

```


public function A(){  
trace("A.A()");  
}

public function methodA(){  
trace("---A.methodA()----");  
trace("- propA:"+propertyA);  
}  
}  
}


```

_B.as_

```
package  
{  
import A;
```

```


public class B extends A{  
private var propertyB:String = "Private property from the B class";

public function B(){  
trace("B.B()");  
}


```

```
public function methodB(){  
trace("---B.methodB()----");  
trace("- propA:"+propertyA);  
trace("- propB:"+propertyB);  
}  
}  
}
```

The compiler error is:  
 `1120: Access of undefined property propertyA.` 

But if you change the _private_ var propertyA (in A.as) to _public_ var propertyA, then the compiler is error free.
