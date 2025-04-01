function(instance, properties, context) {

instance.canvas.append('<iframe class="sheetpluginembed" scrolling="yes" src="https://docs.google.com/spreadsheets/d/' + properties.sheet_id + '/edit?rm=demo&amp;chrome=false&amp;widget=false&amp;borders=' + properties.borders + '&amp;headers=' + properties.headers + '" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>')

}