'use strict';

var speech_out = {
  speech: function(current) {
     var final = false;
     var category = ""
     var current2 = ""
     
    if ( current === 'Albatross'){current2 = 'Rookery'}
    else if( current === 'Alligators'){ current2 = 'Congregation'}
    else if( current === 'Apes'){ current2 = "Shrewdness, Troop"}
    else if( current === 'Antelope'){ current2 = 'Herd'}
    else if( current === 'Ants'){ current2 = "Colony, Army, Swarm, Nest"}
    else if( current === 'Asses'){ current2 = "Pace, Herd, Drove"}
    else if( current === 'Auks'){ current2 = "Colony, Flock, Raft"}
    else if( current === 'Baboons'){ current2 = "Troop, Flange"}
    else if( current === 'Bacteria'){ current2 = "Culture"}
    else if( current === 'Badgers'){ current2 = "Cete, Colony, Set, Company"}
    else if( current === 'Barracudas'){ current2 = "Battery"}
    else if( current === 'Bats'){ current2 = "Colony, Cloud"}
    else if( current === 'Bass'){ current2 = "Shoal"}
    else if( current === 'Bears'){ current2 = "Sloth, Sleuth, Litter"}
    else if( current === 'Beavers'){ current2 = "Colony, Family"}
    else if( current === 'Bees'){ current2 = "Grist, Hive, Swarm, Nest"}
    else if( current === 'Birds'){ current2 = (Chicks),"Brood, Clutch, Flight, Volary, Brace, Plump, Knob, Flock, Dissimulation, Wreck"}
    else if( current === 'Bison'){ current2 = "Herd"}
    else if( current === 'Bitterns'){ current2 = "Sedge, Seige"}
    else if( current === 'Bloodhounds'){ current2 = "Sute"}
    else if( current === 'Bobolinks'){ current2 = "Chain"}
    else if( current === 'Buffalo'){ current2 = "Herd, Troop, Gang, Obstinancy"}
    else if( current === 'Bullfinches'){ current2 = "Bellowing"}
    else if( current === 'Bullocks'){ current2 = "Drove"}
    else if( current === 'Butterflies'){ current2 = "Flight, Flutter, (Many more)"}
    else if( current === 'Buzzards'){ current2 = "Wake"}
    else if( current === 'Camels'){ current2 = "Caravan, Train, Flock"}
    else if( current === 'Capons'){ current2 = "Mews"}
    else if( current === 'Caribou'){ current2 = "Herd"}
    else if( current === 'Caterpillars'){ current2 = "Army"}
    else if( current === 'Cats'){ current2 = "Clowder, Clutter, Pounce, Dout, Nuisance, Glorying, Glare, Kindle, Litter, Intrigue, Destruction"}
    else if( current === 'Cattle'){ current2 = "Drove, Herd, Team"}
    else if( current === 'Cheetahs'){ current2 = "Coalition"}
    else if( current === 'Chickens'){ current2 = "Brood, Peep, Clutch, Chattering"}
    else if( current === 'Chinchilla'){ current2 = "Colony"}
    else if( current === 'Choughs'){ current2 = "Clattering"}
    else if( current === 'Clams'){ current2 = "Bed"}
    else if( current === 'Cobras'){ current2 = "Quiver"}
    else if( current === 'Cockroaches'){ current2 = "Intrusion"}
    else if( current === 'Cod'){ current2 = "Lap"}
    else if( current === 'Coots'){ current2 = "Cover, Raft"}
    else if( current === 'Cormorants'){ current2 = "Gulp"}
    else if( current === 'Cows'){ current2 = "Kine"}
    else if( current === 'Coyotes'){ current2 = "Band"}
    else if( current === 'Crabs'){ current2 = "Cast"}
    else if( current === 'Cranes'){ current2 = "Sedge, Seige"}
    else if( current === 'Crocodiles'){ current2 = "Bask, Float"}
    else if( current === 'Crows'){ current2 = "Murder, Horde, Parcel, Storytelling"}
    else if( current === 'Curlews'){ current2 = "Herd"}
    else if( current === 'Deer'){ current2 = "Herd, Leash, Gang, Brace, Clash, Bevy"}
    else if( current === 'Dogs'){ current2 = "Kennel. Cowardice, Litter, Pack, Cry, Mute"}
    else if( current === 'Dolphins'){ current2 = "Pod"}
    else if( current === 'Donkeys'){ current2 = "Drove, Pace, Herd"}
    else if( current === 'Dotterel'){ current2 = "Trip"}
    else if( current === 'Doves'){ current2 = "Dule, Bevy, Cote, Dole, Paddling, Pitying, Piteousness"}
    else if( current === 'Ducks'){ current2 = "Flock, Brace, Badling, Raft, Team Paddling"}
    else if( current === 'Dunlins'){ current2 = "Fling"}
    else if( current === 'Eagles'){ current2 = "Convocation, Aerie"}
    else if( current === 'Eels'){ current2 = "Swarm, Bed, Fry"}
    else if( current === 'Elephants'){ current2 = "Herd, Memory"}
    else if( current === 'Elk'){ current2 = "Gang, Herd"}
    else if( current === 'Emus'){ current2 = "Mob"}
    else if( current === 'Falcons'){ current2 = "Cast"}
    else if( current === 'Ferrets'){ current2 = "Business, Cast, Fesnying"}
    else if( current === 'Finches'){ current2 = "Charm"}
    else if( current === 'Fish'){ current2 = "Draft, Nest, Shoal, School, Catch, Drought, Haul"}
    else if( current === 'Flamingoes'){ current2 = "Stand, Flamboyance"}
    else if( current === 'Flies'){ current2 = "Business, Swarm, Cloud"}
    else if( current === 'Frogs'){ current2 = "Army, Colony, Knot"}
    else if( current === 'Fox'){ current2 = "Leash, Skulk, Earth, Lead, Troop"}
    else if( current === 'Geese'){ current2 = "Flock, Skein, Gaggle, Herd, Corps"}
    else if( current === 'Giraffes'){ current2 = "Tower"}
    else if( current === 'Gnats'){ current2 = "Cloud, Horde, Swarm"}
    else if( current === 'Gnus'){ current2 = "Implausibility"}
    else if( current === 'Goats'){ current2 = "Tribe, Trip, Drove, Herd, Flock"}
    else if( current === 'Goldfinches'){ current2 = "Charm"}
    else if( current === 'Goldfish'){ current2 = "Glint, Troubling"}
    else if( current === 'Gorillas'){ current2 = "Band, Troop"}
    else if( current === 'Goshawks'){ current2 = "Flight"}
    else if( current === 'Grasshoppers'){ current2 = "Cloud"}
    else if( current === 'Greyhounds'){ current2 = "Leash"}
    else if( current === 'Grouse'){ current2 = "Pack, Covey"}
    else if( current === 'Guillemots'){ current2 = "Bazaar"}
    else if( current === 'Gulls'){ current2 = "Colony, Screech"}
    else if( current === 'Guinea'){ current2 = "Fowl, Confusion"}
    else if( current === 'Hawks'){ current2 = "Cast, Kettle, Boil"}
    else if( current === 'Hedgehogs'){ current2 = "Array"}
    else if( current === 'Herons'){ current2 = "Sedge, Siege, Hedge"}
    else if( current === 'Herring'){ current2 = "Army, Shoal"}
    else if( current === 'Hippopotamuses'){ current2 = "Bloat"}
    else if( current === 'Hornets'){ current2 = "Nest, Bike"}
    else if( current === 'Horses'){ current2 = "Team, Harras, Stable, Troop, Stud, Rag, Rake, String, Herd"}
    else if( current === 'Hummingbirds'){ current2 = "Charm"}
    else if( current === 'Hyenas'){ current2 = "Cackle, Clan"}
    else if( current === 'Impalas'){ current2 = "Herd"}
    else if( current === 'Insects'){ current2 = "Horde, Nest, Swarm, Rabble, Plague"}
    else if( current === 'Jays'){ current2 = "Party, Scold, Band"}
    else if( current === 'Jellyfish'){ current2 = "Smack, Brood"}
    else if( current === 'Kangaroos'){ current2 = "Troop, Mob, Herd"}
    else if( current === 'Lapwings'){ current2 = "Deceit"}
    else if( current === 'Larks'){ current2 = "Exaltation, Ascension"}
    else if( current === 'Leopards'){ current2 = "Leap"}
    else if( current === 'Lice'){ current2 = "Flock"}
    else if( current === 'Lions'){ current2 = "Pride, Sault, Troop"}
    else if( current === 'Lizards'){ current2 = "Lounge"}
    else if( current === 'Locusts'){ current2 = "Plague"}
    else if( current === 'Magpies'){ current2 = "Tiding, Gulp, Murder, Charm"}
    else if( current === 'Mallards'){ current2 = "Brace, Sord"}
    else if( current === 'Martens'){ current2 = "Richness"}
    else if( current === 'Mice'){ current2 = "Mischief"}
    else if( current === 'Midges'){ current2 = "Bite"}
    else if( current === 'Minnows'){ current2 = "Shoal, Steam, Swarm"}
    else if( current === 'Moles'){ current2 = "Labor, Company, Movement"}
    else if( current === 'Monkeys'){ current2 = "Troop, Barrel, Carload, Cartload, Tribe"}
    else if( current === 'Moose'){ current2 = "Herd"}
    else if( current === 'Mosquitoes'){ current2 = "Scourge"}
    else if( current === 'Mudhens'){ current2 = "Fleet"}
    else if( current === 'Mules'){ current2 = "Pack, Span, Barren, Rake"}
    else if( current === 'Nightingales'){ current2 = "Watch"}
    else if( current === 'Otters'){ current2 = "Romp, Bevy, Family, Raft"}
    else if( current === 'Owls'){ current2 = "Parliament, Stare"}
    else if( current === 'Oxen'){ current2 = "Team, Yoke, Drove"}
    else if( current === 'Oysters'){ current2 = "Bed"}
    else if( current === 'Parrots'){ current2 = "Company, Pandemonium"}
    else if( current === 'Partridge'){ current2 = "Covey, Bew"}
    else if( current === 'Peacocks'){ current2 = "Muster, Ostentation, Pride"}
    else if( current === 'Pekingese'){ current2 = "Pomp"}
    else if( current === 'Pelicans'){ current2 = "Pod"}
    else if( current === 'Penguins'){ current2 = "Colony, Rookery, Huddle, Crèche"}
    else if( current === 'Pheasants'){ current2 = "Nest, Nye, Nide, Bouquet"}
    else if( current === 'Pigeons'){ current2 = "Flight, Flock, Kit"}
    else if( current === 'Pigs'){ current2 = "Drift, Drove, Singular, Sounder, Team, Passel, Drift, Parcel, Litter, Farrow, Sounder"}
    else if( current === 'Pilchards'){ current2 = "Shoal"}
    else if( current === 'Plovers'){ current2 = "Congregation, Wing"}
    else if( current === 'Polecats'){ current2 = "Chine"}
    else if( current === 'Porcupines'){ current2 = "Prickle"}
    else if( current === 'Porpoises'){ current2 = "Herd, Pod, School, Crowd, Shoal"}
    else if( current === 'Prairie'){ current2 = "Dogs, Coterie"}
    else if( current === 'Ptarmigans'){ current2 = "Covey"}
    else if( current === 'Quail'){ current2 = "Bevy, Covey"}
    else if( current === 'Rabbits'){ current2 = "Colony, Warren, Bury, Trace, Trip, Herd, Down, Hust, Litter, Nest"}
    else if( current === 'Raccoons'){ current2 = "Gaze"}
    else if( current === 'Rats'){ current2 = "Colony, Pack, Plague, Swarm"}
    else if( current === 'Rattlesnakes'){ current2 = "Rhumba"}
    else if( current === 'Ravens'){ current2 = "Unkindness, Storytelling"}
    else if( current === 'Reindeer'){ current = "Herd"}
    else if( current === 'Rhinoceroses'){ current2 = "Crash, Stubbornness"}
    else if( current === 'Roebucks'){ current2 = Bevy}
    else if( current === 'Rooks'){ current2 = "Building, Clamor, Parliament"}
    else if( current === 'Ruffs'){ current2 = "Hill"}
    else if( current === 'Salamandars'){ current2 = "Congress"}
    else if( current === 'Salmon'){ current2 = "Run"}
    else if( current === 'Sandpipers'){ current2 = "Fling"}
    else if( current === 'Sardines'){ current2 = "Family"}
    else if( current === 'Scorpions'){ current2 = "Bed, Nest"}
    else if( current === 'Seabirds'){ current2 = "Wreck"}
    else if( current === 'Seals'){ current2 = "Pod, Bob, Harem, Herd, Rookery"}
    else if( current === 'Sharks'){ current2 = "Shiver, School, Shoal"}
    else if( current === 'Sheep'){ current2 = "Drove, Flock, Down, Hurtle, Fold, Pack, Trip"}
    else if( current === 'Sheldrakes'){ current2 = "Doading"}
    else if( current === 'Skylarks'){ current2 = "Exultation"}
    else if( current === 'Squirrels'){ current2 = "Dray, Scurry"}
    else if( current === 'Snails'){ current2 = "Escargatoire, Rout, Walk"}
    else if( current === 'Snakes'){ current2 = "Den, Nest, Pit, Bed, Knot"}
    else if( current === 'Snipe'){ current2 = "Walk, Wisp"}
    else if( current === 'Sparrows'){ current2 = "Host"}
    else if( current === 'Spiders'){ current2 = "Cluster, Clutter"}
    else if( current === 'Springbok'){ current2 = "Herd"}
    else if( current === 'Squirrels'){ current2 = "Dray, Scurry"}
    else if( current === 'Starlings'){ current2 = "Murmuration, Chattering"}
    else if( current === 'Stingrays'){ current2 = "Fever"}
    else if( current === 'Stoats'){ current2 = "Pack, Trip"}
    else if( current === 'Storks'){ current2 = "Mustering, Muster"}
    else if( current === 'Swallows'){ current2 = "Flight, Gulp"}
    else if( current === 'Swans'){ current2 = "Bevy, Bank, Herd, Wedge, Flight"}
    else if( current === 'Swifts'){ current2 = "Flock"}
    else if( current === 'Teal'){ current2 = "Spring"}
    else if( current === 'Termites'){ current2 = "Colony, Nest, Swarm, Brood"}
    else if( current === 'Thrush'){ current2 = "Mutation"}
    else if( current === 'Tigers'){ current2 = "Streak, Ambush"}
    else if( current === 'Toads'){ current2 = "Knot, Knab, Nest"}
    else if( current === 'Trout'){ current2 = "Hover"}
    else if( current === 'Turkeys'){ current2 = "Rafter, Gang, Posse"}
    else if( current === 'Turtles'){ current2 = "Bale, Nest, Turn, Dole"}
    else if( current === 'Turtle'){ current2 = Doves,"Pitying, Dule"}
    else if( current === 'Vipers'){ current2 = "Generation, Nest"}
    else if( current === 'Vultures'){ current2 = "Venue, Kettle"}
    else if( current === 'Walruses'){ current2 = "Herd, Pod"}
    else if( current === 'Wasps'){ current2 = "Nest, Swarm"}
    else if( current === 'Waterfowl'){ current2 = "Knob, Plump"}
    else if( current === 'Weasles'){ current2 = "Gang, Colony, Pack"}
    else if( current === 'Whales'){ current2 = "Pod, Gam, Herd, School, Mod"}
    else if( current === 'Widgeons'){ current2 = "Company"}
    else if( current === 'Wildfowl'){ current2 = "Plump"}
    else if( current === 'Wolves'){ current2 = "Pack, Route, Rout"}
    else if( current === 'Wombats'){ current2 = "Wisdom"}
    else if( current === 'Woodcocks'){ current2 = "Fall"}
    else if( current === 'Woodpeckers'){ current2 = "Descent"}
    else if( current === 'Worms'){ current2 = "Bed, Clew, Bunch, Clat"}
    else if( current === 'Wrens'){ current2 = "Herd"}
    else if( current === 'Zebras'){ current2 = "Zeal, Crossing, Dazzle, Cohorts, Herd"}

    return [final, category, current2];
  },       
};

module.exports = speech_out;


