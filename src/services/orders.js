const BASIC_API = "http://localhost:8080/order/";


async function getOrders() {
  try {
    return await fetch(BASIC_API).then((result) => result.json());
  } catch (error) {
    alert("error");
  }
}
getOrders()

async function getOrderById() {
  try {

  } catch (error) {

  }
}
getOrderById()

async function postOrder() {
  try {

  } catch (error) {

  }

}
postOrder()

async function addOrder() {
  try {

  } catch (error) {

  }
}
addOrder()

async function deleteOrder() {
  try {

  } catch (error) {

  }

}
deleteOrder()
