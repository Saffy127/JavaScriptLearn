const videoElement = document.getElementById('webcam');
const captureButton = document.getElementById('capture-btn');
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
const downloadLink = document.getElementById('download-link');

// functionality for buttons with css properties
const normalButton = document.getElementById('normal-btn');
const grayscaleButton = document.getElementById('grayscale-btn');
const sepiaButton = document.getElementById("sepia-btn");

normalButton.addEventListener('click', () => {
    videoElement.style.filter = 'none';
});

grayscaleButton.addEventListener('click', () => {
    videoElement.style.filter = 'grayscale(100%)';
});

sepiaButton.addEventListener('click', () => {
    videoElement.style.filter = 'sepia(100%)';
});


navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing webcam:', err);
    });

captureButton.addEventListener('click', () => {
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    // Create a data URL for the captured image
    const imageDataURL = canvasElement.toDataURL('image/png');

    // Set the download link 
    downloadLink.href = imageDataURL;
    downloadLink.download = 'captured-image.png';
    downloadLink.innerHTML = 'Download Image';
    downloadLink.style.display = 'block';
});
