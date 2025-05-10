const darkNav = document.querySelector(".navbar");
const input = document.querySelector(".input-container");
const numButton = document.querySelectorAll(".number-button");
// Get all icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");
const historyIcon = document.querySelector(".history");
const allIcons = document.querySelectorAll(".icon");

function updateActiveIcons(isDarkMode) {
    allIcons.forEach(icon => {
        icon.classList.remove('active-moon', 'active-sun', 'active-history', 'active-icon');
    });

    if (isDarkMode) {
        moonIcon.classList.add('active-moon');
    } else {
        sunIcon.classList.add('active-sun');
    }
}

const enableDarkMode = () => {
    console.log("dark theme enabled");

    removeLightMode();
    addDarkMode();
    updateActiveIcons(true);

    localStorage.setItem("darkmode", "active");
    localStorage.setItem("lightmode", null);
}

const disableDarkMode = () => {
    console.log("dark theme disabled");

    addLightMode();
    removeDarkMode();
    updateActiveIcons(false);

    localStorage.setItem("darkmode", null);
    localStorage.setItem("lightmode", "active");
}

const addDarkMode = () => {
    document.body.classList.add("dark-mode");
    darkNav.classList.add("dark-nav");
    input.classList.add("input-dark");
    numButton.forEach((btn) => {
        btn.classList.add("btn-dark");
    })

    moonIcon.innerHTML =
        `
        <svg class="icon moon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 18C33 26.2845 26.2845 33 18 33C9.7155 33 3 26.2845 3 18C3 9.7155 9.7155 3 18 3C26.2845 3 33 9.7155 33 18Z" stroke="#252525" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 33C22.971 33 27 26.2845 27 18C27 9.7155 22.971 3 18 3M16.5 10.5H16.5135M15 21.75C15 22.3467 14.7629 22.919 14.341 23.341C13.919 23.7629 13.3467 24 12.75 24C12.1533 24 11.581 23.7629 11.159 23.341C10.7371 22.919 10.5 22.3467 10.5 21.75C10.5 21.1533 10.7371 20.581 11.159 20.159C11.581 19.7371 12.1533 19.5 12.75 19.5C13.3467 19.5 13.919 19.7371 14.341 20.159C14.7629 20.581 15 21.1533 15 21.75Z" stroke="#252525" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `

    sunIcon.innerHTML =
        `
        <svg class="icon sun" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5Z" stroke="white" stroke-width="2.25"/>
            <path d="M15 2.5V3.75M15 26.25V27.5M27.5 15H26.25M3.75 15H2.5" stroke="white" stroke-width="2.25" stroke-linecap="round"/>
            <g opacity="0.5">
            <path d="M23.8374 6.1625L23.3474 6.65375L23.8374 6.1625ZM6.65238 23.3475L6.16113 23.8387L6.65238 23.3475ZM23.8374 23.8375L23.3474 23.3462L23.8374 23.8375ZM6.65238 6.6525L6.16113 6.16125L6.65238 6.6525Z" fill="#D9D9D9"/>
            <path d="M23.8374 6.1625L23.3474 6.65375M6.65238 23.3475L6.16113 23.8387M23.8374 23.8375L23.3474 23.3462M6.65238 6.6525L6.16113 6.16125" stroke="white" stroke-width="2.25" stroke-linecap="round"/>
            </g>
        </svg>
        `

    historyIcon.innerHTML =
        `
            <svg class="icon history" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" tabindex="3">
                <g id="ic:outline-history">
                    <path id="Vector" d="M19.5 4.5C15.9196 4.5 12.4858 5.92232 9.95406 8.45406C7.42232 10.9858 6 14.4196 6 18H1.5L7.335 23.835L7.44 24.045L13.5 18H9C9 12.195 13.695 7.5 19.5 7.5C25.305 7.5 30 12.195 30 18C30 23.805 25.305 28.5 19.5 28.5C16.605 28.5 13.98 27.315 12.09 25.41L9.96 27.54C11.2099 28.7973 12.6965 29.7946 14.3339 30.4742C15.9713 31.1539 17.7271 31.5025 19.5 31.5C23.0804 31.5 26.5142 30.0777 29.0459 27.5459C31.5777 25.0142 33 21.5804 33 18C33 14.4196 31.5777 10.9858 29.0459 8.45406C26.5142 5.92232 23.0804 4.5 19.5 4.5ZM18 12V19.5L24.375 23.28L25.53 21.36L20.25 18.225V12H18Z" fill="white"/>
                </g>
            </svg>
        `
}

