document.getElementById('create-plan-button').addEventListener('click', calculateWorkout);

function calculateWorkout() {
    let totalDuration = 0;
    let exerciseList = [];

    const cardio = document.getElementById('cardio');
    const strength = document.getElementById('strength');
    const flexibility = document.getElementById('flexibility');

    const categories = [cardio, strength, flexibility];
    
    categories.forEach(category => {
        Array.from(category.selectedOptions).forEach(option => {
            totalDuration += parseInt(option.value);
            exerciseList.push(option.text);
        });
    });

    if (document.getElementById('warmup').checked) {
        totalDuration += parseInt(document.getElementById('warmup').value);
        exerciseList.push('Warm-up (5 mins)');
    }

    if (document.getElementById('cooldown').checked) {
        totalDuration += parseInt(document.getElementById('cooldown').value);
        exerciseList.push('Cool-down (5 mins)');
    }

    document.getElementById('total-duration').textContent = `Total Duration: ${totalDuration} mins`;
    const exerciseListElement = document.getElementById('exercise-list');
    exerciseListElement.innerHTML = '';
    exerciseList.forEach(exercise => {
        let li = document.createElement('li');
        li.textContent = exercise;
        exerciseListElement.appendChild(li);
    });

    showMotivationalPopup();
    console.log('Workout plan created:', exerciseList);
}

function showMotivationalPopup() {
    alert("Keep going! You're doing great!");
}