function Person(fullName, favColor){
    this.fullName = fullName;
    this.favColor = favColor;
    this.greet = function(){
        console.log("hi , iam"+this.fullName);
    }
}

module.exports = Person;