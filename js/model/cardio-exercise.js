function CardioExercise(name, amount, sets, isActive) {
    Exercise.call(this, name);
    this.isActive = isActive;
    this.amount = amount ?? 10;
    this.sets = sets;

    this.addDuration = function () {
        this.amount++
    }

    this.subtractDuration = function () {
        if (this.amount > 1) {
            this.amount--;
        }
    }
}

CardioExercise.prototype = Object.create(Exercise.prototype);
CardioExercise.prototype.constructor = CardioExercise;
CardioExercise.type = 'Cardio';