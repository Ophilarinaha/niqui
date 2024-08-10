// Function that performs some setup operations on the scene
function initialize$1(scene) {
    // Perform initialization logic here
    scene.setup = true; // Example property to denote setup
    return scene;
}

// Another function that uses initialize$1
function setupScene(scene) {
    return initialize$1(scene);
}

// Example usage
let myScene = { name: "Main Scene" };
let initializedScene = setupScene(myScene);

console.log(initializedScene); // Output: { name: 'Main Scene', setup: true }
