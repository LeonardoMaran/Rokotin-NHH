const vaccineInfo = [
  {
    shortName: 'Rotavirus',
    longName: 'Rotavirus vaccine',
    age: '2 months, 3 months, 6 months',
    how: 'mouth',
    checkboxes: '',
    against: 'Rotavirus infection',
    againstID: [9],
  },
  {
    shortName: 'pneumococcal',
    longName: 'Pneumococcal conjugate vaccine (PCV)',
    age: '3 months, 5 months, 12 months',
    how: 'injection',
    checkboxes: '',
    against: 'Pneumococcal disease ',
    againstID: [7],
  },
  {
    shortName: '5-in-1',
    longName: '5-in-1 (DTaP-IPV-Hib) vaccine',
    age: '3 months, 5 months, 12 months',
    how: 'injection',
    checkboxes: '',
    against: 'Diphtheria, Tetanus, Pertussis, Polio, HiB disease',
    againstID: [1, 12, 6, 8, 2],
  },
  {
    shortName: 'MMR',
    longName: 'Measles, mumps, rubella (MMR) vaccine',
    age: '12 months, 6 years',
    how: 'injection',
    checkboxes: ['I have had measles', 'I have had mumps', 'I have had rubella'],

    against: 'Measles, Mumps, Rubella',
    againstID: [4, 5, 10],
  },
  {
    shortName: 'Chickenpox',
    longName: 'Chickenpox (varicella) vaccine',
    age: '1.5 years, 6 years',
    how: 'injection',
    checkboxes: ['I have had chickenpox'],

    against: 'Chickenpox, Shingles',
    againstID: [0, 11],
  },
  {
    shortName: '4-in-1',
    longName: '4-in-1 (DTaP-IPV) vaccine',
    age: '4 years',
    how: 'injection',
    checkboxes: '',
    against: 'Diphtheria, Tetanus, Pertussis, Polio',
    againstID: [1, 12, 6, 8],
  },
  {
    shortName: 'HPV',
    longName: 'Human Papillomavirus (HPV) vaccine',
    age: '11 years',
    how: 'injection',
    checkboxes: ["I don't have a vulva", "vagina, or cervix"],

    against: 'HPV-related cancer',
    againstID: [3],
  },
  {
    shortName: 'DTaP',
    longName: 'Diphtheria, tetanus, pertussis (DTaP) vaccine',
    age: '14 years, 25 years',
    how: '',
    checkboxes: '',
    against: 'Diphtheria, Tetanus, Pertussis',
    againstID: [1, 12, 6],
  },
  {
    shortName: 'Influenza',
    longName: 'Influenza vaccine',
    age: 'Every fall 6 months-6 years, and also after 65 years',
    how: 'injection',
    checkboxes: '',
    against: 'Influenza viruses',
    againstID: [2],
  },
];

