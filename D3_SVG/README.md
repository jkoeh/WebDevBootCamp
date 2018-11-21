# SVG
## summary
- raster vs vector graph
- creating svg in dom
- draw line using SVG
- create groups of SVG elements
- draw rectangles, polygons and circles using svg
- write text on svg
- draw general path on svg
- use D3 to build SVG bar chart

## what is SVG and what advantage does it have over raster image
- it is a scalable vector graphics. Unlike raster image such as PNG, jpeg, which are composed of pixel, SVG is composed of curves and lines and can scale without quality degradation

## creating and drawing line with SVG
```javascript

<svg 
  version="1.1" 
  baseProfile="full"
  xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1 ="100" x2="700" y2="350" stroke-width="5px" stroke = "blue"/>
  <line x1="100" y1 ="350" x2="700" y2="100" stroke-width="5px" stroke = "blue"/>
</svg>
```

## SVG group
- group allows us to group SVG elements into a single group and add functionality and attributes to all of them from a single place   
```javascript
<svg
  version="1.1" 
  baseProfile="full"
  xmlns="http://www.w3.org/2000/svg">
  <g stroke-width="5px" stroke = "blue">
  <line x1="100" y1 ="100" x2="700" y2="350" />
    <line x1="100" y1 ="350" x2="700" y2="100" />
    
  </g>  
</svg>
```
## basic shape: rectangle, polygons and circles & text
- rx, ry: determines curves on the corner
- points: determine x, y coordinate of each corner of polygon
- x and y refer to the UPPER LEFT corner for rect and BOTTOM LEFT corner of the text 
- use text-anchor to align the text to start, middle, or end
- you could use all the familiar text attribute such as font family and other action such as transform on text element in svg
```javascript
<svg
  version="1.1"
  baseProfie="full"
  xmlns="http://www.w3.org/2000/svg">

<rect x="" y="" width="" height="" style="" stroke="" stroke-width="" fill="" rx="" ry=""/>
<polygon points="" style=""/>
<circle cx="" cy="" r="" style=""/>
<text x=""  y="" style="" text-anchor="middle"></text>
</svg>
```
## path elements: the power to draw anything 
- syntax is usually exported from a svg drawing program because it's very complicated. still we should be able to read it
- The following commands are what's written into d attribute to tell the browser what is needed to be drawn.
  1. Move (M): move the cursor to X, Y. doesn't draw just move cursor
  2. Line (L): draw a line from cursor's current position. the line will end at X Y. can be chained together
  3. Z: close the path with a line
  4. H: horizontal line
  5. V: vertical line
  6. Q: quadratic  line
  7. C: cubic line
  8. A: circular line
  



- Command: using lower case vs upper case (i.e L vs l). upper case will tell the line to go to the X Y coordinate. lower case will tell the line to go X Y further from current position
```javascript
<path d=""
     fill="" stroke="" stroke-width="" />
```