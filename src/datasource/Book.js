import pkg from 'apollo-datasource-rest';
import config from './../config/configurations.js'

const { RESTDataSource } = pkg;

class BookAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.url
    }

    async getBookById(id) {
        return await this.get(`/${id.bookId}`);
    }

    async getBooks() {
        console.log("Apollo");
        return await this.get('/getBooks');
    }
}

export default BookAPI