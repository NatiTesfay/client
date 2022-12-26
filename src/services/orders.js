const BASIC_API = ""

async function getOrder() {
  try {
    return await fetch(BASIC_API).then((result) => result.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}
getOrder()

async function getOrderById() {
  try {

  } catch (error) {

  }
}
getOrderById()

async function postOrders() {
  try {

  } catch (error) {

  }

}
postOrders()

async function addOrders() {
  try {

  } catch (error) {

  }
}
addOrders()

async function deleteOrders() {
  try {

  } catch (error) {

  }

}
deleteOrders()
