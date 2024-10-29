function Exercise(name, amount) {
    this.name = name;
    this.amount = amount;
    this.remove = false;
    this.isActive = false


    this.removeExercise = function(list) {
        for (item of list) {
            item.sets = 0;
            item.remove = true;
        }
    }

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

    this.addWeight = function () {
        this.amount = this.amount + 2.5
    }

    this.subtractWeight = function () {
        if (this.amount > 0) {
            this.amount -= 2.5;
        }
    }
    
}