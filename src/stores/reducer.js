import authors from "../data";
const initialState = {
  authors: authors
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR": {
      const newAuthor = {
        id: state.authors.length + 1,
        first_name: "First Name",
        last_name: "Enter Author",
        imageUrl:
          "https://owl.excelsior.edu/wp-content/uploads/sites/2/2017/10/unknown-author.png",
        books: [
          {
            title: "Unknown book",
            color: " color"
          }
        ]
      };
      const newAuthors = state.authors.concat(newAuthor);
      return {
        ...state,
        authors: newAuthors
      };
    }
    case "DELETE_AUTHOR": {
      const newAuthors = state.authors.filter(author => {
        return author.id !== action.payload.id;
      });
      return {
        ...state,
        authors: newAuthors
      };
    }
    default:
      return state;
  }
};
