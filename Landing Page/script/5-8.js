function mapWork () { //5.7.8
    let myMap=new Map([["Color Blue",true],["Color Green",true],["Color Yellow",true],["Color Purple",false], ["Name of Item","Artifact"], ["Time of Creation", 1624717614]]);

    myMap.forEach(function(item,index){
        console.log(`${index} - X ${item} - Y`);

    })

}