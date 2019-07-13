window.onload = function () {
    let result = {};
    let step = 0;
    function showQuestion(questionNumber) {
        document.querySelector('.question').innerHTML = quiz[step]['q'];
        let answer = '';
        for (let key in quiz[step]['a']) {
            answer += `<li data-v='${key}' class="answer-variant">${quiz[step]['a'][key]}</li>`;
        }
        document.querySelector('.answer').innerHTML = answer;

    }

    document.onclick = function (event) {
        event.stopPropagation();
        if (event.target.classList.contains('answer-variant') && step < quiz.length) {
            // event.target.data
            if (result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++;
            }
            else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if (step == quiz.length) {
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                document.querySelector('.talk').remove();
                document.querySelector('.screenton').remove();
                showResult();
            }
            else {
                showQuestion();
            }
        }
        if (event.target.classList.contains('reload-button')) {
            location.reload();
        }
    }

    function showResult() {
        let key = Object.keys(result).reduce(function (a, b) { return result[a] > result[b] ? a : b });

        let window = document.createElement('img');
        window.src = 'images/' + answers[key]['window'];
        window.classList.add('windowImg');
        document.querySelector('main').appendChild(window);

        let img2 = document.createElement('img');
        img2.src = 'images/' + answers[key]['image'];
        img2.classList.add('result-img');
        document.querySelector('main').appendChild(img2);

        // let finalTolk = document.createElement('img');
        // finalTolk.src = 'images/' + answers[key]['finalTolk'];
        // finalTolk.classList.add('finalTolk');
        // document.querySelector('main').appendChild(finalTolk);

        let YouAre = document.createElement('div');
        YouAre.classList.add('YouAre');
        YouAre.innerHTML = answers[key]['YouAre'];
        document.querySelector('main').appendChild(YouAre);

        let person = document.createElement('div');
        person.classList.add('person');
        person.innerHTML = answers[key]['person'];
        document.querySelector('main').appendChild(person);

        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);

        let downTxt = document.createElement('div');
        downTxt.classList.add('downTxt');
        downTxt.innerHTML = answers[key]['downTxt'];
        document.querySelector('main').appendChild(downTxt);

        document.querySelector('main').classList.add('FinalMain');

        // let reloadButton = document.createElement('button');
        // reloadButton.innerHTML = 'New quiz';
        // reloadButton.classList.add('reload-button');
        // document.querySelector('main').appendChild(reloadButton);
    }

    showQuestion();
}


