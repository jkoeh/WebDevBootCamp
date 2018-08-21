# AnimationWithCSS: Transforms and Transitions
## Psuedo-classes
<p>A keyword added to a selecor that specifies a special state of the selected element. For example: <i> :hover </i> can be used to apply a style when the user hovers over a button</p>

```css
selector:pseudo-class {
    property: value
}
```
### Common Psuedo class
* :hover - triggers when mouse hover
* :focus - triggers when an element is focused. In generalthis means the user clicks, or taps on an element or selects it with the keyboard tab key.
* :active - triggers when an element is being activated by user. Typically starts when user pressed down the mouse

## CSS transformation
<p>lets user move, wrap, rotate and scal elements. it's usually used when the element is triggered</p>

```css
selector {
    transform: transformFunction()
}
```
* translateX(x): shift element x pixel to the right
* translateY(x): shift element x pixel to the down
* scale(x): scale the element by x times, can take an additional parameter of y as well to scale y. 
* rotate(xdeg): rotate the elemnt by x degrees

## Vendor prefix
* experimental or nonstandard properties of css are implemented differently and sepearately by different vendors (i.e. chrome, safari). We need an auto prefixer to add the prefixes to these properties to ensure different browsers is interperting them correctly.

## Transition
* transition-duration: how long is the transformation, can set different timing for each property
* transition-property: which transformation to target, can target specific  property
* transition-timing-function: how does the transformatio progress(linearly, exponetially, etc) (easings.net)
* transition-delay: when the transformation starts happening, can set different timing for each property
* shorthand for all four transition properties: property, duration, timing-function, delay. also you can target multiple specific properties
```css
selector {
    transition: transform 2s ease-out 1s, background-color 0.5 linear;
}
```
* usage: many properties can be transitioned but not all of them should be use lightly b/c it effects performance. usually, we use transition usually on
    - transform: translate();
    - transofrm: scale();
    - transform: rotate();
    - opacity;

# CSS Animations: Keyframes
## What is keyframes
* It is a css framework that allos the developer to change an element in a mutlipart(size, color, etc), multistage manner (i.e. state A, state B, state C ...to State F). Unlike transition/transform which only allows a single state transformation.
* common properties:
    - animation-name: define which animation to use
    - animation-duration
    - animation-timing-function
    - animation-delay
    - animation-iteration-count
    - animation-direction: reverse, alternate. Reverse would start the elemtn at the opposite
    - animation-fill-mode: foward, backward, both. Determines the start and ends states.  
    - animation-description
    - animation-play-state: paused, running
* can be combined into shorthand, animation

# Advanced CSS: Layout with Flexbox
## Flexbox
### What is it?
It is a more efficient to layout, align, and distribute space among elements in a container even when their sizes is unknown. Define the properties of the container and item seperately. 
### Further reading
https://css-tricks.com/snippets/css/a-guide-to-flexbox
### Container properties:
* display: 
    flex, change container to a flex container. change items inside the container to flex items. arrange the flex items inside the flex container to inline
* flex-direction:
    main axis is main direction of the flex-direction and cross axis is always the perpendicular direction. By default main-axis is row, from right to left. (row, row-reverse, column, column-reverse)
* flex-wrap: determines whether items should be in the same line. Wrap means don't stay on same line. You could also use wrap reverse to reverse the direction of cross axis
* justify-content: aligns the flexible container's items when the items do not use all available space on the main-axis.
* align-items: define how space is distributed items in flex container along the cross axis. 
    - flex-start, flex-end, stretch, center, baseline
* align-content: define how the space is distributed items between row in flex container along the cross-axis. 
