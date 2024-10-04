function validate() {
    const title = document.getElementById("title").value;
    const type = document.getElementById("type").value;
    const department = document.getElementById("department").value;
    const country = document.getElementById("country").value;
    const description = document.getElementById("description").value;
    const openingDate = document.getElementById("openingDate").value;

    if (!title || !type || !department || !country || !description || !openingDate) {
        alert("All required fields must be filled out.");
        return false;
    }
    window.alert("Please check and confirm.........");
    return true;
}

document.getElementById('jobForm').addEventListener('submit', function(akash) {
    akash.preventDefault();

    if (validate()) {
        alert('Job data submitted successfully!');
    }
});
