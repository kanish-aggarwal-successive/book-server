export default {
    postBook: async (parent, args, context) => {
        const { payload: {
            id,
            author,
            country,
            imageLink,
            language,
            link,
            pages,
            title,
            year
        } } = args;
        const { dataSources: { eventApi } } = context;
        const response = await eventApi.postBook({
            id,
            author,
            country,
            imageLink,
            language,
            link,
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
            imageLink,
            language,
            link,
            pages,
            title,
            year
        } } = args;
        const { dataSources: { bookApi } } = context;
        const response = await bookApi.putBook({
            id,
            author,
            country,
            imageLink,
            language,
            link,
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