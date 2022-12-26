const BASIC_API = "";



async function getUser() {
  try {
    return await fetch(BASIC_API).then((result) => result.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}
getUser()

async function getUserById() {
  try {

  } catch (error) {

  }
}
getUserById()

async function postSUser() {
  try {

  } catch (error) {

  }

}
postSUser()

async function addUser() {
  try {

  } catch (error) {

  }
}
addUser()

async function deleteUser() {
  try {

  } catch (error) {

  }

}
deleteUser()
