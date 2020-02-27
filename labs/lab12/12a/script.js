var el = document.getElementById('table_data');
function oneRow(r, garry){
  var s = "";
  s +="<tr><td>" + r + "</td>";
  s +="<td>" + garry[0] + "</td>";
  s +="<td>" + garry[1] + "</td>";
  s +="<td>" + garry[2] + "</td>";
  s +="</tr>";
  return s;
}

function CSVToArray( strData, strDelimiter ){
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = (strDelimiter || ",");

        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
            (
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"
            ),
            "gi"
            );


        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];

        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;


        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches = objPattern.exec( strData )){

            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[ 1 ];

            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (
                strMatchedDelimiter.length &&
                strMatchedDelimiter !== strDelimiter
                ){

                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push( [] );

            }

            var strMatchedValue;

            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[ 2 ]){

                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                strMatchedValue = arrMatches[ 2 ].replace(
                    new RegExp( "\"\"", "g" ),
                    "\""
                    );

            } else {

                // We found a non-quoted value.
                strMatchedValue = arrMatches[ 3 ];

            }


            // Now that we have our value string, let's add
            // it to the data array.
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }

        // Return the parsed data.
        return( arrData );
    }
myData1 = CSVToArray("ASA1077,A319,Washington Dulles Intl (KIAD),San Francisco Intl (KSFO),04:32PM,10:10PM",",");
myData2 = CSVToArray("ASA1088,A320,San Francisco Intl (KSFO),Washington Dulles Intl (KIAD),06:58PM,11:28PM",",");
myData3 = CSVToArray("ASA1097,A320,Washington Dulles Intl (KIAD),Los Angeles Intl (KLAX),02:06PM,07:24PM",",");
myData4 = CSVToArray("ASA11,B739,Newark Liberty Intl (KEWR),Seattle-Tacoma Intl (KSEA),02:00PM,07:27PM",",");
myData5 = CSVToArray("ASA1113,A320,Will Rogers World (KOKC),Seattle-Tacoma Intl (KSEA),03:40PM,07:11PM",",");




function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function Flight(name, number, takeOff, land, timeT, timeL){
  this.name = name;
  this.number = number;
  this.takeOff = takeOff;
  this.land = land;
  this.timeT = timeT;
  this.timeL = timeL;
  this.flightTime = function(){
    var t1 = new Date(timeT);
    var t2 = new Date(timeL);
    var diff = t1.getTime() - t2.getTime();
    return msToTime(diff);
  }
}
var flightList = [];
flightList.push(Flight(myData1));
flightList.push(Flight(myData2));
flightList.push(Flight(myData3));
flightList.push(Flight(myData4));
flightList.push(Flight(myData5));