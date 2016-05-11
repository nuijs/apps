# apps
apps for natural user interfaces using javascript

This repository is a placeholder for apps that would be built using nuijs.

First app in this series is - 
# DRAW

Imagine this: You grab a device, do some doodles mid-air and watch your art appear on screen.
This is what DRAW meant to do.

## Steps for running: ##

- Run the index.html file
- If a leap motion controller is connected, then run index.html as it is
- Else, add the below line in the beginning of draw/scripts/pointer.js file
```
var controllerOptions = { port: 3000, enableGestures: true };
```
- Make sure to run websocket server on port 3000. Steps to run the simulator are explained [here](https://github.com/nuijs/simulator)

Second app in this series is - 
# SLIDE

Imagine this: You start a presentation, control your slides merely through gestures. This is what SLIDE meant to do.

Steps for running, same as above.


