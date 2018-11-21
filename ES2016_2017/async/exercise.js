async function hasMostFollowers() {
    let promise = username => fetch(`https://api.github.com/users/${username}`).then(response => response.json());
    let promises =  Array.from(arguments).map(x => promises.push(promise(x)));
    let output = await Promise.all(promises);
    let max = output.sort((a, b) => b.followers - a.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`
}
async function starWarsString(id){
    let apiUrl = path => `https://swapi.co/api/${path}`;
    const character = await fetch(apiUrl(`people/${id}/`)).then(resp=> resp.json());
    const movie = await fetch(character.films[0]).then(resp=> resp.json());
    const planet = await fetch(movie.planets[0]).then(resp=> resp.json());
    return `${character.name} is featured in the ${movie.title}, directed by ${movie.director} and it takes place on ${planet.name}`
}