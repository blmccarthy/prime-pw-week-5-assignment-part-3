console.log('***** Music Collection *****')

console.log('///// Testing addToCollection function /////');
console.log(' ');

let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let album = {     // creates object with keys defined below
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: []
  }
  collection.push(album);     // pushes album object to collection array
  return album;
} // end addToCollection

console.log(addToCollection( 'Evil Empire', 'Rage Against the Machine', 1996 ));
console.log(addToCollection( 'Battle of Los Angeles', 'Rage Against the Machine', 1999 ));
console.log(addToCollection( 'Dreamland', 'Glass Animals', 2020 ));
console.log(addToCollection( 'How to be a Human Being', 'Glass Animals', 2016 ));
console.log(addToCollection( 'Run the Jewels 2', 'Run the Jewels', 2014 ));
console.log(addToCollection( 'Awake', 'Tycho', 2014 ));

console.log(collection);




console.log(' ');
console.log(' ');
console.log('///// Testing showCollection function /////');
console.log(' ');

function showCollection( array ) {
  console.log('Number of albums in collection:', collection.length); // logs number of albums in collection array
  for (i=0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
  } // end loop
} // end showCollection

showCollection(collection)




console.log(' ');
console.log(' ');
console.log('///// Testing findByArtist function /////');
console.log(' ');

function findByArtist( array, artist ) {
  let artistSearch = [];
  for (i=0; i < array.length; i++) {  // loops through array
    if (array[i].artist === artist) { // checks for matching artist
      artistSearch.push(array[i])     // if match, pushes matching object to artistSearch array
    }
  } // end loop
  if (artistSearch.length === 0) {
    return `No matches found for ${artist}`;        // if no matching results
  } else {
    console.log(`Matching results for ${artist}`);  // if matching results, return matche
    return artistSearch;
  }
} // end findByArtist

console.log(findByArtist(collection, 'Glass Animals'));
console.log(findByArtist(collection, 'Taylor Swift'));




console.log(' ');
console.log(' ');
console.log('///// STRETCH GOAL: search function /////');
console.log(' ');

function search( artist, year ) {
  let searchResult = [];
  for (i=0; i < collection.length; i++) {   // loops through collection
    if (artist === collection[i].artist && year === collection[i].yearPublished) {  // looks for matching artist AND year
      searchResult.push(collection[i]);     // adds matching result to searchResult array
    }
  }
  // if NO matching results
  if (searchResult.length === 0) {
    return `No results found for '${artist}' in year '${year}'`;
  }
  // if matching results
  else {
    console.log(`Matching results for ${artist} in year ${year}`);
    return searchResult;
  }
} // end search

console.log(search('Ray Charles', 1957));
console.log(search('Glass Animals', 2016));




console.log(' ');
console.log(' ');
console.log('///// STRETCH GOAL: adding tracks  /////');
console.log(' ');

// I think i may have cheated on this one by creating a seperate function
// I couldn't figure out how to include it in the existing addToCollection function
// But should have gotten the same result.
// ¯\_(ツ)_/¯

function addTracks( title, name, duration ) {
  for (i=0; i < collection.length; i++){
    if (title === collection[i].title){   // looks for matching album title
      let track = {
        name: name,
        duration: duration,
      }
      collection[i].tracks.push(track)    // pushes track to album
    }
  }
}

addTracks('Evil Empire', 'People of the Sun', '2:30')
addTracks('Evil Empire', 'Bulls on Parade', '3:49')
addTracks('Evil Empire', 'Vietnow', '4:39')
addTracks('Evil Empire', 'Revolver', '5:30')
addTracks('Evil Empire', 'Snakecharmer', '3:56')
addTracks('Evil Empire', 'Tire Me', '3:00')
addTracks('Evil Empire', 'Down Rodeo', '5:20')
addTracks('Evil Empire', 'Without a Face', '3:36')
addTracks('Evil Empire', 'Wind Below', '5:50')
addTracks('Evil Empire', 'Roll Right', '4:22')
addTracks('Evil Empire', 'Year of tha Boomerang', '4:02')

addTracks('Battle of Los Angeles', 'Testify', '3:30')
addTracks('Battle of Los Angeles', 'Guerilla Radio', '3:26')
addTracks('Battle of Los Angeles', 'Calm Like a Bomb', '4:58')
addTracks('Battle of Los Angeles', 'Mic Check', '3:33')
addTracks('Battle of Los Angeles', 'Sleep Now in the Fire', '3:25')
addTracks('Battle of Los Angeles', 'Born of a Broken Man', '4:40')
addTracks('Battle of Los Angeles', 'Born as Ghosts', '3:22')
addTracks('Battle of Los Angeles', 'Maria', '3:48')
addTracks('Battle of Los Angeles', 'Voice of the Voiceless', '2:31')
addTracks('Battle of Los Angeles', 'New Millennium Homes', '3:44')
addTracks('Battle of Los Angeles', 'Ashes in the Fall', '4:37')
addTracks('Battle of Los Angeles', 'War Within a Breath', '3:36')

