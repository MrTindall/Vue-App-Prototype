function CardioExercise(name, amount, isActive) {
    Exercise.call(this, name);
    this.isActive = isActive;
    this.amount = amount ?? 10;
    this.sets = 1;
}

CardioExercise.prototype = Object.create(Exercise.prototype);
CardioExercise.prototype.constructor = CardioExercise;
CardioExercise.type = 'Cardio';