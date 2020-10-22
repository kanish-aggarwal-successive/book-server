export default {
    getBooks: async (parent, args, context) => {
      const {
        dataSources: {
          BookAPI
        },
      } = context;
      const response = await BookAPI.getBooks(args);
      return response;
    },

    getBookById: async (parent, args, context) => {
      const { options: { bookId } } = args;
      const { dataSources: { BookAPI } } = context;
      const response = await BookAPI.getBookById({bookId});
      return response;
    }
  };