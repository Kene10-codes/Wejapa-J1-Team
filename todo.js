const fs = require('fs') //imported fs

module.exports = {
    //Create Method
    create(title, body) {
        //Fetch TODO from Db file
        const db = this.list();


        //Create New TODO file
        const newTodo = { title, body, completed: false }

        //Merge OLd Data with New Data
        db.push(newTodo);

        //write TODO to DB file
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
        
        //Remove TODO by index
        db.splice(index, 1);

        //Save Data
        this.save(db);
    },


    //update Todo completed status
    toggle(index) {
        //fetch all data
        const db = this.list();

        //fetch TODO by index
        const todo = db[index];

        //Reverse TODO completed
        todo.completed = !todo.completed;

        //sve todo completed
        this.save(db);
    },

    //Save Method
    save(data) {
        fs.writeFileSync("./db.json", JSON.stringify(data));
    }
}