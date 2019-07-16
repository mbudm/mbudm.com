---
title: "Agile UX for a javascript web application"
categories: ["Big Clients", "Design", "Development"]
tags: ["agile", "JavaScript", "User Experience Design", "User Research"]
date: "2013-06-13"
---

It’s been 10 months now since I decided to ramp up my javascript skills and take on a hybrid UX and front-end development role. I’ve worked with a few agile development teams in the past two years mainly as a UX consultant and Product Manager. I really enjoyed the iterative approach, doing some analysis, creating some wireframes, seeing the wireframes come to life very quickly and then facing some new and interesting problems that only the development of a real working version can reveal.

I spent a fair bit of the 2000s building a big piece of software in Actionscript so I’ve always like getting stuck into code. With the death of Flash and the advent of responsive jQuery goodness in the digital world over the last 3 years my move into Javascript has been pretty smooth and a natural step. All I needed was a big project and a smart bunch of devs to work with to fully get my JS creds.

The project is certainly big, and it’s complex, and the domain (the subject matter), mineral processing is also complex. It’s essentially a simulator, btu it takes in a huge amount of data and spits out a massive amount of results. My job has been to build UI’s and user flows that make entering and understanding that data eas(ier).

We’ve been using the Ext-Js and mxgraph frameworks and an MVC architecture along with jasmine unit testing, selenium integration tests a robust build and deploymnet processes. This is just the sort of formalise development environment that I haven’t had as a developer before – it’s not that common on smaller web projects I find – and I’m definitely loving it.

## Where’s the UX?
But what about the UX part – is it possible to take a step back from models, stores and whether the logic should be in the controller or the view? I must admit that in the first phase of the project where we were all working out about comminution and ball mills we were just focussed on getting a proof of concept built that you could feasibly use to simulate mining processes.

Once we had our POC though and felt like we were starting to get a grasp of what these users wanted to do, my role became much more about iterating between meetings, balsamiq and spring source (I know, I’ve gotta get a better IDE). it helps that balsamiq now slots into JIRA so spec-ing out and discussing small parts of the UI is really useful especially when our business analyst, project manager and lead developer are all trying to vocalise a mental picture of what they reckon would work best.

The other great thing about doing agile dev especially with js frameworks, is that it is very quick to get a working UI. This means that analysis and design in a UX sense is pretty risk avers, because you can test a (slightly buggy) prototype within a day or two of creating the wireframe. It also helps of course that there are smaller and well defined chunks of work because we are using user stories.

I think back to the heady days of the mid 2000s when all of the environments – at least the one’s that I worked in – were waterfall to the point of being silos. Everything had to be signed off and triple checked before the next team in the chain got to be involved. I recall a lot of very intense meetings, especially in the pre UX or UX phases where the catalyst for that intensity was obviously caused by the knowledge that decisions made then would be practically irreversible or at least needed to be crystal clear so that the meaning wasn’t lost by the time the testers did their bit.

## Not the messiah
Having put my agile fanboy-ness out there I’m just going to take a step back and say that I have also seen some truly awful ‘agile’ implementations. This project and a couple of others I’ve been privileged to work on have managed to be agile because they have a very clear overarching project objective and boundaries. If you don’t have that then in my experience you can end up iterating to nowhere.