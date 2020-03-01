import { Observable } from 'rxjs';
export const getSearchResults = (term: string) => {
    console.log('here');
}


const endPoint = 'http://www.omdbapi.com/?apikey=57bcdb81';

export const createHttpObservable = (term: string) => {
    let url = `${endPoint}&s="${term}"`;
    console.log(url);
    return Observable.create(observer => {
        fetch(url)
            .then(response => response.json())
            .then(body => {
                observer.next(body);
                observer.complete();
            })
            .catch(err => { observer.error(err); });
    });
}