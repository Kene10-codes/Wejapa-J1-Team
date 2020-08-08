const fs = require('fs') //imported fs

module.exports = {
    //Create Method
    create(title, body) {
        //Fetch TODO from Db file
        const db = this.list();


        //Create New Todo file
        const newTodo = { title, body, completed: false }

        //Merge Old Data with New Data
        db.push(newTodo);

        //write Todo to DB file
        this.save(db);
    },

    //List Method
    list() {
        return JSON.parse(fs.readFileSync("./db.json")); 
    },

    //show method
    show(index) {
        const db = this.list();
        return db[index];
    },

    //remove method
    remove(index) {
        //Fetch data
        const db = this.list();
        
        //Remove Todo by index
        db.splice(index, 1);

        //Save Data
        this.save(db);
    },


    //Update Todo completed status
    toggle(index) {
        //Fetch all data
        const db = this.list();

        //Fetch Todo by index
        const todo = db[index];

        //Reverse Todo completed
        todo.completed = !todo.completed;

        //Save Todo completed
        this.save(db);
    },

    //Save Method
    save(data) {
        fs.writeFileSync("./db.json", JSON.stringify(data));

    }
}
