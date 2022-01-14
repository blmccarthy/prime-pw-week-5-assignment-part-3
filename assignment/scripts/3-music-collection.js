console.log('***** Music Collection *****')

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

// console.log(collection[0].title);
// console.log(collection[0].artist);
// console.log(collection[0].yearPublished);
// console.log(collection.length);

console.log(addToCollection( 'Battle of Los Angeles', 'Rage Against the Machine', 1999 ));
console.log(addToCollection( 'Dreamland', 'Glass Animals', 2020 ));
console.log(addToCollection( 'How to be a Human Being', 'Glass Animals', 2016 ));
console.log(addToCollection( 'Run the Jewels 2', 'Run the Jewels', 2014 ));
console.log(addToCollection( 'Awake', 'Tycho', 2014 ));

console.log(collection);

///// Experiment Graveyard /////

// function showCollection( array ) {
//   for (i=0; i < array.length; i++) {
//     console.log(`${array.title} by ${array.artist}, published in ${array.yearPublished}`);
//   }
// }

// function showCollection() {
//   for (i=0; i < collection.length; i++) {
//     console.log(`${collection.title} by ${collection.artist}, published in ${collection.yearPublished}`);
//   }
// }

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
*/

function findByArtist( array, artist ) {
  let artistSearch = [];
  for (i=0; i < array.length; i++) {
    if (array[i].artist === artist) {
      artistSearch.push(array[i])
    }
  }
  return artistSearch;
}

console.log(findByArtist(collection, 'Glass Animals'));
