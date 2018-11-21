d3.select("#reset")
    .on("click", function(){
        d3.selectAll(".letter").remove();
        d3.select("#phrase").text("");
        d3.select("#count").text("");
        
    })
d3.select("form")
    .on("submit", function(){
        d3.event.preventDefault();
        let input = d3.select("input");
        let text = input.property('value');
        let letters = d3.select("#letters")
            .selectAll("div")
            .data(getFrequencies(text), d=> d.character);
        letters
            .classed('new', false)
            .exit()
            .remove()
        letters
            .enter()
            .append("div")
                .classed('new', true)
                .classed('letter', true)        
            .merge(letters)                
                .style('height', d => d.count * 20 + "px")
                .style('width', '20px')
                .style('line-height', '20px')
                .style('margin-right', '5px')
                .text(d=> d.character);
        displayText(text)
        displayCount(letters.enter().nodes())

    })

function displayText(text){
    d3.select("#phrase")
        .text(`Analysis of ${text}`)
}
function displayCount(data){
    d3.select("#count")
        .text(`New characters: ${data.length}`)
}
function getFrequencies(str){
    let sorted = str.split("").sort();
    let data = [];
    for(let i = 0; i< sorted.length; i++){
        let current = sorted[i];
        let last = data[data.length-1];
        if(last && last.character === current) last.count ++;
        else data.push({character: current, count: 1})        
    }
    return data;
}
