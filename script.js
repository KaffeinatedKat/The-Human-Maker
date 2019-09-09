function Human() {
   var Mnames = ["James", "Zander", "Boston", "Charles", "Bob", "Billy", "Xander", "Ethan", "Zach", "Brennan", "Gage", "Ammon", "Easton", "Mario", "Phoenix", "John", "James", "Liam", "Noah", "Richie", "Micheal", "Eric", "Justin", "Haden"];
   var Fnames = ["Presley", "Erica", "Peyton", "Marissa", "Kim", "Amelia", "Emma", "Anna", "Serenity", "Darian", "Maya", "Abby", "Lexi", "Alyson", "Jolene", "Mindee", "Lesli", "Annie", "Geogia", "Lola", "Taya", "Alex"];

   var Colors = ["Blue", "Pink", "Black", "Orange", "Purple", "Red", "White", "Gray", "Dark Blue", "Rainbow"]
   var Mrand = Math.floor(Math.random() * Mnames.length)
   var Frand = Math.floor(Math.random() * Fnames.length)
   var age = Math.floor(Math.random() * 86)
   var humans = 0
   var CTS = Math.floor(Math.random() * 3)
   var smoke = "No"
   if (Math.floor(Math.random() * 2) === 1) {
       Gend = "Male"
   } else {
       Gend = "Female"
   }
   document.getElementById("Gender").innerHTML = "Gender: " + Gend;
    if (Gend === "Male") {
       name = Mnames[Mrand]
       document.getElementById("Age").innerHTML = "Age: " + age
       document.getElementById("Name").innerHTML = "Name: " + name
    
   } else if (Gend === "Female") {
      name = Fnames[Frand]
      document.getElementById("Age").innerHTML = "Age: " + age
       document.getElementById("Name").innerHTML = "Name: " + name
   }
    if (CTS === 1){
        smoke = "Yes"
        document.getElementById("Smokes").innerHTML = "Smokes: " + smoke
    } else if (CTS !== 1){
        smoke = "No"
        document.getElementById("Smokes").innerHTML = "Smokes: " + smoke
    }
    
    if (Gend === "Male") {
        inches = Math.floor(age * 3)
        feet = Math.floor(inches + 20)
        finalTall = Math.floor(feet / 12)
        demInchers = Math.floor(Math.random() * 11)
        document.getElementById("Tallness").innerHTML = "Height: " + finalTall + "' " + demInchers
    } else if (Gend === "Female") {
        inches = Math.floor(age * 3)
        feet = Math.floor(inches + 29)
        finalTall = Math.floor(feet / 12)
        demInchers = Math.floor(Math.random() * 9)
        document.getElementById("Tallness").innerHTML = "Height: " + finalTall + "' " + demInchers
        DisAble()
    }
    document.getElementById("FavColor").innerHTML = "Favorite Color: " + Colors[Math.floor(Math.random() * Colors.length)]

}

function DisAble() {
    var DIs = Math.floor(Math.random() * 100);
    if (DIs <= 2) {
        document.getElementById("Disorder").innerHTML = "Disorder: Autism"
    } else if (Gend === "Male" && DIs <= 5) {
        document.getElementById("Disorder").innerHTML = "Disorder: Depression"
    } else if (Gend === "Female" && DIs <= 10) {
        document.getElementById("Disorder").innerHTML = "Disorder: Depression"
    } else {
        document.getElementById("Disorder").innerHTML = "Disorder: None"
    }
    
}
