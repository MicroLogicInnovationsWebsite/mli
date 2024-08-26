function toggleFullScreen() {
    var video = document.getElementById("MICRO_LOGIC_INNOVATIONS_VID");

    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function goToIndex() {
    window.location.href = "index.html";
}

function goToServices() {
    // Replace with the actual URL for your products page
    window.location.href = "our_services.html";
}

function goToAboutUs() {
    // Replace with the actual URL for your About Us page
    window.location.href = "about_us.html";
}

function goToContactUs() {
    // Replace with the actual URL for your Contact Us page
    window.location.href = "contact_us.html";
}

function goToCareers() {
    // Replace with the actual URL for your Careers page
    window.location.href = "career.html";
}

window.onload = toggleFullScreen;
