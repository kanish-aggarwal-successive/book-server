import pkg from 'apollo-datasource-rest';
import config from './../config/configurations.js'

const { RESTDataSource } = pkg;

class BookAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.url
    }

    async postBook(payload) {
        return await this.post('/getBooks', payload);
    }

    async putBook(payload) {
        return await this.put(`/edit/${payload._id}`, payload);
    }

    async getBookById(id) {
        return await this.get(`/getBook/${id}`);
    }

    async getBooks() {
        console.log("Apollo");
        return await this.get('/getBooks');
    }

    async deleteBook(payload) {
        return await this.delete(`/getBook/${payload.bookId}`)
    }
}

export default BookAPI