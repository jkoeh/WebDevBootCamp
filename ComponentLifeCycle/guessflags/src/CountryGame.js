import React, { Component } from 'react'
import './CountryGame.css'
export default class CountryGame extends Component {
    constructor(props) {
        super(props);
        this.state = {countries:[], 
        options: []};
    }
    shuffle(a){
        for(let i=a.length-1; i >0; i--){
            const j = Math.floor(Math.random()* a.length);
            a[a[i], a[j]] = a[a[j], a[i]];
        }
        return a;

    }
    _getOptions(correctOptions, countries){
        let options = [correctOptions];
        let tries = 0;
        while(options.length<4 && tries<15)
        {
            let option = Math.floor(Math.random()*countries.length)
            if(options.indexOf(option)=== -1){
                options.push(option)
            }else{
                tries ++;
            }
            options = this.shuffle(options);
        }
        return options;


    }
    componentDidMount() {
        const getCountriesUrl = "https://restcountries.eu/rest/v2/all";
        fetch(getCountriesUrl)
            .then(resp => resp.json())
            .then(countries => {
                const correctOptions = Math.floor(Math.random()* countries.length);
                const options = this._getOptions(correctOptions, countries);
                this.setState({countries, options})
            })
    }
    render() {
        const {options, countries} = this.state;
        console.log(options);
        console.log(countries);
        return (
            <div>{options}</div>
            
        )
    }
}