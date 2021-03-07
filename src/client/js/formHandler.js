function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    ;

    if (checkForName(formText)) {
        console.log("::: Form Submitted :::");
        fetch('http://localhost:8080/test')
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = res.message;
                document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
                document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
                document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            });
    } else {
        alert('Invalid Input Name');
    }
}

export { handleSubmit };
