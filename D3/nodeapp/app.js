let input = d3.select('input');
let preview = d3.select('.preview');
d3.select("#new-note")
  .on('submit', function (_, idx) {
    d3.event.preventDefault();
    d3.select("#notes")
      .append('p')
      .classed('note', true)
      .text(input.property('value'));
    input.property('value', '');
    setPreview(input.property('value'));
  });
d3.select(".remove")
  .on('click', function () {
    d3.select('#notes').selectAll('p').remove();
  });
d3.select(".lucky")
  .on('click', function () {
    d3.select('#preview').remove();
    d3.select('#notes').selectAll('p')
      .style('color', function () {
        const rndVal = () => Math.floor(Math.random() * Math.floor(255));
        return d3.rgb(rndVal(), rndVal(), rndVal(), 1);
      })
      .style('font-size', function (_, idx) {
        if (idx % 2 === 0) {
          return parseInt(d3.select(this).style('font-size')) * 1.1 + "px";
        }
      })
  })
input.on('input', function () {
    let val = d3.event.target.value;
    setPreview(val);
  })
function setPreview(val) {
  preview.text(val)
    .classed('hide', val === '')
}
