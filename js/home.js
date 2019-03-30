/*=== GET DOM Elements ===*/
const vaccinesContainer = document.querySelector('.main-content');

const showUpcomingVaccinationInfo = (doc) => {
  const {
    name,
    schedule,
    date
  } = doc.data();
  console.log(convertTimeStamp(date.seconds));
  const vaccineDiv = document.createElement('div');
  vaccineDiv.classList.add('home-vaccination-items'); //TODO:
  vaccineDiv.innerHTML = ``;
}
const convertTimeStamp = (firebaseTimestamp) => {
  const dateObject = new Date(firebaseTimestamp * 1000);

  // reformat date and month for  0 - 9
  // date
  let date;
  const datesInitial = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  const monthsInitial = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  if (dateObject.getDate() < 10) {
    date = datesInitial[dateObject.getDate()]
  } else {
    date = dateObject.getDate();
  }

  // month
  let month;
  if (dateObject.getMonth() < 10) {
    month = monthsInitial[dateObject.getMonth()]
  } else {
    month = dateObject.getMonth();
  }

  // year
  const year = dateObject.getFullYear();

  return `${date}.${month}.${year}`

}

db.collection('vaccines').orderBy('date').limit(5).onSnapshot((snapshot) => snapshot.forEach(doc => {
  console.log(doc.data());
  showUpcomingVaccinationInfo(doc)
}))