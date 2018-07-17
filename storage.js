////////////////// Furniture

const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const officeChair = {
    name: "Office Chair",
    location: "Living room",
    description: "The most comfortable swively chair I defintely don't always fall asleep in."
}

const computerDesk = {
    name: "Computer Desk",
    location: "Living room",
    description: "Something that definitely needs to be upgraded in the future."
}

////////////////// Crafts

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

const fountainPen = {
    name: "Fountain Pen",
    location: "Writing desk",
    description: "Run of the mill fountain pen found at Walmart"
}

const beadingKit = {
    name: "Jewelry Beading Kit",
    location: "Bedroom",
    description: "Failed dreams of being a handcrafting jewerly lie here."
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

const gamingKeyboard = {
    name: "Ducky Limited Edition Mechanical Keyboard",
    location: "Computer Desk",
    description: "A quality mechanical keyboard, but not worth the price and definitely needs cleaning."
}

const gamingMonitor = {
    name: "AVG 1440p 144hz Monitor",
    location: "Computer Desk",
    description: "A terrific monitor that consistently gets 60fps if not 100fps."
}

////////////////// Database

const HIDatabase = {
    furniture : [],
    crafts : [],
    electronics : []
}

HIDatabase.crafts.push(vintageInkwell);
HIDatabase.crafts.push(fountainPen);
HIDatabase.crafts.push(beadingKit);
HIDatabase.furniture.push(writingDesk);
HIDatabase.furniture.push(officeChair);
HIDatabase.furniture.push(computerDesk);
HIDatabase.electronics.push(gamingDesktop);
HIDatabase.electronics.push(recordingEquipment);
HIDatabase.electronics.push(gamingKeyboard);
HIDatabase.electronics.push(gamingMonitor);

console.log(HIDatabase)