const range = n => [...Array(n).keys()];

const FETCH_ARTICLES = () => {
  return Promise.resolve({
    response: {
      result: range(10).map(i => ({
        webUrl: `https://abc${i}.com`,
        webTitle: `Some title ${i}`
      }))
    }
  });
};

export default FETCH_ARTICLES;
