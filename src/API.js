const url = 'https://readying.herokuapp.com';
const questionsUrl = url + '/questions';

const get = (url) => (
    fetch(url)
    .then(resp => resp.json())
)

const getQustions = () => (
    get(questionsUrl)
)

export default {getQustions}