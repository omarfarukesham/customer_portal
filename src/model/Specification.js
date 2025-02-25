class Specification {
  constructor(data) {
    this.title = data.title;
    this.values = data.values?.map((e) => ({
      name: e.name,
      description: e.description,
    }));
  }
}

export default Specification;
