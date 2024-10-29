
const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function () {
        return {
            selectedWorkout: null,
            tempBuilderWorkoutName: '',
            
            // TODO: Ask if this is needed and if so, doesnt it need to be changed to match new data structure
            exercise: {
                name: '',
                amount: 0,
                sets: 3
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
                        new WeightExercise('Arnold Press', 60, 4),
                        new CardioExercise('Running', 45),
                        {name: 'Bench Press', amount: 185, sets: 3, remove: false, isActive: false },
                        { name: 'Incline DB Press', amount: 50, sets: 3, remove: false, isActive: false },
                        { name: 'Pushups', amount: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Cable Crossover', amount: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Shoulder Press', amount: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Lateral Raises', amount: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Front Raise', amount: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Tricep Extensions', amount: 0, sets: 3, remove: false, isActive: false },
                        { name: 'Skull Crushers', amount: 0, sets: 3, remove: false, isActive: false },
                    ] 
                },
                {
                    title: 'Pull',
                    exercises: [
                        { name: 'Pullups', amount: 235, sets: 3, remove: false, isActive: false },
                        { name: 'DB Row', amount: 235, sets: 3, remove: false, isActive: false },
                    ] 
                },
                {
                    title: 'Legs',
                    exercises: [
                        { name: 'Deadlift', amount: 335, sets: 3, remove: false, isActive: false },
                        { name: 'Squat', amount: 235, sets: 3, remove: false, isActive: false },
                        { name: 'Lunges', amount: 40, sets: 3, remove: false, isActive: false },
                    ] 
                },
                
            ],
            builderTempList: [],
            // tempWorkout: 
            // {
            //     title: '',
            //     exercises: [
            //         // {
            //         //     name: 'Benc Press', 
            //         //     amount: 0, 
            //         //     sets: 0, 
            //         //     remove: false, 
            //         //     isActive: false 
            //         // }
            //     ]
            // },
            tempWorkout: {
                title: '',
                exercises: []
            },
    }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        chooseWorkout() {
            this.tempWorkout = {
                title: this.selectedWorkout.title,
                exercises: [...this.selectedWorkout.exercises]
            };
            this.tempWorkout.exercises.forEach((exercise) => {
                exercise.isActive = true;
            })
        },


        // removeExercise(list) {
        //     for (item of list) {
        //         item.sets = 0;
        //         item.remove = true;
        //     }
        // },

        // setIsActive(list) {
        //     for (item of list) {
        //         item.isActive = true;
        //     }
        // },
        createWorkout() {
            if (this.newWorkout.title && this.builderTempList.length > 0) {
                this.workouts.push({
                    title: this.newWorkout.title,
                    exercises: this.builderTempList.map(exercise => ({
                        name: exercise.name,
                        amount: exercise.amount,
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
                amount: 0,
                sets: 3,
                remove: false,
                isActive: false,
            };
        },
        addBuildExercise() {
            this.builderTempList.push(this.exercise);
            this.exercise = {
                name: '',
                amount: 0,
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
                    amount: item.amount,
                    sets: item.sets,
                    remove: false,
                    isActive: false,
                };
                this.workouts.push(exerciseToAdd);
            });
        

            this.builderTempList = []; 
            this.exercise = {
                name: '',
                amount: 0,
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
                    amount: 0,
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
        
        removeExerciseList() {
            return this.tempWorkout?.exercises.filter((exercise) => exercise.sets > 0 && exercise.remove) ?? [];
        },
        
        isActiveList() {

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