const diseaseInfo = [
  {
    id: 0,
    name: 'Chickenpox',
    description:
      'Like shingles, chickenpox (also called “varicella”) is caused by the varicella-zoster virus.',
    reason:
      'You can catch chickenpox very easily from an infected person if you touch a surface or breath in air that has been contaminated with their saliva or blister fluid.',
    symptoms: [
      'Common symptoms of chickenpox include:',
      'A rash (often beginning on the chest, back, and face), which then turns into itchy blisters (often over the entire body, including inside the mouth, eyelids, and on the genitals), and eventually into hard scabs',
      'Fever',
      'Headache',
      'Tiredness',
      'Loss of appetite',
    ],
    complications:
      'lung infection, breathing problems, heart damage, brain damage, paralysis, and death.',

    risk:
      'Groups at higher risk of complications include: infants, adolescents, adults, pregnant people, and immunocompromised people. ',
    sources: [
      ['CDC', 'https://www.cdc.gov/chickenpox/'],
      ['MedlinePlus', 'https://medlineplus.gov/chickenpox.html'],
    ],
  },
  {
    id: 1,
    name: 'Diphtheria',
    description:
      'Diphtheria is caused by the Corynebacterium diphtheriae bacterium.',
    reason:
      'You can catch diphtheria very easily from an infected person if you touch a surface or breath in air that has been contaminated with their saliva or open sores.',
    symptoms: [
      'Common symptoms of diphtheria include:',
      'Fever',
      'Sore throat',
      'Swollen neck glands',
      'Weakness',
    ],
    complications:
      'lung infection, breathing problems, heart damage, brain damage, paralysis, and death.',

    risk:
      'Groups at higher risk of complications include: immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/diphtheria'],
      ['MedlinePlus', 'https://medlineplus.gov/diphtheria.html'],
    ],
  },
  {
    id: 2,
    name: 'HiB disease',
    description:
      'HiB disease is caused by the Haemophilus influenzae type B bacterium.',
    reason:
      'Many people carry HiB bacteria in their mouth and noses, which causes them no harm; disease only develops if the bacteria infect other parts of the body. If a person carries HiB bacteria (whether they are ill or not), you can catch the bacteria by touching a surface or breath in air that has been contaminated with their saliva or mucus',
    symptoms: [
      'The type and severity of symptoms caused by HiB disease depend on the part of the body that has been infected by the bacteria. Infection can affect',
      'The lungs (pneumonia)',
      'The bloodstream (bacteremia)',
      'The tissue covering the brain and spinal cord (meningitis)',
    ],
    complications:
      'loss of limbs, hearing loss, brain damage, and death.',

    risk:
      'Groups at higher risk of complications include: children under 5 and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/haemophilusinfections.html'],
      ['MedlinePlus', 'https://medlineplus.gov/hi-disease/'],
    ],
  },
  {
    id: 3,
    name: 'HPV-related cancer',
    description:
      'There are more than 200 types of human papillomaviruses (HPV). Infection with HPV types 16 and 18 causes 70% of cervical cancers, and can also cause vaginal, vulvar, anal, penile, oral, and throat cancer.',
    reason:
      'Many people have HPV, and you can catch it by having sexual contact with them. Proper usage of barrier methods, such as condoms and dental dams, greatly reduces the risk of contracting HPV, but does not eliminate it completely.',
    symptoms: [
      'HPV-related cancer usually does not cause symptoms until it is advanced, serious, and hard to treat. If you have a cervix, you should get regular screenings for cervical cancer. There are no screening protocols for other types of HPV-related cancer, so preventing infection by getting the HPV vaccine is the safest choice.',
    ],
    complications: '',
    risk: '',
    sources: [
      ['CDC', 'https://www.cdc.gov/hpv.html/'],
      ['MedlinePlus', 'https://medlineplus.gov/hpv'],
    ],
  },
  {
    id: 4,
    name: 'Measles',
    description:
      'Measles (also called “rubeola”) is caused by the measles virus.',
    reason:
      'You can catch measles very easily from an infected person if you touch a surface or breath in air that has been contaminated with their saliva or mucus.',
    symptoms: [
      'Common symptoms of measles include:',
      'An itchy rash (often beginning on the head and spreading to the rest of the body)',
      'Tiny white spots inside the mouth (Koplik spots)',
      'Fever',
      'Cough',
      'Runny nose',
      'Red, watery eyes (conjunctivitis)',
      'Feeling achy and tired',
    ],
    complications:
      'hearing loss, extreme diarrhea, lung inflammation, brain inflammation, pregnancy problems, and death.',
    risk:
      'Groups at higher risk of complications include: children under 5, adults over 20, pregnant people, and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/measles/'],
      ['MedlinePlus', 'https://medlineplus.gov/measles.html'],
    ],
  },
  {
    id: 5,
    name: 'Mumps',
    description: 'Mumps is caused by the mumps virus.',
    reason:
      'You can catch mumps very easily from an infected person if you touch a surface or breath in air that has been contaminated with their saliva.',
    symptoms: [
      'Common symptoms include:',
      'Swollen cheeks and jaw',
      'Fever',
      'Headache',
      'Muscle pain',
      'Tiredness',
      'Loss of appetite',
    ],
    complications:
      'inflammation of the ovaries, testicles, pancreas, brain, and meninges (the tissue covering the brain and spinal cord).',

    risk:
      'Groups at higher risk of complications include: adults and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/mumps/'],
      ['MedlinePlus', 'https://medlineplus.gov/mumps.html'],
    ],
  },
  {
    id: 6,
    name: 'Pertussis',
    description:
      'Pertussis (also called “whooping cough”) is caused by the Bordetella pertussis bacterium',
    reason:
      'You can catch pertussis very easily from an infected person if you touch a surface or breath in air that has been contaminated with their saliva.',
    symptoms: [
      'Common symptoms of pertussis include:',
      'Cough (mild at first, then becoming violent and uncontrollable)',
      'Vomiting (during and after coughing fits)',
      'Fever',
      'Runny nose',
      'Exhaustion',
    ],
    complications:
      'lung inflammation, breathing problems, brain problems, convulsions, fainting, broken ribs, and loss of bladder control.',

    risk:
      'Groups at higher risk of complications include: children under 1 and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/pertussis/'],
      ['MedlinePlus', 'https://medlineplus.gov/whoopingcough.html'],
    ],
  },
  {
    id: 7,
    name: 'Pneumococcal disease',
    description:
      'Pneumococcal disease is caused by many types of Streptococcus pneumoniae (pneumococci) bacteria.',
    reason:
      'Many people carry pneumococcus bacteria in their mouth and noses, which causes them no harm; disease only develops if the bacteria infect other parts of the body. If a person carries pneumococcus bacteria (whether they are ill or not), you can catch the bacteria by touching a surface or breathing in air that has been contaminated with their saliva or mucus.',
    symptoms: [
      'The type and severity of symptoms caused by pneumococci disease depend on the part of the body that has been infected by the bacteria. Infection can affect:',
      'The lungs (pneumonia)',
      'The bloodstream (bacteremia)',
      'The tissue covering the brain and spinal cord (meningitis)',
      'The middle ear (otitis media)',
    ],
    complications:
      'loss of limbs, hearing loss, brain damage, sepsis, and death.',

    risk:
      'Groups at higher risk of complications include: children under 2, adults over 65, immunocompromised people, smokers, and people with cochlear implants or cerebrospinal fluid leaks.',
    sources: [
      ['CDC', 'https://www.cdc.gov/pneumococcal/'],
      ['MedlinePlus', 'https://medlineplus.gov/pneumococcalinfections.html'],
    ],
  },
  {
    id: 8,
    name: 'Polio',
    description:
      'Polio (also called “poliomyelitis”) is caused by the poliovirus.',
    reason:
      'You can catch polio very easily from an infected person if you touch or breath in air that has been contaminated with their saliva or feces.',
    symptoms: [
      'Common symptoms of polio include:',
      'Fever',
      'Headache',
      'Sore throat',
      'Nausea',
      'Stomach pain',
      'Tiredness',
    ],
    complications:
      'infection of the tissue covering the brain and spinal cord (meningitis), tingly feelings in the legs (paresthesia), paralysis, and death.',

    risk:
      'Groups at higher risk of complications include: children and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/polio/'],
      ['MedlinePlus', 'https://medlineplus.gov/polioandpostpoliosyndrome.html'],
    ],
  },
  {
    id: 9,
    name: 'Rotavirus infection',
    description:
      'Rotavirus infection (also called “rotavirus gastroenteritis”) is caused by the rotavirus.',
    reason:
      'You can catch rotavirus easily from an infected person if you touch or eat anything that has been contaminated with their feces.',
    symptoms: [
      'Common symptoms include:',
      'Fever',
      'Severe watery diarrhea',
      'Vomiting',
      'Abdominal pain',
      'Loss of appetite',
      'Dehydration',
    ],
    complications:
      'electrolyte imbalance, metabolic acidosis, kidney problems, liver problems, and death.',

    risk:
      'Groups at higher risk of complications include: children and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/rotavirus/'],
      ['MedlinePlus', 'https://medlineplus.gov/rotavirusinfections.html'],
    ],
  },
  {
    id: 10,
    name: 'Rubella',
    description:
      'Rubella (also called “German measles”) is caused by the rubella virus.',
    reason:
      'You can catch rubella very easily from an infected person if you touch a surface or breath in air that has been contaminated with their saliva. If you catch rubella while you are pregnant, you can pass it on to your child.',
    symptoms: [
      'Common symptoms include:',
      'A red rash (often beginning on the face and spreading to the rest of the body)',
      'Headache',
      'Cough',
      'Runny nose',
      'Red, watery eyes (conjunctivitis)',
      'Swollen glands',
      'Joint pain',
    ],
    complications:
      'arthritis, brain infection, bleeding problems, pregnancy problems and birth defects (heart, liver, and spleen problems; also hearing loss, vision loss and intellectual disability).',

    risk:
      'Groups at higher risk of complications include: unborn babies, pregnant people, and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/rubella/'],
      ['MedlinePlus', 'https://medlineplus.gov/rubella.html'],
    ],
  },
  {
    id: 11,
    name: 'Shingles',
    description:
      'Like chickenpox, shingles (also called “herpes zoster”) is caused by the varicella-zoster virus.',
    reason:
      'If you have been ill with chickenpox before, the virus will stay dormant in your body. In some cases, the virus reactivates years later, causing shingles. You cannot catch shingles from an ill person. However, if you have never had chickenpox before, you can catch the chickenpox virus. If you get chickenpox as an adult, the risk of serious complications is higher.',
    symptoms: [
      'Common symptoms of shingles include:',
      'A rash on the body and/or face, which turns into painful blisters, and eventually into hard scabs',
      'Fever',
      'Headache',
      'Chills',
      'Upset stomach',
    ],
    complications:
      'long-term pain in the area where the rash appeared, even for months or years after the fact; also vision loss, hearing loss, lung inflammation, brain inflammation, and death. ',

    risk:
      'Groups at higher risk of complications include: older adults and immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/shingles/'],
      ['MedlinePlus', 'https://medlineplus.gov/shingles.html'],
    ],
  },
  {
    id: 12,
    name: 'Tetanus',
    description:
      'Tetanus (also called “lockjaw”) is caused by the Clostridium tetani bacterium.',
    reason:
      'Tetanus cannot be transmitted from person to person; bacteria found in soil, dust, and manure can enter your body through wounds and breaks in your skin.',
    symptoms: [
      'Common symptoms of tetanus include:',
      'Muscle spasms that can prevent you from opening your mouth and/or swallowing',
      'Painful muscle stiffness',
      'Seizures',
      'Headache',
      'Fever',
      'Sweating',
      'Blood pressure and heart rate problems',
    ],
    complications:
      'broken bones, blood clots blocking the main lung artery (pulmonary embolism), lung inflammation, breathing problems, and death.',

    risk:
      'Groups at higher risk of complications include: immunocompromised people.',
    sources: [
      ['CDC', 'https://www.cdc.gov/tetanus/'],
      ['MedlinePlus', 'https://medlineplus.gov/tetanus.html'],
    ],
  },
];

