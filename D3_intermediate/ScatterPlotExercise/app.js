const height = 650;
const width = 650;
const padding = 20;
const heightWPadding = height - padding;
const widthWPadding = width - padding;

var xScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, x => x.adultLiteracyRate))
  .range([padding, widthWPadding]);

var yScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, x => x.subscribersPer100))
  .range([heightWPadding, padding]);
var sizeScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, x => x.urbanPopulationRate))
  .range([1, 15]);
var colorSacle = d3
  .scaleLinear()
  .domain(d3.extent(regionData, x => x.medianAge))
  .range(["blue", "green"]);

var xAxis = d3
  .axisBottom(xScale)
  .tickSize(-height + 2 * padding)
  .tickSizeOuter(0);

var yAxis = d3
  .axisLeft(yScale)
  .tickSize(-width + 2 * padding)
  .tickSizeOuter(0);
var curatedDate = regionData.filter(
  d =>
    d.adultLiteracyRate != null &&
    d.subscribersPer100 != null &&
    d.urbanPopulationRate != null &&
    d.medianAge != null
);
d3.select("svg")
  .attr("height", height)
  .attr("width", width)
  .selectAll("circle")
  .data(curatedDate)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.adultLiteracyRate))
  .attr("cy", d => yScale(d.subscribersPer100))
  .attr("r", d => sizeScale(d.urbanPopulationRate))
  .attr("fill", d => colorSacle(d.medianAge));

d3.select("svg")
  .append("g")
  .attr("transform", `translate(0, ${heightWPadding})`)
  .call(xAxis);

d3.select("svg")
  .append("g")
  .attr("transform", `translate(${padding}, 0)`)
  .call(yAxis);

d3.select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", height)
  .attr("dy", "1.5em")
  .style("text-anchor", "middle")
  .text("Literacy Rate, Age 15 and up");
d3.select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", padding)
  .style("text-anchor", "middle")
  .style('font-size', "1.5em")
  .text("Cellular Subscriptions vs. Literacy Rate");
d3.select("svg")
  .append("text")
  .attr("x", -height / 2)
  .attr("y", -padding)
  .attr('dy', padding/2)
  .attr('transform', 'rotate(-90)')
  .style('text-anchor', 'middle')
  .text('Cellular Subscribers per 100 people')
  