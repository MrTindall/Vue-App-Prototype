const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            exercise: {
                name: '',
                weight: 0,
                sets: 0,
                remove: false,
                completeRemove: false,

            },
            exerciseList: [
                {name: 'Bench Press', weight: 185, sets: 3, remove: false, completeRemove: false},
                {name: 'Incline DB Press', weight: 50, sets: 3, remove: false, completeRemove: false},
                {name: 'Pushups', weight: 0, sets: 3, remove: false, completeRemove: false},
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addSet(exercise) {
            exercise.sets++
        },

        subtractSet(exercise) {
            if(exercise.sets > 0) {
                exercise.sets--;
            }
        },

        addWeight(exercise) {
            exercise.weight = exercise.weight + 2.5
        },

        subtractWeight(exercise) {
            if(exercise.weight > 0) {
                exercise.weight -= 2.5;
            }
        },

        removeGrtZeroExercise(list) {
            for(exercise of list) {
                exercise.sets = 0;
                exercise.remove = false;
            } 
        },

        removeEquZeroExercise(list) {
            for(exercise of list) {
                exercise.completeRemove = true;
            } 
        },
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        todoList(){
            return this.exerciseList.filter(function(exercise) {
                return exercise.sets > 0;
            })
        },

        completeList(){
            return this.exerciseList.filter(function(exercise) {
                return exercise.sets <= 0 && exercise.completeRemove == false;
            })
        },

        removeGrtZero(){
            return this.exerciseList.filter(function(exercise){
                return exercise.remove == true && exercise.sets > 0 
            })
        },

        removeEquZero(){
            return this.exerciseList.filter(function(exercise){
                return exercise.remove == true && exercise.completeRemove == false
            })
        },

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    watch: {

    }
});
