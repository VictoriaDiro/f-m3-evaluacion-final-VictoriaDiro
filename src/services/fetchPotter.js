const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchPotter = () => fetch(ENDPOINT).then(res => res.json())

export {fetchPotter};
