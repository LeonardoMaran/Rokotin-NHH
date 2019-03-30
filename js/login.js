db.collection('vaccines').orderBy('date').limit(5).onSnapshot((snapshot) => snapshot.forEach(doc => {
  console.log(doc);
}))