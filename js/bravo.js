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

// const pgPrev = document.getElementsByClassName('pagination-previous')
const pgPrev = document.querySelector('.pagination-previous')
const pgList = document.querySelectorAll('.pagination-link')

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

  // umbra card pagination
  pgPrev.classList.add('is-disabled')
  pgList[0].classList.add('is-current')
  pgList[0].classList.add('has-background-grey-dark')
  for (let a = 1; a < pgList.length; a++) {
    pgList[a].ariaLabel = `Go to step ${a + 1}`
  } 
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