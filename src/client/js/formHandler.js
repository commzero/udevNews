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
                document.getElementById('score').innerHTML = 'Score: ' + scoreCheck(res.score_tag);
                document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            });
    } else {
        alert('Invalid Input Name');
    }
}

const scoreCheck = (score) => {
    let display;
    switch (score) {
        case 'P+':
            display = 'strong positive score';
            break;
        case 'P':
            display = 'positive score';
            break;
        case 'NEW':
            display = 'neutral score';
            break;
        case 'N':
            display = 'negative score';
            break;
        case 'N+':
            display = 'strong negative score';
            break;
        case 'NONE':
            display = 'no score';
    }
    return display;
}

export { handleSubmit, scoreCheck };
