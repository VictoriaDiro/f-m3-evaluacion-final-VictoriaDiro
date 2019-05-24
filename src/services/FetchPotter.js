const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const FetchPotter = () => fetch(ENDPOINT).then(res => res.json())

export {FetchPotter};
