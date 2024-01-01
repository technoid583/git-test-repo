// Function to show the alert with a timeout
function showAlert(message, duration) {
    setTimeout(function () { alert(message) }, duration);
}

//  Show an alert with a timeout of 3 seconds after page load
window.onload = function () {
    let newFeature = 'feature-e';

    showAlert("It's an new feature called: " + newFeature, 3000); // 3000 milliseconds (3 seconds)
    
    // git feature-a branch
    console.log("feature-a")

    // git feature-b branch
    console.log("feature-b")

    // git feature-c branch
    console.log("feature-c")

    //git feature-d branch
    console.log("feature-d")
};