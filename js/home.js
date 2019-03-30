/*=== GET DOM Elements ===*/
const vaccinesContainer = document.querySelector('#main-content');

const showUpcomingVaccinationInfo = (doc) => {
  const {
    name,
    schedule,
    date
  } = doc.data();
  const vaccineDiv = document.createElement('div');
  vaccineDiv.classList.add('main-content-home-item');
  vaccineDiv.innerHTML =
    `<a class="main-content-home-item-schedule" href="./calendar.html">
    <p class="main-content-home-item-schedule-date blue-text">
  ${convertTimeStamp(date.seconds)}
    </p>
    <p class="main-content-home-item-schedule-status grey-text">
    ${schedule}
    </p>
  </a>

  <a class="main-content-home-item-vaccine" href="">
    <p class="main-content-home-item-vaccine-icon blue-text">
      i
    </p>

    <p class="main-content-home-item-vaccine-name white-text">
  ${name}
    </p>
  </a>`;

  vaccinesContainer.appendChild(vaccineDiv);
}

// Firebase timestamp converter function
const convertTimeStamp = (firebaseTimestamp) => {
  const dateObject = new Date(firebaseTimestamp * 1000);

  // reformat date and month for  0 - 9
  // date
  let date;
  const datesInitial = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  const monthsInitial = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  if (dateObject.getDate() < 10) {
    date = datesInitial[dateObject.getDate() - 1]
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

// propagate data from firebase 
db.collection('vaccines').orderBy('date').limit(5).onSnapshot((snapshot) => snapshot.forEach(doc => {
  showUpcomingVaccinationInfo(doc)
}))