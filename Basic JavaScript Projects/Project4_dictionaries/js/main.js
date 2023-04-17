function dictionary_func() {
    var vehicle = { //Usage of dictionary,
        Brand: "Lamborghini Diablo",
        Year: 2001, //Didnt have to use qoutations becuase it is a "number"
        Color: "Red",
        Horsepower: 485, 
        Price: "$25,122 to $40,348"
    };
    delete vehicle.Price; //This deletes the "vehicle.Price" in the dictionary and when run, the answer is "undefined"

    document.getElementById("dictionary").innerHTML = vehicle.Price; //Telling the computer to change the id=dictionary
                                                                     // to the "price" listed in the dictionary of "vehicle"
}

