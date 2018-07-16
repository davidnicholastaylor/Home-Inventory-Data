const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

const gamingDesktop = {
    name: "PC Master Race Mothership",
    location: "Computer Desk",
    description: "Makes the supercomputers of the 1950s look like stone tablets"
}

const HIDatabase = {
    furniture : [],
    crafts : [],
    electronics : []
}

HIDatabase.crafts.push(vintageInkwell);
HIDatabase.furniture.push(writingDesk);
HIDatabase.electronics.push(gamingDesktop);

console.log(HIDatabase)