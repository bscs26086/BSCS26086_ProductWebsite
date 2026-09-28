// Welcome message when the page loads
window.onload = function () {
    alert("Welcome to LUMORA!");
};
// Show stock availability
function showStock(button) {

    var stockMessage = button.nextElementSibling;

    stockMessage.textContent = "In Stock";
}