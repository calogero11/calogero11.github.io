let cube = document.getElementById("cube");
let welcomeScreen = document.getElementById("welcome");
let latestRotation;

function RotateCube(rotation) {
    if (latestRotation != null) {
        cube.classList.remove("show-" + latestRotation);
    }
    cube.classList.add("show-" + rotation);
    latestRotation = rotation;
}

function SetWelcomeTheme(theme) {
    let cubeFaces = document.querySelectorAll(".cube-face");
    if (theme === "light") {
        welcomeScreen.style.backgroundColor = 'white';
        welcomeScreen.style.color = '#DDDDDD';
        cubeFaces.forEach((cubeFace) => {
            cubeFace.style.backgroundColor = '#222222';
            cubeFace.style.color = 'white';
            cubeFace.style.border = 'solid black 1px';
        });
    } else if (theme === "dark") {
        welcomeScreen.style.backgroundColor = 'black';
        welcomeScreen.style.color = '#29292B';
        cubeFaces.forEach((cubeFace) => {
            cubeFace.style.backgroundColor = '#DDDDDD';
            cubeFace.style.color = 'black';
            cubeFace.style.border = 'solid white 1px';
        });
    }
}

function SetWelcomeResponsive() {
    // Extra Small devices
    document.getElementById('lgWelcomeBackgroundText').style.display = 'none';
    document.getElementById('xsWelcomeBackgroundText').style.display = 'inline';
    
    if (window.innerWidth >= 576) {
        // Small devices
    }
    if (window.innerWidth >= 768) {
        // Medium devices
    }
    if (window.innerWidth >= 992) {
        // Large devices
        document.getElementById('lgWelcomeBackgroundText').style.display = 'inline';
        document.getElementById('xsWelcomeBackgroundText').style.display = 'none';
    }

    if (window.innerWidth >= 1200) {
        // Extra Large devices
    }
    if (window.innerWidth >= 1400) {
        // Extra Extra Large devices
    }
}

window.addEventListener('resize', SetWelcomeResponsive);