console.log('***** Music Collection *****')

/*
- Create a variable `collection` that starts as an empty array.

- Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object
*/

console.log('///// Testing addToCollection function /////');

let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let album = { // creates object with keys defined below
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album); // pushes album object to collection array
  return album;
} // end addToCollection

console.log(addToCollection( 'Evil Empire', 'Rage Against the Machine', 1996));
console.log(addToCollection( 'Battle of Los Angeles', 'Rage Against the Machine', 1999 ));
console.log(addToCollection( 'Dreamland', 'Glass Animals', 2020 ));
console.log(addToCollection( 'How to be a Human Being', 'Glass Animals', 2016 ));
console.log(addToCollection( 'Run the Jewels 2', 'Run the Jewels', 2014 ));
console.log(addToCollection( 'Awake', 'Tycho', 2014 ));

console.log(collection);


/*
- Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.
*/

console.log('///// Testing showCollection function /////');

function showCollection( array ) {
  console.log('Number of albums in collection:', collection.length); // logs number of albums in collection array
  for (i=0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
  } // end loop
} // end showCollection

showCollection(collection)

/*
- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.

- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection,
as well as an artist you know is not in your collection. Check that for artists with multiple
matches, all are found.
*/

console.log('///// Testing findByArtist function /////');

function findByArtist( array, artist ) {
  let artistSearch = [];
  for (i=0; i < array.length; i++) { // loops through array
    if (array[i].artist === artist) { // checks for matching artist
      artistSearch.push(array[i]) // if match, pushes matching object to artistSearch array
    }
  } // end loop
  if (artistSearch.length === 0) {
    return `No matches found for ${artist}`; // if no matching results
  } else {
    console.log(`Matching results for ${artist}`); // if matching results, return matche
    return artistSearch;
  }
} // end findByArtist

console.log(findByArtist(collection, 'Glass Animals'));
console.log(findByArtist(collection, 'Taylor Swift'));


console.log('///// STRETCH GOAL: search function /////');

function search( artist, year ) {
  let searchResult = [];
  for (i=0; i < collection.length; i++) { // loops through collection
    if (artist === collection[i].artist && year === collection[i].yearPublished) { // looks for matching artist AND year
      searchResult.push(collection[i]); // adds matching result to searchResult array
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
