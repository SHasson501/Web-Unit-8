function myFormSubmits(event) {
    event.preventDefault();
    downloadFormData();
    thanks();
}

function downloadFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    let dataString = '';

    for (let [key, value] of formData.entries()) {
        dataString += `${key}: ${value}\n`;
    }

    const blob = new Blob([dataString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formData.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function thanks() {
    alert("Thank you for your submission!");
    window.location.href="thank-you.html";
}
