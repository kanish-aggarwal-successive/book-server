export default {
    postBook: async (parent, args, context) => {
        const { payload: {
            id,
            author,
            country,
            language,
            pages,
            title,
            year
        } } = args;
        const { dataSources: { eventApi } } = context;
        const response = await eventApi.postBook({
            id,
            author,
            country,
            language,
            pages,
            title,
            year
        });
        return response;
    },

    putBook: async (parent, args, context) => {
        const { payload: {
            id,
            author,
            country,
            language,
            pages,
            title,
            year
        } } = args;
        const { dataSources: { bookApi } } = context;
        const response = await bookApi.putBook({
            id,
            author,
            country,
            language,
            pages,
            title,
            year
        });
        return response.data;
    },

    deleteBook: async (parent, args, context) => {
        const {
            payload: {
                bookId
            }
        } = args;
        const {
            dataSources: {
                bookApi
            }
        } = context;
        const response = await bookApi.deleteBook({
            bookId,
        });
        return response;
    }
}