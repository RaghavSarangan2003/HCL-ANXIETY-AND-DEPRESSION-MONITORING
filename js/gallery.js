
// Function to handle file input change
function handleFileInput() {
  const fileInput = document.getElementById("fileInput");
  const imageContainer = document.getElementById("imageContainer");

  // Loop through selected files
  for (const file of fileInput.files) {
    if (file.type.startsWith("image/")) {
      const image = document.createElement("img");
      image.className = "gallery-image";
      image.src = URL.createObjectURL(file);
      image.alt = "Uploaded Image";

      // Add an event listener to open the image in full screen on click
      image.addEventListener("click", () => {
        openFullScreen(image.src, image.alt);
      });

      // Append the image to the gallery
      imageContainer.appendChild(image);
    }
  }

  // Clear the file input (optional)
  fileInput.value = "";
}

// Function to open an image in full screen
function openFullScreen(imageSrc, imageAlt) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementById("closeButton");

  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.style.display = "block";

  // Close the modal on clicking the close button
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when clicking outside the image
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Add event listener to the file input
document.getElementById("fileInput").addEventListener("change", handleFileInput);
