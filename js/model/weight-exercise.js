export function WeightExercise(name, weight, sets) {
    this.name = name ?? '';
    this.weight = weight ?? 0;
    this.sets = sets ?? 3;
}