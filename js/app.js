const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function () {
        return {
            selectedWorkout: null,
            tempBuilderWorkoutName: '',
            exercise: {
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                isActive: false,
            },
            newWorkout: {
                title: '',
            },
            workouts: [
                {
                    title: 'Push',
                    exercises: [
                        {name: 'Bench Press', weight: 185, sets: 3, remove: false, isActive: false },
                        { name: 'Incline DB Press', weight: 50, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', weight: 0, sets: 3, remove: false, isActive: false },
                    ] 
                },
                {
                    title: 'Pull',
                    exercises: [
                        { name: 'Pullups', weight: 235, sets: 3, remove: false, isActive: false },
                        { name: 'DB Row', weight: 235, sets: 3, remove: false, isActive: false },
                    ] 
                },
                {
                    title: 'Legs',
                    exercises: [
                        { name: 'Deadlift', weight: 335, sets: 3, remove: false, isActive: false },
                        { name: 'Squat', weight: 235, sets: 3, remove: false, isActive: false },
                        { name: 'Lunges', weight: 40, sets: 3, remove: false, isActive: false },
                    ] 
                },
                
            ],
            builderTempList: [],
            tempWorkout: 
                {
                    title: '',
                    exercises: [{
                        name: 'Benc Press', 
                        weight: 0, 
                        sets: 0, 
                        remove: false, 
                        isActive: false 
                    }]
                },
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        chooseWorkout() {
            this.tempWorkout = {
                title: this.selectedWorkout.title,
                exercises: this.selectedWorkout.exercises.map(exercise => ({
                    name: exercise.name,
                    weight: exercise.weight,
                    sets: exercise.sets,
                    remove: false,
                    isActive: true
                }))
            };
        },

        removeGrtZeroExercise(list) {
            for (item of list) {
                item.sets = 0;
                item.remove = false;
            }
        },

        removeEquZeroExercise(list) {
            for (item of list) {
                item.isActive = true;
            }
        },
        createWorkout() {
            if (this.newWorkout.title && this.builderTempList.length > 0) {
                this.workouts.push({
                    title: this.newWorkout.title,
                    exercises: this.builderTempList.map(exercise => ({
                        name: exercise.name,
                        weight: exercise.weight,
                        sets: exercise.sets,
                        remove: false,
                        isActive: false,
                    }))
                });

                this.newWorkout = { title: '' };
                this.builderTempList = [];
            } else {
                alert("Please provide a valid workout name and at least one exercise.");
            }
        },
        addExercise() {
            this.exerciseList.push(this.exercise);
            this.exercise = {
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                isActive: false,
            };
        },
        addBuildExercise() {
            this.builderTempList.push(this.exercise);
            this.exercise = {
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                isActive: false,
            };
        },
        setTempBuilderWorkoutName() {
            tempBuilderWorkoutName = this.exercise.workoutName
        },
        addBuildExerciseToExerciseList() {
            this.builderTempList.forEach((item) => {
                const exerciseToAdd = {
                    name: item.name,
                    weight: item.weight,
                    sets: item.sets,
                    remove: false,
                    isActive: false,
                };
                this.workouts.push(exerciseToAdd);
            });
        

            this.builderTempList = []; 
            this.exercise = {
                name: '',
                weight: 0,
                sets: 3,
                remove: false,
                isActive: false,
            };
        },
        finishWorkout() {
            this.tempWorkout = // Reset tempWorkout
            {
                title: '',
                exercises: [{
                    name: '',
                    weight: 0,
                    sets: 0,
                    remove: false,
                    isActive: false
                }]
            },
            
          this.selectedWorkout = null; // Reset selectedWorkout
        },
    },

    // computed: values that are updated and cached if dependencies change
    computed: {

        todoList() {
            return this.tempWorkout?.exercises.filter((exercise) => exercise.sets > 0 && !exercise.remove && exercise.isActive === true) ?? [];
        },

        completeList() {
            return this.tempWorkout?.exercises.filter((exercise) => exercise.sets <= 0 && exercise.isActive === true || exercise.remove && exercise.isActive === true) ?? [];
        },
        
        removeGrtZero() {
            return this.tempWorkout?.exercises.filter((exercise) => exercise.sets > 0 && exercise.remove) ?? [];
        },
        
        removeEquZero() {

            return this.tempWorkout?.exercises.filter((exercise) => exercise.remove && !exercise.isActive) ?? [];
        },
    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    watch: {

    }
});