addTracks('Dreamland', 'Dreamland', '3:23')
addTracks('Dreamland', 'Tangerine', '3:20')
addTracks('Dreamland', '((Home Movie: 1994))', '0:07')
addTracks('Dreamland', 'Hot Sugar', '3:54')
addTracks('Dreamland', '((Home Movie: BTX))', '0:13')
addTracks('Dreamland', 'Space Ghost Coast to Coast', '3:07')
addTracks('Dreamland', 'Tokyo Drifting', '3:36')
addTracks('Dreamland', 'Melon and the Coconut', '2:28')
addTracks('Dreamland', 'Your Love (Déjà Vu)', '3:54')
addTracks('Dreamland', 'Waterfalls Coming Out of Your Mouth', '2:41')
addTracks('Dreamland', 'Its All So Incredibly Loud', '4:19')
addTracks('Dreamland', '((Home Movie: Rockets))', '1:00')
addTracks('Dreamland', 'Domestic Bliss', '3:18')
addTracks('Dreamland', 'Heat Waves', '3:58')
addTracks('Dreamland', '((Home Movie: Shoes On))', '0:31')
addTracks('Dreamland', 'Helium', '5:28')

addTracks('How to be a Human Being', 'Life Itself', '4:41' )
addTracks('How to be a Human Being', 'Youth', '3:51' )
addTracks('How to be a Human Being', 'Season 2 Episode 3', '4:04' )
addTracks('How to be a Human Being', 'Pork Soda', '4:14' )
addTracks('How to be a Human Being', 'Mamas Gun', '4:27' )
addTracks('How to be a Human Being', 'Cane Shuga', '3:17' )
addTracks('How to be a Human Being', '[Premade Sandwiches]', '0:36' )
addTracks('How to be a Human Being', 'The Other Side of Paradise', '5:21' )
addTracks('How to be a Human Being', 'Take a Slice', '3:50' )
addTracks('How to be a Human Being', 'Poplar St', '4:23' )
addTracks('How to be a Human Being', 'Agnes', '4:32' )

addTracks('Run the Jewels 2', 'Jeopardy', '3:22' )
addTracks('Run the Jewels 2', 'Oh My Darling Dont Cry', '3:24' )
addTracks('Run the Jewels 2', 'Blockbuster Night Part 1', '2:32' )
addTracks('Run the Jewels 2', 'Close Your Eyes (And Count To F*ck)', '3:54' )
addTracks('Run the Jewels 2', 'All My Life', '3:08' )
addTracks('Run the Jewels 2', 'Lie, Cheat, Steal', '3:28' )
addTracks('Run the Jewels 2', 'Early', '3:44' )
addTracks('Run the Jewels 2', 'All Due Respect', '2:47' )
addTracks('Run the Jewels 2', 'Love Again', '3:45' )
addTracks('Run the Jewels 2', 'Crown', '3:45' )
addTracks('Run the Jewels 2', 'Angel Duster', '5:09' )

addTracks('Awake', 'Awake', '4:43' )
addTracks('Awake', 'Montana', '5:26' )
addTracks('Awake', 'L', '4:37' )
addTracks('Awake', 'Dye', '5:17' )
addTracks('Awake', 'See', '5:18' )
addTracks('Awake', 'Apogee', '4:20' )
addTracks('Awake', 'Spectre', '3:46' )
addTracks('Awake', 'Plains', '3:17' )

console.log('MY COLLECTION:');
console.log(collection);




console.log(' ');
console.log(' ');
console.log('///// STRETCH GOAL: Adding search functionality for trackName /////');
console.log(' ');

function searchUpdate ( artist, year, trackName ) {
  let searchResult = [];
  // loops through collection
  for (i=0; i < collection.length; i++) {
    if ( artist === collection[i].artist && year === collection[i].yearPublished) {
      // loops through track list
      for (x=0; x < collection[i].tracks.length; x++) {
        if ( collection[i].tracks[x].name.indexOf(trackName) > -1) {
          searchResult.push(collection[i])
          // if all criteria is met, pushes album containing track to searchResult array
        }
      }
    }
  }
  // if NO matching results
  if (searchResult.length === 0) {
    return `No results found for '${trackName}' by ${artist} in year ${year}`;
  }
  // if matching results
  else {
    console.log(`Matching albums including '${trackName}' by ${artist} in year ${year}:`);
    return searchResult;
  }
} // end search

console.log(searchUpdate( 'Glass Animals', 2020, 'Tangerine')); // expect results found
console.log(searchUpdate( 'Rage Against the Machine', 1999, 'Testify')); // expect results found
console.log(searchUpdate( 'Rage Against the Machine', 1996, 'Testify')); // expect NO results found




console.log(' ');
console.log(' ');
console.log('///// Updating showCollection function to include Tracklist /////');
console.log(' ');

function showCollectionUpdate( array ) {
  console.log('Number of albums in collection:', collection.length); // logs number of albums in collection array
  console.log(' ');
  for ( i=0 ; i < array.length ; i++ ) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}:`);
    // TITLE by ARTIST, published in YEAR:
    for ( x=0 ; x < array[i].tracks.length ; x++ ) {
      console.log( `${x + 1}. ${array[i].tracks[x].name}: ${array[i].tracks[x].duration}` )
      // #. NAME: DURATION
    } // end tracklist loop
  console.log(' ');
} // end album loop
} // end showCollection

showCollectionUpdate(collection)
