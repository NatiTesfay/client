const BASIC_API = "http://localhost:8080/sales/";


async function getSales() {
  try {
    return await fetch(BASIC_API).then((result) => result.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}
getSales()

async function getSaleById() {
  try {

  } catch (error) {

  }
}
getSaleById()

async function postSale() {
  try {

  } catch (error) {

  }

}
postSale()

async function addSale() {
  try {

  } catch (error) {

  }
}
addSale()

async function deleteSale() {
  try {

  } catch (error) {

  }

}
deleteSale()
