const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            exercise: {
                name: '',
                weight: 0,
                sets: 0,
                remove: false,
            },
            exerciseList: [
                {exercise: 'Bench Press', weight: 185, sets: 3, remove: false},
                {exercise: 'Incline DB Press', weight: 50, sets: 3, remove: false},
                {exercise: 'Pushups', weight: 0, sets: 3, remove: false},
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addSet(item) {
            item.sets++
        },

        subtractSet(item) {
            if(item.sets > 0) {
                item.sets--;
            }
        },

        addWeight(item) {
            item.weight = item.weight + 2.5
        },

        subtractWeight(item) {
            if(item.weight > 0) {
                item.weight -= 2.5;
            }
        },

        // TODO: need to get this working
        removeGrtZeroExercise(removeGrtZero) {
            for(item in removeGrtZero){
                item.sets - item.sets;
            }
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        todoList(){
            return this.exerciseList.filter(function(item) {
                return item.sets > 0;
            })
        },

        completeList(){
            return this.exerciseList.filter(function(item) {
                return item.sets <= 0;
            })
        },

        removeGrtZero(){
            return this.exerciseList.filter(function(item){
                return item.remove == true && item.sets > 0
            })
        },

        removeEquZero(){
            return this.exerciseList.filter(function(item){
                return item.remove == true && item.sets === 0
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
