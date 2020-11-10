export default {
    postBook: async (parent, args, context, info) => {
        const { payload: {
            author,
            country,
            language,
            pages,
            title,
            year
        } } = args;
        const { dataSources: { BookAPI } } = context;
        const response = await BookAPI.postBook({
            author,
            country,
            language,
            pages,
            title,
            year
        });
        return response;
    },

    putBook: async (parent, args, context, info) => {
        const { payload: {
            _id,
            author,
            country,
            language,
            pages,
            title,
            year
        } } = args;
        const { dataSources: { BookAPI } } = context;
        const response = await BookAPI.putBook({
            _id,
            author,
            country,
            language,
            pages,
            title,
            year
        });
        return response;
    },

    deleteBook: async (parent, args, context) => {
        const {payload: { bookId }} = args;
        const { dataSources: { BookAPI } } = context;
        const response = await BookAPI.deleteBook({
            bookId,
        });
        return response;
    }
}