function WeightExercise(name, amount, sets, isActive) {

    Exercise.call(this, name);
    this.isActive = isActive;
    this.amount = amount ?? 0;
    this.sets = sets ?? 3;

    this.addWeight = function () {
        this.amount = this.amount + 2.5
    }

    this.subtractWeight = function () {
        if (this.amount > 0) {
            this.amount -= 2.5;
        }
    }
}
WeightExercise.prototype = Object.create(Exercise.prototype);
WeightExercise.prototype.constructor = WeightExercise;
WeightExercise.type = 'Weight';