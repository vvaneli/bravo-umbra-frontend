//? Card behaviour: Patient Profile

// const cardPatientProfile = document.getElementById('patient-profile')
// const cardPatientProfileBody = document.getElementById('patient-profile-card-body')
// const cardPatientProfileToggleUp = document.querySelector('#patient-profile .card-close')
// const cardPatientProfileToggleDown = document.querySelector('#patient-profile .card-open')
// const cardPatientProfilePanel1 = document.querySelector('#patient-profile .panel1')
// const cardPatientProfilePanel2 = document.querySelector('#patient-profile .panel2')
// const cardPatientProfilePanel3 = document.querySelector('#patient-profile .panel3')

/*
#patient-profile

tap card-toggle

OPEN:
show .card-open, .panel-tabs, .panel-block
hide .card-close

CLOSE:
hide .card-open, .panel-tabs, .panel-block
show .card-close

*/

//? Card behaviour: Medical Profile
//  #medical-profile

//? Card behaviour: Consultations

//? Card behaviour: Umbra

// .card-toggle
// .card-open
// .card-close


// if (cardPatientProfileToggleUp ===
// window.alert('yes')

//? On page load

function onPageLoad() {
  const tabDefault = document.querySelectorAll('.tab-default')
  for (let i = 0; i < tabDefault.length; i++) {
    tabDefault[i].style.display = 'contents'
  }
}
onPageLoad()
// Card toggle: hide the open arrow
// cardPatientProfileToggleDown.classList.toggle('hide')

function cardToggle(e) {
  e.classList.toggle("hide")
  // cardPatientProfileToggleUp.classList.toggle('hide')
  // cardPatientProfileToggleDown.classList.toggle('show')
}

// function cardPatientProfileToggle() {
//   cardPatientProfileToggleDown.classList.toggle('show')
//   cardPatientProfileToggleUp.classList.toggle('hide')
//   cardPatientProfileBody.classList.toggle('hide')
// }

// function cardPatientProfileTab1() {
//   cardPatientProfilePanel1.classList.toggle('show')
//   cardPatientProfilePanel2.classList.toggle('hide')
//   cardPatientProfilePanel3.classList.toggle('hide')
// }

// function cardPatientProfileTab2() {
//   cardPatientProfilePanel1.classList.toggle('hide')
//   cardPatientProfilePanel2.classList.toggle('show')
//   cardPatientProfilePanel3.classList.toggle('hide')
// }

// function cardPatientProfileTab3() {
//   cardPatientProfilePanel1.classList.toggle('hide')
//   cardPatientProfilePanel2.classList.toggle('hide')
//   cardPatientProfilePanel3.classList.toggle('show')
// }

// CSS Escape https://drafts.csswg.org/cssom/#the-css.escape%28%29-method
function openPanel(tabName, tabGroup) {
  const tabPanels = document.querySelectorAll('.' + CSS.escape(tabGroup))
  for (let i = 0; i < tabPanels.length; i++) {
    tabPanels[i].style.display = 'none'
  }
  document.getElementById(tabName).style.display = 'contents'
}