const url = new URL(window.location.href);
const name = url.searchParams.get('name');
const domLongName = document.querySelector('#longName');
const domAge = document.querySelector('#age');
const domAgainst = document.querySelector('#against');
const mainContent = document.querySelector('#main-content');
const domstatus = document.querySelector('.vaccine-status');
const domCheckbox = document.querySelector('.vaccine-checkbox');



const showVaccineInfo = ({ longName, age, against, checkboxes }) => {
  domLongName.textContent = longName.replace('vaccine', '');
  domAge.textContent = age;
  if (checkboxes) {
    let html = '';
    checkboxes.forEach((check, index) => {
      html = html + `<div class="checkbox-input">
      <input type="checkbox" name="checkbox-${index}"><label for="checkbox-${index}">${check}</label>
      </div>`
    })
    console.log(html);

    domCheckbox.innerHTML = html;
  }

  // domAgainst.textContent = against;
};

const generateDisease = disease => {
  // console.log(dise ase);
  let html = `<div class="disease-info">
    <h3 class="disease-name">${disease.name}</h3>
    <p class="disease-description">${disease.description}</p>
    <p class="disease-reason">${disease.reason}</p>
    <p class="disease-symptom">${disease.symptoms[0]}</p> 

    <ul>
  `;
  for (let i = 1; i < disease.symptoms.length; i++) {
    html += `
        <li>${disease.symptoms[i]}</li>
     `;
  }
  html += `</ul>
  <div class="complications-and-risks">
    <p class="complication-title">Serious complications of this disease include:</p>
    <p>${disease.complications}</p>
    <p>${disease.risk}</p>
  </div><div class="sources-container">Sources: 

    `;
  for (let i = 0; i < disease.sources.length; i++) {
    html += `
    <a href="${disease.sources[i][1]}">${disease.sources[i][0]}</a>        
     `;
  }
  html += '</div></div></div>';

  return html;
};

const showDiseaseInfo = againstID => {
  let htmlMainContent = '';
  againstID.forEach(against => {
    diseaseInfo.forEach(disease => {
      if (against == disease.id) {
        htmlMainContent += generateDisease(disease);
      }
    });
  });
  mainContent.innerHTML = htmlMainContent;
};

for (let i = 0; i < vaccineInfo.length; i++) {
  if (vaccineInfo[i].shortName.toLowerCase() == name.toLowerCase()) {
    // console.log(vaccineInfo[i]);

    showVaccineInfo(vaccineInfo[i]);
    showDiseaseInfo(vaccineInfo[i].againstID);
  }
}
