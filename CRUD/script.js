let id = "";

// Clear local storage (for testing purposes)
// localStorage.clear();

selectData();

function createData() {
    document.getElementById('msg').innerHTML = '';
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let num = document.getElementById('num').value;

    // Regex patterns for validation
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numPattern = /^\d{10}$/; // Assuming the number should be exactly 10 digits

    if (name === '' || email === '' || num === '') {
        document.getElementById('msg').innerHTML = 
        '<p class="text-red-600 font-bold">Please fill all fields</p>';
    } else if (!namePattern.test(name)) {
        document.getElementById('msg').innerHTML = 
        '<p class="text-red-600 font-bold">Invalid name. Only letters and spaces are allowed.</p>';
    } else if (!emailPattern.test(email)) {
        document.getElementById('msg').innerHTML = 
        '<p class="text-red-600 font-bold">Invalid email format.</p>';
    } else if (!numPattern.test(num)) {
        document.getElementById('msg').innerHTML = 
        '<p class="text-red-600 font-bold">Invalid number. It should be exactly 10 digits.</p>';
    } else {
        let arr = JSON.parse(localStorage.getItem('crud')) || [];
        let data = { name: name, email: email, num: num };

        if (id === '') {
            // Adding new data
            arr.push(data);
            document.getElementById('msg').innerHTML =
                '<p class="text-green-600 font-bold">Data added successfully..!!</p>';
        } else {
            // Updating existing data
            arr[id] = data;
            document.getElementById('msg').innerHTML =
                '<p class="text-yellow-500 font-bold">Data updated successfully..!!</p>';
            id = ""; // Reset the id after update
        }
        localStorage.setItem('crud', JSON.stringify(arr));
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('num').value = '';
        selectData();
    }
}

function selectData() {
    let arr = JSON.parse(localStorage.getItem('crud'));
    if (arr != null) {
        let tdata = '';
        let sno = 1;
        for (let k in arr) {
            tdata += `
                <tr>
                    <td class="border border-black px-4 py-2">${sno}</td>
                    <td class="border border-black px-4 py-2">${arr[k].name}</td>
                    <td class="border border-black px-4 py-2">${arr[k].email}</td>
                    <td class="border border-black px-4 py-2">${arr[k].num}</td>
                    <td class="border border-black px-4 py-2">
                    <a href="#" class="fa-solid fa-pen-to-square text-blue-500" onclick='updateData(${k})'>
                    </a>
                    </td>
                    <td class="border border-black px-4 py-2">
                    <a href="#" class="fa-solid fa-trash text-red-500" onclick='deleteData(${k})'>
                    </a>
                    </td>
                </tr>`;
            sno++;
        }
        document.getElementById('root').innerHTML = tdata;
    }
}

function updateData(eid) {
    let arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById('name').value = arr[eid].name;
    document.getElementById('email').value = arr[eid].email;
    document.getElementById('num').value = arr[eid].num;
    id = eid; // Set the global id to the current entry's id
}


function deleteData(eid) {
    if (confirm("Are you sure you want to delete this data?")) {
        let arr = JSON.parse(localStorage.getItem('crud'));
        arr.splice(eid, 1);
        localStorage.setItem('crud', JSON.stringify(arr));
        selectData();
        document.getElementById('msg').innerHTML =
            '<p class="text-red-600 font-bold">Data deleted successfully..!!</p>';
    }
}
