
const BASIC_API = "http://localhost:8080/guitar";

export  async function getGuitar() {
    try {
        return await fetch(BASIC_API).then(result => result.json())
    } catch (error) {alert("error")}
}
