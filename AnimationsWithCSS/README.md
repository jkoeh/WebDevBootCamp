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