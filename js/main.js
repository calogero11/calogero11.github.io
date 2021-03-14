let theme = 'light';

function SetTheme(theme) {
    SetWelcomeTheme(theme);
    SetLoadingTheme(theme);
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