const removeLightMode = () => {
    document.body.classList.remove("light-mode");
    darkNav.classList.remove("light-nav");
    input.classList.remove("input-light");
    numButton.forEach((btn) => {
        btn.classList.remove("btn-light");
    })}

const addLightMode = () => {
    document.body.classList.add("light-mode");
    darkNav.classList.add("light-nav");
    input.classList.add("input-light");
    numButton.forEach((btn) => {
        btn.classList.add("btn-light");
    })
    moonIcon.innerHTML =
        `
                <svg class="icon moon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 18C33 26.2845 26.2845 33 18 33C9.7155 33 3 26.2845 3 18C3 9.7155 9.7155 3 18 3C26.2845 3 33 9.7155 33 18Z" stroke="#252525" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 33C22.971 33 27 26.2845 27 18C27 9.7155 22.971 3 18 3M16.5 10.5H16.5135M15 21.75C15 22.3467 14.7629 22.919 14.341 23.341C13.919 23.7629 13.3467 24 12.75 24C12.1533 24 11.581 23.7629 11.159 23.341C10.7371 22.919 10.5 22.3467 10.5 21.75C10.5 21.1533 10.7371 20.581 11.159 20.159C11.581 19.7371 12.1533 19.5 12.75 19.5C13.3467 19.5 13.919 19.7371 14.341 20.159C14.7629 20.581 15 21.1533 15 21.75Z" stroke="#252525" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        `

    sunIcon.innerHTML =
        `
                <svg class="icon sun" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_27_197)">
                        <path d="M15 21.5C19.1421 21.5 22.5 18.1421 22.5 14C22.5 9.85786 19.1421 6.5 15 6.5C10.8579 6.5 7.5 9.85786 7.5 14C7.5 18.1421 10.8579 21.5 15 21.5Z" stroke="#252525" stroke-width="2.25"/>
                        <path d="M15 1.5V2.75M15 25.25V26.5M27.5 14H26.25M3.75 14H2.5" stroke="#252525" stroke-width="2.25" stroke-linecap="round"/>
                        <path opacity="0.5" d="M23.8375 5.1625L23.3475 5.65375M6.6525 22.3475L6.16125 22.8388M23.8375 22.8375L23.3475 22.3463M6.6525 5.6525L6.16125 5.16125" stroke="#252525" stroke-width="2.25" stroke-linecap="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_27_197" x="-2.625" y="0.375" width="35.25" height="35.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_197"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_197" result="shape"/>
                        </filter>
                    </defs>
                </svg>
        `

    historyIcon.innerHTML =
        `
        <svg class="icon history" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" tabindex="3">
            <path d="M19.5 4.5C15.9196 4.5 12.4858 5.92232 9.95406 8.45406C7.42232 10.9858 6 14.4196 6 18H1.5L7.335 23.835L7.44 24.045L13.5 18H9C9 12.195 13.695 7.5 19.5 7.5C25.305 7.5 30 12.195 30 18C30 23.805 25.305 28.5 19.5 28.5C16.605 28.5 13.98 27.315 12.09 25.41L9.96 27.54C11.2099 28.7973 12.6965 29.7946 14.3339 30.4742C15.9713 31.1539 17.7271 31.5025 19.5 31.5C23.0804 31.5 26.5142 30.0777 29.0459 27.5459C31.5777 25.0142 33 21.5804 33 18C33 14.4196 31.5777 10.9858 29.0459 8.45406C26.5142 5.92232 23.0804 4.5 19.5 4.5ZM18 12V19.5L24.375 23.28L25.53 21.36L20.25 18.225V12H18Z" fill="#252525"/>
        </svg>
        `
}

const removeDarkMode = () => {
    document.body.classList.remove("dark-mode");
    darkNav.classList.remove("dark-nav");
    input.classList.remove("input-dark");
    numButton.forEach((btn) => {
        btn.classList.remove("btn-dark");
    })}

// Function to toggle history icon independently
const toggleHistoryIcon = (show) => {
    // First remove active class if it exists
    historyIcon.classList.remove('active-history');

    // Add active class if show is true
    if (show) {
        historyIcon.classList.add('active-history');
    }
}

// Check theme on initial load
const checkTheme = () => {
    const darkMode = localStorage.getItem("darkmode");

    if (darkMode === "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

export { enableDarkMode, disableDarkMode, toggleHistoryIcon, checkTheme };