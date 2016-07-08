var outout = require('./outout');
var speech_out = require('./speech_out');

exports.handler = function( event, context ) {
    var current = event.request.intent.slots.Reddit.value.toLowerCase();
    var speech_return = speech_out.speech(current);
    var final = true;
    var category = speech_return[1];
    current = speech_return[2];

    if(final){
        outout.output(current, context, true);
    }else if(current==="help"){
        var helpTxt = 'Hello, this skill was made to help you navigate reddit. First state a sub, alexa will respond with what she heard. If it is an incorrect sub, restate the desired sub. If it is the correct sub, you may proceed by saying; yes, rising, recent, hot, top, gilded, or controversial. Alexa will then rattle off the top five stories. Please state a sub.'
        outout.output(helpTxt, context, false);
    }
};