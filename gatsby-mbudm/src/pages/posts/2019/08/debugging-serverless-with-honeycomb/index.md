---
title: "Debugging Serverless with Honeycomb Observability"
categories: ["Development"]
tags: ["Honeycomb", "Observability", "Serverless"]
date: "2019-07-17"
draft: true
---

Generate the dimensions locally in the test - already I can see that I'm getting different dimensions from what is being reported in honeycomb.

- so my person generation code isnt correct
- the conversion in create isnt correct

Use the create tools to work out the data going to person
add the raw payload to persontthumb (i.e we arent yet observable as I'm adding more logs). At least the raw bounding box values would be useful here as they are key inputs along with the image dimensions, and likely to be useful later.
maybe also the face id is that the person is using?

Yeah lets log the key bits of the dim calculation.


Aha by stepping through the functions in the getDims() function I saw that the image and width is being swapped. Which is happening because the orientation is assumed to be flipped on its side.

There is no metadata orientation value - I tested that with sharp, so that means rekognition doesnt have it either... so my not so clever attempt to infer the orientation from the width and height is bogus:

```javascript
export function guessOrientation(imageDims) {
  return imageDims.width < imageDims.height ?
    EXIF_ORIENT.TOP_LEFT :
    EXIF_ORIENT.LEFT_TOP;
}
```

If I can't read orientation then best to assume neither can rekogntion so I should assume and EXIf orientation value of 1 - EXIF_ORIENT.TOP_LEFT in my constants.

So just in case I get tempted to play nostradamus with the orientation value again, I extracted on of the people objects as a permanent unit test for my collection - testing for a person in a landscape image that doesnt have an orientation value:

```javascript
test("getDims - landscape image with no orientation value", (t) => {
  const personInTestImage: IPerson = {
    boundingBox: {
      Height: 0.2512778639793396,
      Left: 0.236151784658432,
      Top: 0.37818941473960876,
      Width: 0.09541566669940948,
    },
    faces: [] as IFace[],
    id: "test image id",
    imageDimensions: {
      height: 654,
      width: 1359,
    },
    img_key: "tester/four_people.jpg",
    name: "",
    thumbnail: "tester/four_people.jpg",
    userIdentityId: "some-id",
  };

  const result = personThumb.getDims(personInTestImage, undefined);
  t.deepEqual(result, { height: 164, left: 304, top: 248, width: 164 }, "dims for test person");
  t.end();
});
```
That's how I gradually build up observability, finding the right values to log so eventually I dont need to log anyhting, I have the data to diagnose any problem.

Maybe it's a bit like a lot of development, more an spirational goal, perhaps we could add another metric to the accelerate book canon, average logging neede to add to investigate incident (ALNTATII)

Looking at the images now I can see that the cropping pattern is an flipped pattern of the actual faces - but that didnt occur to me until I drilled down with the actual app data.

Oh and I also thought of a nice addition to the logs:

```
imageOrientation: (metadata && metadata.orientation) || "unknown",
```

Rather than log the default orientation of 1, why not log when it's unknown. could be a good way of isolating errors in future.
