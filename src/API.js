const url = 'http://localhost:3000';
const questionsUrl = url + '/questions';

const get = (url) => (
    fetch(url)
    .then(resp => resp.json())
)

const getQustions = () => (
    get(questionsUrl)
)

export default {getQustions}