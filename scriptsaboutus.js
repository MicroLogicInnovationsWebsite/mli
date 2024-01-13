// Highlight "Contact Us" button after 5 seconds
setTimeout(function() {
    document.getElementById("contactBtn").style.backgroundColor = "#f39c12";
}, 5000);

document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contactModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("contactModal").style.display = "none";
});
