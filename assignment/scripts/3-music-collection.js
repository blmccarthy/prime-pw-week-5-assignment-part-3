console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album);
  return true;
}

addToCollection( 'Evil Empire', 'Rage Against the Machine', 1996)
console.log(collection);

// console.log(collection[0].title);
// console.log(collection[0].artist);
// console.log(collection[0].yearPublished);
// console.log(collection.length);

addToCollection( 'Battle of Los Angeles', 'Rage Against the Machine', 1999)
console.log(collection);

addToCollection( 'Dreamland', 'Glass Animals', 2020)
console.log(collection);

addToCollection( 'How to be a Human Being', 'Glass Animals', 2016)
console.log(collection);

addToCollection( 'Run the Jewels 2', 'Run the Jewels', 2014)
console.log(collection);

addToCollection( 'Awake', 'Tycho', 2014)
console.log(collection);
