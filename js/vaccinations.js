const auth = firebase.auth();
const db = firebase.firestore();

const checkProgress = status => {
  const arrStatus = status.split(',').map(item => parseInt(item));
  if (arrStatus[0] === arrStatus[1]) {
    return 'progress-half';
  }
  if (arrStatus[0] === 0) {
    return 'progress-half';
  }
  if (arrStatus[1] === 2) {
    return 'progress-half';
  }
  if (arrStatus[1] === 3) {
    if (arrStatus[0] === 1) {
      return 'progress-one-third';
    }
    if (arrStatus[0] === 2) {
      return 'progress-two-thirds';
    }
  }
};

const renderVaccine = vaccinations => {
  const mainItem = document.querySelector('.main-variable-content');
  mainItem.innerHTML = '';
  Object.entries(vaccinations).forEach(vaccination => {
    const div = document.createElement('div');
    div.classList.add('vaccinations-main-vaccination-item');
    const infoLink = `
        <a href="./vaccine.html?name=${
          vaccination[0]
        }" class="vaccination-info-link">
          <span class="vaccination-info-link-icon ">i</span>
          <span class="vaccination-info-link-name ">
             ${vaccination[0]}
          </span>
        </a>   
        `;

    const scheduleLink = `
        <a href="./calendar.html" class="vaccination-schedule-link">
            <span class="vaccination-schedule-link-date status-text">
               Progress:
            </span>
            <span class="vaccination-schedule-link-status">
              <img src="../assets/images/${checkProgress(vaccination[1])}.svg">
            </span>
        </a>
        `;
    div.innerHTML = infoLink + scheduleLink;
    mainItem.appendChild(div);
  });
};

// get data
// getting data
const userID = 'testUserID';
const userVaccinations = db.collection('vaccinations').doc(userID);

userVaccinations
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log('Document data:', doc.data());
      renderVaccine(doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  })
  .catch(function(error) {
    console.log('Error getting document:', error);
  });
