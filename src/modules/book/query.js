export default {
    getBooks: async (parent, args, context, info) => {
      const { dataSources: { BookAPI } } = context;
      const books = await BookAPI.getBooks(args);
      return books.books;
    },

    getBookById: async (parent, args, context, info) => {
      const { dataSources: { BookAPI } } = context;
      const book = await BookAPI.getBookById(args._id)
      return book
  }
  };