function Exercise(name, amount) {
    this.name = name;
    this.amount = amount;


    this.removeExercise = function(list) {
        for (item of list) {
            item.sets = 0;
            item.remove = true;
        }
    }

// Might use later
    // this.setIsActive = function(list) {
    //     for (item of list) {
    //         item.isActive = true;
    //     }
    // }
    
    this.addSet = function () {
        this.sets++
    }

    this.subtractSet = function () {
        if (this.sets > 0) {
            this.sets--;
        }
    }

    
    
}