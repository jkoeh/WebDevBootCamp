function getMostFollowers(...usernames) {
    let promises = [];
    let promise = username => fetch(`https://api.github.com/users/${username}`).then(response => response.json());
    usernames.forEach(function (username) {
        promises.push(promise(username));
    })
    return Promise.all(promises)
        .then(responses => {
            let first = responses.sort((a, b) => b.followers - a.followers)[0];
            return `${first.name} has the most followers with ${first.followers}`
        });
}
function starWarsString(id) {
    let apiUrl = "https://swapi.co/api";
    let getCharacter = id => fetch(`${apiUrl}/people/${id}/`).then(resp => resp.json());
    let getFilm = url => fetch(url).then(resp => resp.json());
    let getPlanet = url => fetch(url).then(resp => resp.json());
    let character;
    let film;
    return getCharacter(id)
        .then(data => { this.character = data; return getFilm(data.films[0]); })
        .then(data => { this.film = data; return getPlanet(data.planets[0]); })
        .then(data => `${this.character.name} ${this.film.title} ${this.film.director} ${data.name}`);

}