// STEP 1
  // function Cat(){}
  // const Dog = function() {}


// STEP 2
//// Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
////named class
// class Cat {

// }
// const cat1 = new Cat()
// const cat2 = new Cat()
// const cat3 = new Cat()

// //anonymous class
// function Dog() {
     
// }
// const dog1 = new Dog()
// const dog2 = new Dog()
// const dog3 = new Dog()

// STEP 3
//// Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 
// class Animal {
//       constructor(){
//        console.log('The Animal  has been created!')
//        }
// }
// const animal1 = new Animal();



// STEP 4
//// Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

// class Animal {
//       constructor(breed, color){
//         this.breed = breed;
//         this.color = color;
//         this.age = 1;
//        console.log(`The new ${this.color} ${this.breed} has been created`)
//        }
// }
// const Cotton = new Animal(`Poodle`, `Creamy-White`);

// STEP 5
////Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 


// class Animal {
//       constructor(type,breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length  = length;
//         }
//        bark = function() {
//               console.log(`The  ${this.type} ${this.breed} ${this.color} ${this.height} ${this.length} has barked!`);
//        }
//        static eat = function() { console.log(`Now she's eating!`)}
// }
// const Cotton = new Animal(`Dog`,`Poodle`, `Creamy-White`,`1feet`,`50cm`);
// Cotton.bark();
// Animal.eat();

// STEP 6
////Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
// const Animal = {
//    name : 'Cotton',
//    breed: 'Poodle',
//    age : '5years old',
//    color: 'Creamy-white',
//    Weight: '10pounds'
// };

// //iterate over the user object
// for(const key in Animal) {
//    if (Animal.hasOwnProperty(key)) {
//    console.log(`${key}: ${Animal[key]}`);
//    }
// }


// STEP 7
//Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

    class Animal {
      constructor(name, type, color) {
        this._type = type;
        this._color = color;
      }
      get type() { return this._type}
      set type(newType) { this._type = newType}
      get color() { return this._color}
      set color(newColor) { this._color = newColor}
      bark = () => {
          console.log (`The can is meowing!` )
 }
}  
    const animal1 = new Animal(`Cat`, `Snow Mink`);
    console.log (`The ${this._color}  ${this._type}   is meowing!`);
    // const  = new Animal(`Dog`, `Creamy White`);
    // console.log (`The ${this._type}   ${this.type} is barking!`);



// STEP 8
//Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”


// STEP 9
//Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.