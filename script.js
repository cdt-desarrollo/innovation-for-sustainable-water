var widthPopUp = 1200;
var heightPopUp = 1700;
var widthDocument = 1100;
var heightDocument = 800;
function toTranslate(language){
  if(language == "e"){
    document.getElementById("buttonToTranslateToSpanish").style.display = 'block'
    document.getElementById("buttonToTranslateToEnglish").style.display = 'none'
    document.getElementById("spanishTitle").style.display = 'none';
    document.getElementById("englishTitle").style.display = 'block';
    document.getElementById("explanationSpanish").style.display = 'none';
    document.getElementById("explanationEnglish").style.display = 'flex'
    // document.getElementById("buttonPitchSpanish").style.display = 'none'
    // document.getElementById("buttonPitchEnglish").style.display = 'block'
    document.getElementById("challengesTitleSpanish").style.display = 'none'
    document.getElementById("challengesTitleEnglish").style.display = 'flex'
    document.getElementById("challengesExplanationSpanish").style.display = 'none'
    document.getElementById("challengesExplanationEnglish").style.display = 'flex'
    document.getElementById("registerSpanish").style.display = 'none'
    document.getElementById("registerEnglish").style.display = 'flex'
    document.getElementById("titleOrganizersSpanish").style.display = 'none'
    document.getElementById("titleOrganizersEnglish").style.display = 'flex'
  }
  else{
    document.getElementById("buttonToTranslateToSpanish").style.display = 'none'
    document.getElementById("buttonToTranslateToEnglish").style.display = 'block'
    document.getElementById("spanishTitle").style.display = 'block';
    document.getElementById("englishTitle").style.display = 'none';
    document.getElementById("explanationSpanish").style.display = 'flex';
    document.getElementById("explanationEnglish").style.display = 'none'
    // document.getElementById("buttonPitchSpanish").style.display = 'block'
    // document.getElementById("buttonPitchEnglish").style.display = 'none'
    document.getElementById("challengesTitleSpanish").style.display = 'flex'
    document.getElementById("challengesTitleEnglish").style.display = 'none'
    document.getElementById("challengesExplanationSpanish").style.display = 'flex'
    document.getElementById("challengesExplanationEnglish").style.display = 'none'
    document.getElementById("registerSpanish").style.display = 'flex'
    document.getElementById("registerEnglish").style.display = 'none'
    document.getElementById("titleOrganizersSpanish").style.display = 'flex'
    document.getElementById("titleOrganizersEnglish").style.display = 'none'
  } 
}

function scrollToSectionRegister(){
  const element = document.getElementById("sectionRegister");
  element.scrollIntoView();
}

function moreInfoChallengesSpanish1(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1GJicYTOV2eXi7g941Syxt28b0vNsBr1S/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function moreInfoChallengesSpanish2(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1MsldVQawF4heIZv1z9vlPypwIcMkmDiy/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function moreInfoChallengesEnglish1(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1R9cuQmrC0ns-QOeYXdgmSdYFLAi4wzCq/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function moreInfoChallengesEnglish2(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1eLZeP4tws05t_tooXDP7v5gPpbz8FV1f/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function checkTheRulesSpanish(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1t5QT9XO9JgW6CVEjuAUs5-dM6m6mV3uR/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}

function checkTheRulesEnglish(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/14nfD7JDPKwt5_Urq8MqR9kMiMlN-81OL/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}