const input = ["a", "b", "c", "d", "e", "f"]

function search (character: string) {

    input.forEach((char, index)=>{
        if(character === char)

        console.log(index)
    
    })
};

search("a");