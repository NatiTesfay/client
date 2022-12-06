const BASIC_API = "http://localhost:8080/products/"

async function getProducts() {
  try {
    return await fetch(BASIC_API).then((result) => result.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}
getProducts()

async function getProductById() {
  try {

  } catch (error) {

  }
}
getProductById()

async function postProduct() {
  try {

  } catch (error) {

  }

}
postProduct()

async function addProduct() {
  try {

  } catch (error) {

  }
}
addProduct()

async function deleteProduct() {
  try {

  } catch (error) {

  }

}
deleteProduct()
