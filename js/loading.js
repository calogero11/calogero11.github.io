let logoCharacters = Array.from(document.getElementById('logo').children);
let smallLogoCharacters = Array.from(document.getElementById('smallLogo').children);
let loadingScreen = document.getElementById('loading');

function SetLoadingTheme(theme)
{
    loadingScreen.style.backgroundImage = 'url(images/' + theme + '/loadingBackground.jpg)'
    
    if (theme === 'light') {
        logoCharacters.forEach((logoCharacter) => {
            logoCharacter.attributes['stroke'].value = 'black';
        });
        smallLogoCharacters.forEach((logoCharacter) => {
            logoCharacter.attributes['stroke'].value = 'black';
        });
    }
    if (theme === 'dark') {
        logoCharacters.forEach((logoCharacter) => {
            logoCharacter.attributes['stroke'].value = 'white';
        });
        smallLogoCharacters.forEach((logoCharacter) => {
            logoCharacter.attributes['stroke'].value = 'white';
        });
    }
}

setTimeout(() => {
    loadingScreen.style.display = 'none';
}, 5000);

function SetLoadingResponsiveXs() {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('smallLogo').style.display = 'inline';
}

function SetLoadingResponsiveLg() {
    document.getElementById('logo').style.display = 'inline';
    document.getElementById('smallLogo').style.display = 'none';
}