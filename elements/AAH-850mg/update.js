function(instance, properties, context) {
    instance.canvas.empty();
    instance.canvas.append('<iframe class="sheetpluginembed" scrolling="yes" src="https://docs.google.com/spreadsheets/d/' + properties.sheet_id + '/pubhtml" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>')
}