---
title: "Serverless as a forcing function for good practices"
categories: ["Development"]
tags: ["Serverless", "TDD", "CICD", "API Testing"]
date: "2019-08-26"
draft: true
---

Many years ago, when I first joined the workforce I was a print graphic designer. Back then I learnt off a bunch of people who had been through the transition from manual typesetting and mockups with Letraset through to early computer based 'desktop publishing' using Quark Xpress and Pagemaker. They all appreciated the ease with which they could create with the new software tools but they also missed a  big part of the old manual days. 

The bit they missed was the forced thinking time that the lengthy manual cut and paste process gave them. They had a sneaking suspicion that with the new tools, where you could smash out designs in minutes that they'd never achieve the quality of thought that they got when manually crafting a design over a few hours.

I've been thinking about this a bit as I have been experimenting with using Serverless tools, to build apps in AWS using Lambda, DynamoDB and event driven architecture. I recently decided to ditch the use of offline or local mocks of AWS services and adopt a development process of local TDD then deploying to a dev environment in AWS. I gather this is what some people might consider 'cloud native' development.

This means I don't see my code actually running as an app and I don't run functional or API tests against my code until it's deployed to the cloud.

I decided on this change in workflow as I found that I was wasting too much time maintaining offline mocks of AWS services. I also had occasions where everything worked fine locally and then needed a whole lot more refactoring when I deployed to AWS. Lastly I'm increasingly leaning towards more event driven architecture, as it seems to be a great way to be more responsive to users, pushing non urgent work to be done in the background, and I've yet to see a reliable local version of an s3 bucket that can trigger a lambda that writes to dynamodb, that triggers another lambda from the dynamodb update stream which then invokes another lambda.

This workflow means that you must wait a few minutes (depending on your CICD pipeline) to get the results of a change - to know if it works against your functional/API test suite. This few minutes to wait for real feedback makes me much more inclined to be thorough with my use of types, to code more defensively and to cover more edge cases in unit tests.

In short, working on serverless apps 'cloud native' forces me to think more about what I'm doing and so be a much better developer. 

I think those print designers who missed the manual processes of old would like that a bit of slowing down and thinking time might come back into vogue.

