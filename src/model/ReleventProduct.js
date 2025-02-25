import Product from './Product';

class RelevantProduct {
  constructor(data) {
    this.id = data.id;
    this.productId = data.productId;
    this.status = data.status;
    this.type = data.type;
    this.relevantProductIds = data.relevantProductIds || [];
    this.relevantProducts = (data.relevantProducts || []).map(
      (p, index) => new Product({ ...p, serial: index + 1 }),
    );
  }
}

export default RelevantProduct;
