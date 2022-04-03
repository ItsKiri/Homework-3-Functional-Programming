import minimongo from "minimongo";
function CartManager(dbName = "CMDB", colName = "product") {
  const IndexedDb = minimongo.IndexedDb;
  const cm = {};
  cm.get = (query = {}) => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        () => {
          db.addCollection(
            "products",
            () => {
              db.products.find(query).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  cm.add = (data) => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        () => {
          db.addCollection(
            "products",
            () => {
              db.products.upsert(data, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  cm.remove = (data) => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        () => {
          db.addCollection(
            "products",
            () => {
              db.products.remove(data, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  return cm;
}
export default CartManager;
