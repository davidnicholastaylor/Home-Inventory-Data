////////////////// Furniture

const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

////////////////// Crafts

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

////////////////// Electronics

const gamingDesktop = {
    name: "PC Master Race Mothership",
    location: "Computer Desk",
    description: "Makes the supercomputers of the 1950s look like stone tablets."
}

const recordingEquipment = {
    name: "Scarlett Focusrite",
    location: "Computer Desk",
    description: "The premiere audio interface for musicians."
}

////////////////// Database

const HIDatabase = {
    furniture : [],
    crafts : [],
    electronics : []
}

HIDatabase.crafts.push(vintageInkwell);
HIDatabase.furniture.push(writingDesk);
HIDatabase.electronics.push(gamingDesktop);
HIDatabase.electronics.push(recordingEquipment);

console.log(HIDatabase)