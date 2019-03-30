const auth = firebase.auth();
const db = firebase.firestore();

const mainItem = document.querySelector('.main-variable-content');
mainItem.innerHTML = '';
const renderVaccine = vaccinations => {
  Object.entries(vaccinations).forEach(vaccination => {
    const div = document.createElement('div');
    div.classList.add('vaccinations-main-vaccination-item');
    const infoLink = `
        <a href="vaccineLink" class="vaccination-info-link">
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
            ${vaccination[1]}
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
