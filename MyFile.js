// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
       
      // artist not equals tracks; no track at all! I changed yoou
    if(prop != 'tracks' && value != "") {
      object[id][prop] = value;
    }
    else if(prop == 'tracks' && !object[id].hasOwnProperty('tracks')) {
        var arr = [];
        arr.push(value);
      object[id][prop] = arr;
     // object[id].prop = arry;
    } else if(prop == 'tracks' && value !="") {
        object[id][prop].push(value);
    }
    else if(value == "") {
        delete object[id][prop];
    }
  
    
    return object;
  }
  var myVar = collection[2548].artist;
  var myVArd = collection[5439].albumTitle;
  console.log(myVArd);
  console.log(myVar);
  var id = 5439
  var albumT = collection[id].albumTitle;
  console.log(albumT); // global variable
  updateRecords(collection, 5439, 'artist', 'ABBA');
  updateRecords(collection, 5439, 'tracks', "Take a chance on me");
  updateRecords(collection, 2548, "artist", "");
  updateRecords(collection, 2468, "tracks", "Free");
  