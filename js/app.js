
const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function () {
        return {
            exerciseType: Object.freeze({
                WEIGHT: 'Weight',
                CARDIO: 'Cardio',
            }),
            selectedExerciseType: null,
            selectedWorkout: null,
            tempBuilderWorkoutName: '',
            
            exercise: {
                // name: '',
                // amount: 0,
                // sets: 3,
                // remove: false,
                // isActive: false,
            },
            newWorkout: {
                title: '',
            },
            workouts: [
                {
                    title: 'Push',
                    exercises: [
                        new CardioExercise('Run', 10, 1),
                        new WeightExercise('Arnold Press', 185, 4),
                        new WeightExercise('Bench Press', 185, 4),
                        new WeightExercise('Incline DB Press', 50, 4),
                        new WeightExercise('Pushups', 0, 4),
                        new WeightExercise('Cable Crossover', 60, 4),
                        new WeightExercise('Shoulder Press', 40, 4),
                        new WeightExercise('Lateral Raises', 15, 4),
                        new WeightExercise('Front Raise', 15, 4),
                        new WeightExercise('Tricep Extensions', 40, 4),
                        new WeightExercise('Skull Crushers', 60, 4),
                    ] 
                },
                {
                    title: 'Pull',
                    exercises: [
                        new CardioExercise('Run', 10, 1, 1),
                        new WeightExercise('Pullups', 0, 4),
                        new WeightExercise('DB Row', 185, 4),
                    ] 
                },
                {
                    title: 'Legs',
                    exercises: [
                        new CardioExercise('Run', 10, 12, 1),
                        new WeightExercise('Deadlift', 335, 3),
                        new WeightExercise('Squat', 235, 3),
                        new WeightExercise('Lunges', 40, 4),
                    ] 
                },
                
            ],
            builderTempList: [],
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
                console.log(exercise)
            })
            
        },

        createWorkout() {
            if (this.newWorkout.title && this.builderTempList.length > 0) {
                if (this.selectedExerciseType === this.exerciseType.WEIGHT) {
                    this.workouts.push({
                        title: this.newWorkout.title,
                        exercises: this.builderTempList.map(exercise => 
                            new WeightExercise(exercise.name, exercise.amount, exercise.sets, exercise.isActive = false)
                        )
                    });
                } else if (this.selectedExerciseType === this.exerciseType.CARDIO) {
                    this.workouts.push({
                        title: this.newWorkout.title,
                        exercises: this.builderTempList.map(exercise => 
                            new CardioExercise(exercise.name, exercise.amount, exercise.isActive = false)
                        )
                    });
                }
        
                // Reset fields after adding workout
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
            let newExercise;
            // Check if the current exercise is Cardio or Weight
            if (this.selectedExerciseType === this.exerciseType.CARDIO) {
                newExercise = new CardioExercise(this.exercise.name, this.exercise.amount, this.exercise.sets);
            } else if(this.selectedExerciseType === this.exerciseType.WEIGHT) {
                newExercise = new WeightExercise(this.exercise.name, this.exercise.amount, this.exercise.sets);
            }
        
            // Push the new exercise to the list
            this.builderTempList.push(newExercise);
        
            // Reset the exercise input fields
            this.exercise = {
                name: '',
                amount: 0,
                sets: 3,
                remove: false,
                isActive: false,
                isCardio: false, // Ensure to reset the exercise type
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
                exercises: []
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
