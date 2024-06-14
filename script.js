

var imagePaths = [
    'Images/Image1.jpg',
    'Images/Image2.jpg',
    'Images/Image3.jpg',
    'Images/Image4.jpg',
    'Images/Image5.jpg',
    'Images/Image6.jpg',
    'Images/Image7.jpg',
    'Images/Image8.jpg',
    'Images/Image9.jpg',
    'Images/Image10.jpg',
    'Images/Image11.jpg',
    'Images/Image12.jpg',
    'Images/Image13.jpg',
    'Images/Image14.jpg',
    'Images/Image15.jpg',
    'Images/Image16.jpg',
    'Images/Image17.jpg',
    'Images/Image18.jpg',
    'Images/Image19.jpg',
    'Images/Image20.jpg',
    'Images/Image21.jpg',
    'Images/Image22.jpg',
    'Images/Image23.jpg',
    'Images/Image24.jpg',
    'Images/Image25.jpg',
    'Images/Image26.jpg',
    'Images/Image27.jpg',
    'Images/Image28.jpg',
    'Images/Image29.jpg',
    'Images/Image30.jpg'
];

var gallery = document.getElementById("image-gallery");

imagePaths.forEach(function(path, index) {
    var galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    var link = document.createElement("a");
    link.href = "#Image_ "+ (index + 1); 

    var img = document.createElement("img");
    img.classList.add("gallery__img");
    img.src = path;
    img.alt = "Image " + (index + 1);

    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
});
