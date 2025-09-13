console.log("===Hour 1: JSON Basics===");

let student = {
    name: "praveen",
    age: 20,
    marks: [80, 90, 78]
};

// convert object -> JSON string
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

// convert JSON string -> object
let parsedObj = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObj);


console.log(" === Hour 2 : AJAX with fetch === ");

fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("Fetched Data:,data"))
 .catch(error => console.error("Error:",error))
 let Books = [
    {
        title: "Book One",
        author: "Author A",
        year: 2001
    },
    {
        title: "Book two",
        author: "Author b",
        year: 2002
    }
];
console.log(Books);

console.log("===Hour 2: AJAX with Fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Fetched Data:",data))
    .catch(error => console.error("Error:",error));
    // ...existing code...
console.log("===Hour 3: AJAX POST with Fetch===");

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log("POST Response:", data))
    .catch(error => console.error("POST Error:", error));
// ...existing code...
console.log("===Hour 3: AJAX POST with Fetch===");

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log("POST Response:", data))
    .catch(error => console.error("POST Error:", error));
// ...existing code...
// ...existing code...
.then(users => {
    let output = "<h2>Users</h2>";
    users.forEach(user => {
        output += `<li>${user.name} (${user.email})</li>`;
   });
   output += "</ul>";
   // document.body.innerHTML = output; // <-- Remove or comment out this line
   console.log(output); // <-- Add this line to print output in Node.js
});
// ...existing code...