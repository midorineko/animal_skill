var outout = require('./outout');
var speech_out = require('./speech_out');

exports.handler = function( event, context ) {
    var current = event.request.intent.slots.Animal.value;
    current = current.split(" ")
    current = current[current.length - 1];
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    current = capitalizeFirstLetter(current)
    var speech_return = speech_out.speech(current);
    var final = true;
    var category = speech_return[1];
    var animal_group = speech_return[2];

    if(current==="Help"){
            var helpTxt = 'This skill will let you know the plurals of your favorite animals. Try, alexa ask animal groups the name for zebras. Make sure the animal is stated last.'
            outout.output(helpTxt, context, false);
    }else if(final){
        outout.output(animal_group, context, true);
    }
};