const pgPrev = document.querySelector('.pagination-previous')
const pgList = document.querySelectorAll('.pagination-link')
const umbraSteps = document.querySelector('#umbra-card-contents').children
const step1 = document.getElementById('step1')
const step2 = document.getElementById('step2')
const step3 = document.getElementById('step3')
const box1 = document.getElementById('box1-prmpt')

//! PAGE: ON LOAD

function onPageLoad() {
  // append class .is-active to the first tab of every card
  const tabIsActive = document.querySelectorAll('nav.panel-tabs')
  for (let t = 0; t < tabIsActive.length; t++) {
    tabIsActive[t].firstElementChild.classList.add('is-active')
  }
  // show the contents of the first tab of every card
  const tabDefault = document.querySelectorAll('.tab-default')
  for (let i = 0; i < tabDefault.length; i++) {
    tabDefault[i].style.display = 'contents'
  }
  // umbra card show step 1
  step1.style.display = 'contents'
  step2.style.display = 'none'
  step3.style.display = 'none'
}

//! CARDS: OPEN & CLOSE

function cardToggle(e) {
  if (e.innerHTML !== 'keyboard_arrow_down') {
    e.innerHTML = 'keyboard_arrow_down'
    e.parentElement.nextElementSibling.style.display = 'none'
    e.parentElement.parentElement.style.height = '89px'
  } else {
    e.innerHTML = 'keyboard_arrow_up'
    e.parentElement.nextElementSibling.style.display = 'contents'
    e.parentElement.parentElement.style.height = 'auto'
  }
}

//! CARDS: TAB

function openPanel(tabName, tabGroup, el) {
  // highlight the active tab
  const tabList = el.parentElement.children
  for (let t = 0; t < tabList.length; t++) {
    const classes = tabList[t].classList
    classes.remove('is-active')
  }
  el.classList.add('is-active')
  // show the active panel
  // CSS Escape https://drafts.csswg.org/cssom/#the-css.escape%28%29-method
  const tabPanels = document.querySelectorAll('.' + CSS.escape(tabGroup))
  for (let i = 0; i < tabPanels.length; i++) {
    tabPanels[i].style.display = 'none'
  }
  document.getElementById(tabName).style.display = 'contents'
}

//! CARD: UMBRA

function goToStep1() {
  step1.style.display = 'contents'
  step2.style.display = 'none'
  step3.style.display = 'none'
}

function goToStep2() {
  step1.style.display = 'none'
  step2.style.display = 'contents'
  step3.style.display = 'none'
}

function goToStep3() {
  step1.style.display = 'none'
  step2.style.display = 'none'
  step3.style.display = 'contents'
}

function clearContents() {
  document.getElementById('box1-prmpt').value = ''
}

function example1() {
  // JSON fields from file 'dummy-health-data.json'
  box1.value = `Write a letter dated with today's date to {BillingInformation.InsuranceProvider} about the patient {PatientInformation.FirstName} {PatientInformation.MiddleName} {PatientInformation.LastName}; patient ID {PatientInformation.PatientID}; insurance policy number {BillingInformation.PolicyNumber}.
1. The patient visited the hospital on {VisitInformation.VisitDate} due to a {VisitInformation.ReasonForVisit}; visit ID {VisitInformation.VisitID}.
2. The diagnosis was a {Diagnosis.DiagnosisDescription} at the {Diagnosis.AffectedSide}, with {Diagnosis.Severity} severity; the diagnosis code is {Diagnosis.DiagnosisCode}.
3. The recommended treatment plan is as follows:
	a. {TreatmentPlan.Treatment[0].Procedure}
	b. {TreatmentPlan.Treatment[1].Procedure}
	c. {TreatmentPlan.Treatment[2].Procedure}
4. The total cost of the treatment is {BillingInformation.TotalCost}; billing code {BillingInformation.BillingCode}.
5. Sender of the letter is {VisitInformation.PrimaryPhysician}, {VisitInformation.Department} Department, at the Bravo Children’s Hospital`
}

function example2() {
  // JSON fields from files 'dummy-health-data.json' and 'dummy-relation-data.json'
  box1.value = `Write a story for a {PatientInformation.Age}-year-old child about {PatientInformation.RelatedNotes.FavoriteToy}.
1. Use the story arc of a hero's journey.
2. The characters in the story are gender-neutral.
3. The story has 6 images (labeled 'image 1', 'image 2', 'image 3', 'image 4', 'image 5', 'image 6') and 6 corresponding captions (labeled 'caption 1', 'caption 2', 'caption 3', 'caption 4', 'caption 5', 'caption 6').
4. What happens to the character in the story:
  a. It had a {VisitInformation.ReasonForVisit}
  b. The diagnosis was a {Diagnosis.Severity} {Diagnosis.DiagnosisDescription} at the {Diagnosis.AffectedSide}.
  c. It went to the hospital's {VisitInformation.Department} department for {TreatmentPlan.Treatment[0].Procedure}, as a result, {TreatmentPlan.Treatment[0].Result}.
  d. The doctor treated {PatientInformation.RelatedNotes.FavoriteToy} using {TreatmentPlan.Treatment[1].Method} and medicines.
5. Summarize the story into a story book cover. The cover must have 1 title and 1 cover image. The title must be shorter than 43 characters.`
}

function copyText() {
  // Get the text field
  const copyText = document.getElementById('box3')
  // Select the text field
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)
  // Alert the copied text
  alert('Copied to clipboard. You can now paste the texts into another application.')
} 