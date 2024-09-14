const pgPrev = document.querySelector('.pagination-previous')
const pgList = document.querySelectorAll('.pagination-link')
const umbraSteps = document.querySelector('#umbra-card-contents').children
const step1 = document.getElementById('step1')
const step2 = document.getElementById('step2')
const step3 = document.getElementById('step3')

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

//? PAGE: ON LOAD

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
  // umbra card
  step1.style.display = 'contents'
  step2.style.display = 'none'
  step3.style.display = 'none'


  // pgPrev.classList.add('is-disabled')
  // pgList[0].classList.add('is-current')
  // pgList[0].classList.add('has-background-grey-dark')
  // for (let a = 1; a < pgList.length; a++) {
  //   pgList[a].ariaLabel = `Go to step ${a + 1}`
  // }



  // console.log(umbraSteps)
  // for (let s = 1; s < umbraSteps.length; s++) {
  //   umbraSteps[s].style.display = 'none'
  // } 
}
// Card toggle: hide the open arrow
// cardPatientProfileToggleDown.classList.toggle('hide')

function cardToggle(e) {
  e.classList.toggle('hide')
  // cardPatientProfileToggleUp.classList.toggle('hide')
  // cardPatientProfileToggleDown.classList.toggle('show')
}

//? CARDS: TAB

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

//? CARDS: PAGINATION
let umbraCardPageCounter = 0

function navPagination(pgNum, pgCard, el) {


}

function pageBack() {

}

function pageNext() {

}

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

function copyText() {
  // Get the text field
  const copyText = document.getElementById('box3')
  // Select the text field
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)
  // Alert the copied text
  alert('Clipboard to clipboard. You can now paste the texts into another application.')
} 