let theme = 'light';
let body = document.getElementsByTagName("body")[0];

function SetTheme(theme) {
    SetWelcomeTheme(theme);
    SetLoadingTheme(theme);
    
    if (theme === 'light') {
        body.style.cursor = "url('/images/light/cursor.png'), auto";
        body.style.backgroundColor = 'white';
    }
    else if (theme === 'dark') {
        body.style.cursor = "url('/images/dark/cursor.png'), auto";
        body.style.backgroundColor = 'black';
    }
}

function SetResponsive() {
    // Extra Small devices
    SetWelcomeResponsiveXs();
    SetLoadingResponsiveXs()
    
    if (window.innerWidth >= 576) {
        // Small devices
    }
    if (window.innerWidth >= 768) {
        // Medium devices
    }
    if (window.innerWidth >= 992) {
        // Large devices
        SetWelcomeResponsiveLg();
        SetLoadingResponsiveLg();
    }
    if (window.innerWidth >= 1200) {
        // Extra Large devices
    }
    if (window.innerWidth >= 1400) {
        // Extra Extra Large devices
    }
}
SetResponsive();
window.addEventListener('resize', SetResponsive);

SetTheme(theme); 