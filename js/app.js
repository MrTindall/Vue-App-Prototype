const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function () {
        return {
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
                { workoutName: 'Legs', name: 'Squat', weight: 235, sets: 3, remove: false, completeRemove: false },
                { workoutName: 'Pull', name: 'Pullups', weight: 235, sets: 3, remove: false, completeRemove: false },
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addSet(item) {
            item.sets++
        },

        subtractSet(item) {
            if (item.sets > 0) {
                item.sets--;
            }
        },

        addWeight(item) {
            item.weight = item.weight + 2.5
        },

        subtractWeight(item) {
            if (item.weight > 0) {
                item.weight -= 2.5;
            }
        },

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
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
    todoList() {
        return this.exerciseList.filter(function (exercise) {
            return exercise.sets > 0;
        })
    },

    completeList() {
        return this.exerciseList.filter(function (exercise) {
            return exercise.sets <= 0 && exercise.completeRemove == false;
        })
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
