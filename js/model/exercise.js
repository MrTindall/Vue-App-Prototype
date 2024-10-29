function Exercise(name) {
    this.name = name ?? '';
    this.remove = false;
    this.isActive = false


    this.removeExercise = function(list) {
        for (item of list) {
            item.sets = 0;
            item.remove = true;
        }
    }

    this.setIsActive = function(list) {
        for (item of list) {
            item.isActive = true;
        }
    }
    
}