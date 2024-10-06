const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function () {
        return {
            selectedWorkout: 'Start a Workout!',
            tempBuilderWorkoutName: '',
            exercise: {
                workoutName: '',
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                completeRemove: false,

            },
            exerciseList: [
                { workoutName: 'Push', name: 'Bench Press', weight: 185, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Push', name: 'Incline DB Press', weight: 50, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Push', name: 'Pushups', weight: 0, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Legs', name: 'Deadlift', weight: 335, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Legs', name: 'Squat', weight: 235, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Legs', name: 'Lunges', weight: 40, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Pull', name: 'Pullups', weight: 235, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Pull', name: 'DB Row', weight: 235, sets: 3, remove: false, completeRemove: false },
            ],
            builderTempList: []
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        removeGrtZeroExercise(list) {
            for (item of list) {
                item.sets = 0;
                item.remove = false;
            }
        },

        removeEquZeroExercise(list) {
            for (item of list) {
                item.completeRemove = true;
            }
        },

        addExercise() {
            this.exerciseList.push(this.exercise);
            this.exercise = {
                workoutName: '',
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                completeRemove: false,
            };
        },
        addBuildExercise() {
            this.builderTempList.push(this.exercise);
            this.exercise = {
                workoutName: '',
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                completeRemove: false,
            };
        },
        setTempBuilderWorkoutName() {
            tempBuilderWorkoutName = this.exercise.workoutName
        },
        addBuildExerciseToExerciseList() {
            this.builderTempList.forEach((item) => {
                const exerciseToAdd = {
                    workoutName: tempBuilderWorkoutName,
                    name: item.name,
                    weight: item.weight,
                    sets: item.sets,
                    remove: false,
                    completeRemove: false,
                };
                this.exerciseList.push(exerciseToAdd);
            });

            this.builderTempList = [];
            this.exercise = {
                workoutName: '',
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                completeRemove: false,
            };
        },
        finishWorkout(list) {
            list.forEach((item) => {
              item.remove = false;
              item.completeRemove = false;
              item.sets = 3;
            });
            this.selectedWorkout = 'Start';
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {

        // used arrow function because of this for selectedWorkout
        todoList() {
            return this.exerciseList.filter((exercise) => {
                return exercise.sets > 0 && exercise.workoutName.toLowerCase() === this.selectedWorkout.toLowerCase();
            });
        },

        completeList() {
            return this.exerciseList.filter((exercise) => {
                return exercise.sets <= 0 && exercise.workoutName.toLowerCase() === this.selectedWorkout.toLowerCase() && exercise.completeRemove == false;
            });
        },

        removeGrtZero() {
            return this.exerciseList.filter(function (exercise) {
                return exercise.remove == true && exercise.sets > 0
            })
        },

        removeEquZero() {
            return this.exerciseList.filter(function (exercise) {
                return exercise.remove == true && exercise.completeRemove == false
            })
        },

        workoutLibraryList() {
            const uniqueWorkoutNames = new Set();

            this.exerciseList.forEach(function (exercise) {
                uniqueWorkoutNames.add(exercise.workoutName);
            });

            return Array.from(uniqueWorkoutNames);
        },

        exerciseLibraryList() {

        },
    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    watch: {

    }
});
