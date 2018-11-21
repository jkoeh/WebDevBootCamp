# D3 , Data-Driven Document
### how to select elements in DOM using d3.select and d3.selectAll
- using `d3.select` and `d3.selectAll` we could select the html element(s) and manipulate them  
### set attributes, innerText and sytle properties on D3 selection
- we could control the style, text, attribute and class
### get attribute and property values on d3 selections
- if we do not specify value, these methods are use to get the value of the elements
### chain d3 methods together to make more complex changes to DOM
- we can also chain .select to talk to elements of the inner layer
- we could use append to add elements 
- we could use .property to access value
### passing callback function into D3 selections for more dynamic behavior
- we can use function(_, index) to access list base on their position
### add event listener using the 'on' method
- after adding an event listener to an element using `on`, we could use d3.event to access the event property
### using d3.event to access element inside event listener
- d3.event.preventDefault() for example could be used to prevent the default behavior of form submit to auto refresh the page
   
### add and remove DOM elements in d3
using remove on selected element(s) will remove them from the page.
# 
# Advance D3
## joining data on d3 selection using the data method and targets nodes to append to the DOM via the enter selecton
- we are able to bind data to d3 selection by using data function.
- the data binding persist after the selection so we could easily use it again if we select the selections
- you must select the parents before selecting the children to append the new element. because otherwise, since the appending happen to the parent, the element would be appended to the html since that would be the parent
- we are able to access the data bound to the d3 selection by using a call back 
`function(d, i){}` where d is the data and i is the index
```javascript
d3.select('#quotes')
    .style('list-style', 'none')
.selectAll('li')
    .data(quotes)
    .enter()
    .append('li')
        .text(d => d.quote)
```

## targets nodes to remove from the DOM via the exit selection
- when we no longer need an element in a selection created by data and enter, we do not want to simply remove that item via remove because the selection and the underlying data would be out of sync. instead, we should update the data and then use exit method to find out what's been removed and remove it through that.
```javascript
quotes.pop()
d3.selectAll('li')
    .data(quotes)
    .exit()
    .remove()
```
## advance data join
- sometimes, we want to remove certain data by specific criteria. simply using exit() and remove would not be suffice because it remove by index. so we will have to pass in a callback function in data to select the key
```javascript
d3.selectAll('li')
    .data(updatedQuotes, d => d.quote)
    .exit()
    .remove()
```
## update existing DOM elements with new data
- there are three type of selection in d3. `enter` `update` `exit`
- enter: targets data with no elements
- update: targets data with elements
- exit: targets element with no data
- it is useful when you just want to edit the specific category but cumbersome when you need to edit all three
- hence we came up with merge to select them all. one select to rule them all ( ͡° ͜ʖ ͡°)
## merge update and enter selections, and describe D3 general update pattern
- the general approach to updating could be summarize like this
1. grab the update selection, make any changes unique to that selection, store it in a variable
2. grab the exit selection, remove any unnecessary elements
3. grab the enter selection, make any changes unique to that selection, store it in a variable
4. merge the update and merge selection and make any changes you want for both selections
```javascript 


```