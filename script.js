document.getElementById("button1").addEventListener("click", function() {
    var reps = [1, 5, 10, 100];
    var workouts = ["Pushups", "Situps", "Squats", "Heaviest Bicept Curl", "Nutsack puller", "Heaviest Bench Press", "Leg Raises", "Chest Press", "Lat pulldowns", "Leg extensions"];

    var RepGeneration = reps[Math.floor(Math.random() * reps.length)];
    var WorkoutGeneration = workouts[Math.floor(Math.random() * workouts.length)];

});