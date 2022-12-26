const BASIC_API = "";


async function getRecords() {
  try {
    return await fetch(BASIC_API).then((result) => result.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}
getRecords()

async function getRecordsById() {
  try {

  } catch (error) {

  }
}
getRecordsById()

async function postRecords() {
  try {

  } catch (error) {

  }

}
postRecords()

async function addRecords() {
  try {

  } catch (error) {

  }
}
addRecords()

async function deleteRecord() {
  try {

  } catch (error) {

  }

}
deleteRecord()
