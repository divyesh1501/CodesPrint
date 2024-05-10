// Fetch API================
// GET-Methd==========

const dataList = document.getElementById('dataList')

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        if (!res.ok) {
            throw new Error('Network is not responding')
        }
        return res.json();
    })
    .then(data  => {
        data.forEach(e => {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `<td>${e.id}</td>
                            <td>${e.title}</td>`;

        dataList.appendChild(newRow);
    });
})
    .catch(error => console.log("error"));


// Post-Method=======
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'hello',
        body: 'ok',
        userId: 1,
    }),
    headers: {
        'content-type': 'application/json;charsetaUTF-8',
    },
})
    .then((res) => res.json())
    .then((json) => console.log(json));


// PUT-Method==========

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'hello',
        body: 'ok',
        userId: 1,
    }),
    headers: {
        'content-type': 'application/json;charsetaUTF-8',
    },
})
    .then((res) => res.json())
    .then((json) => console.log(json));

// DELET-Method===============

fetch('https://jsonplaceholder.typicode.com/posts/101', {
    method: "DELETE"
})

