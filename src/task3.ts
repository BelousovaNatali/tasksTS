import fetch from 'node-fetch';

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

interface Reqs {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
const getData = (url: string): Promise<any> => {
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
}

getData(COMMENTS_URL)
    .then((data) => data.json())
    .then((data: Array<Reqs>) => {
        for(let {id, email} of data) {
            console.log(`ID: ${id}, Email: ${email}`);
        }
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
