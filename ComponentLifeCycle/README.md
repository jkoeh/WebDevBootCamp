# Component Life Cycle
## componentWillUnmount--> cleanup
## componentDidMount
- use case this to do subscription, fetching data from endpoint and any operation
- this method is invoked immediately after the component is mounted. 
- we could use this to do setState, however, beware that this may cause performance issue because render would be invoke twice although the user won't see it.
## componentDidUpdate--> 

