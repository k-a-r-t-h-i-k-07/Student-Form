document.getElementById('btn').addEventListener("click", function () {
    var studentName = document.getElementById('name').value;
    var studentAge = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var studentCourses = document.getElementById('Courses').selectedOptions[0]?.text;
    var studentEmail = document.getElementById('email').value;
    var table = document.getElementById("displayTable")
    var trow = document.createElement('tr');
    var tableDiv = document.getElementById('display');
    console.log("Student Age:", studentAge);
    trow.innerHTML = `
        <td class="w-1/6 text-center py-5">${studentName}</td>
        <td class="w-1/6 text-center py-5">${studentAge}</td>
        <td class="w-1/6 text-center py-5">${gender || "Not Selected"}</td> <!-- Default value if no gender selected -->
        <td class="w-1/6 text-center py-5">${studentCourses || "Not Selected"}</td>
        <td class="w-1/6 text-center py-5">${studentEmail}</td>
        <td class="w-1/6 text-center py-5"><button onclick="deleteRow()" class=" btn bg-red-400 px-4 py-1 rounded border-solid text-white font-semibold">Delete</button></td>
    `
    table.querySelector('tbody').appendChild(trow);

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
    document.getElementById('Courses').value = '';
    document.getElementById('email').value = '';

    tableDiv.setAttribute("class", "block");

});


document.getElementById('displayTable').addEventListener("click", function (event) {
    if (!event.target.classList.contains("btn")) {
        return
    }
    var btn = event.target;
    btn.closest('tr').remove();
});