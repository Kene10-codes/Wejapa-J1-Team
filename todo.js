

module.exports ={
    //Create Method
    create(title, body) {
        //Fetch TODO from Db file
        const db = this.list();


        //Create New TODO file
        const newTodo = {title, body, completed: false}

        //Merge OLd Data with New Data
        db.push(newTodo);

        //write TODO to DB file
        this.save(db);
    },
}