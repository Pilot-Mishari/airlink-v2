const serviceKey = "okas12310alaksjs";
const url = "https://crew.airlinkvirtual.com";

const headers = {
    'Content-Type': 'application/json',
    'x-service-key': serviceKey
};

fetch(url, {
    headers: headers
})
.then(response => response.json())
.then(assignments => {
    console.log(assignments);
})
.catch(error => {
    console.error(error);
});

