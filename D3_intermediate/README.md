# D3
## Extrema
d3.max(dataArr[,callback])
d3.min(dataArr[,callback])
```javascript
people = [{age: 10, name: john},{age: 11, name: jay},{age: 12, name: jordon}]
d3.max(people, x=> x.age) //12
d3.min(people, x=> x.age) //10

``` 
## scaleLinear
- scaleLinear will map value in domain linearly to that in the range

```javascript
var scale = d3.scaleLinear()
    .domain([1, 17])
    .range([-4, 52])

scale(1) //4
scale(17) //52
scale(9) //24
```

## extend
- returns min and max in an array of d3 elements
```javascript
var minMax  = d3.extent(people, d=> d.age)
minMax; //10,12
```
## axisBottom, axisRight, axisTop, axisBottom
- we could create reference mark for scales using axisBottom, axisRight, axisTop, axisBottom
```javascript
var xAxis = d3
  .axisBottom(xScale)
  .tickSize(-height + 2 * padding)
  .tickSizeOuter(0);
d3.select("svg")
  .append("g")
  .attr("transform", `translate(0, ${heightWPadding})`)
  .call(xAxis);
//create grid for xAxis

```
## scatterPlot
- see ScatterPlotExercise


## histogram

---> skipped to react