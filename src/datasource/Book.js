import pkg from 'apollo-datasource-rest';
import config from './../config/configurations.js'

const { RESTDataSource } = pkg;

class BookAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.url
    }

    async postBook(payload) {
        return await this.post('/create', payload);
    }

    async putBook(payload) {
        return await this.put(`${payload.bookId}`, payload);
    }

    async getBookById(id) {
        return await this.get(`/${id.bookId}`);
    }

    async getBooks() {
        console.log("Apollo");
        return await this.get('/getBooks');
    }

    async deleteBook(payload) {
        return await this.delete(`/${payload.bookId}`)
    }
}

export default BookAPI