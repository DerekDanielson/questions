const questions = document.querySelectorAll('.question');


questions.forEach(function (question){
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function(){
        console.log(question);
    });
});