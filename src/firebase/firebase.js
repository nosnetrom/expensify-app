import * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val()); // returns the deleted node
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val()); // returns the changed node
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val()); // returns once for each existing node, plus once for the added node
});

export { firebase, database as default };

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Alto reeds',
//   amount: 3295,
//   note: 'Woodwind/Brasswind',
//   createdAt: moment().valueOf()
// });


// const notes = [{ // Firebase will convert this array into a series of objects
//   id: 12,
//   body: 'This is a note.',
//   title: 'Note 1'
// },{
//   id: 13,
//   body: 'This is another note.',
//   title: 'Note 2'
// }]

// const firebaseNotes = {  // This will be our preferred schema
//   notes: {
//     12: {
//       body: 'This is a note.',
//       title: 'Note 1'    
//     },
//     13: {
//       body: 'This is another note.',
//       title: 'Note 2'      
//     }
//   }
// }
// database.ref().set(firebaseNotes);

// database.ref('notes').push({ // push() will generate a unique key on the object being passed
//   title: 'This is another note...',
//   body: '...again, in our preferred format.'
// })


// database.ref().set({  // ref() = reference; set() returns a promise object
//   name: 'JMT',
//   age: 39,
//   married: true,
//   location: {
//     city: 'Dallas',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data saved');
// }).catch((error) => {
//   console.log('FAIL: ', error);
// });

// database
//   .ref('attributes')  // go to the attributes branch
//   .set({sex: 'Male', instrument: 'Saxophone'})
//   .then(() => {
//     console.log('Set attributes successfully')
//   })
//   .catch((error) => {
//     console.log('There was an error: ', error);
//   });

// database.ref('attributes/sex')
//   .remove()
//   .then(() => {
//     console.log('Successfully removed an attribute');
//   })
//   .catch((error) => {
//     console.log('Sorry, attribute not removed: ', error)
//   });

// Alternatively...
// database.ref('attributes/sex')
//   .set(null)
//   .then(() => {
//     console.log('Removed attribute by setting with a null value');
//   })
//   .catch((error) => {
//     console.log('Error trying to remove with a null value');
//   });

// database.ref().update({
//   name: 'JMoreTea',
//   age: null, // can remove data within an update
//   'location/country': 'Texas', // must wrap the path in quotes; location/city is not affected
//   credentials: ['BM', 'MMusEd']
// }).then(() => {
//   console.log('Data updated');
// }).catch((error) => {
//   console.log('UPDATE FAIL: ', error);
// });

// database.ref().once('value') // A single call to read from the DB
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error in reading data')
//   });

// const onValueChange = database.ref().on('value', (snapshot) => { // a subscription to the root of the db (expensive)
//   console.log(snapshot.val());
// }, (error) => {
//   console.log('Error fetching data ', error)
// });

// database.ref() // A subscription to the data, to reflect ongoing changes
//   .on('value', onValueChange);

// setTimeout(() => {
//   database.ref('name').set('Morty');
//   }, 5000);
// setTimeout(() => {
//   database.ref().off('value', onValueChange); // Unsubscribing from the DB changes
//   }, 10000);
// setTimeout(() => {
//   database.ref('name').set('JMT');
//   }, 15000); 
    
//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} plays ${val.attributes.instrument} in ${val.location.city}.`);
//   }); 
