function test(search = {}) {
  console.log(search.limit);
}

const search = { limit: 10 };
test(search);
