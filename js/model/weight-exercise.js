function WeightExercise(name, amount, sets) {

    Exercise.call(this, name);
    Exercise.call(this.isActive);
    this.amount = amount ?? 0;
    this.sets = sets ?? 3;



    
}
WeightExercise.prototype = Object.create(Exercise.prototype);
WeightExercise.prototype.constructor = WeightExercise;
WeightExercise.type = 'Weight';