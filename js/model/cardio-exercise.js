function CardioExercise(name, amount, isActive) {
    Exercise.call(this, name);
    this.isActive = isActive;
    this.amount = amount ?? 10;
}

CardioExercise.prototype = Object.create(Exercise.prototype);
CardioExercise.prototype.constructor = CardioExercise;
WeightExercise.type = 'Cardio';