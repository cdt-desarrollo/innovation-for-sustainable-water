function toTranslate(language){
  if(language == "e"){
    document.getElementById("buttonToTranslateToSpanish").style.display = 'block'
    document.getElementById("buttonToTranslateToEnglish").style.display = 'none'
    document.getElementById("spanishTitle").style.display = 'none';
    document.getElementById("englishTitle").style.display = 'block';
    document.getElementById("explanationSpanish").style.display = 'none';
    document.getElementById("explanationEnglish").style.display = 'flex'
    document.getElementById("buttonPitchSpanish").style.display = 'none'
    document.getElementById("buttonPitchEnglish").style.display = 'block'
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
    document.getElementById("buttonPitchSpanish").style.display = 'block'
    document.getElementById("buttonPitchEnglish").style.display = 'none'
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