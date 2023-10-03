console.log(" inside main");

const imageCollections = document.getElementsByClassName('card-img-top');
console.log(imageCollections);

for (const image of imageCollections)
{
    console.log(image);
    image.style.width = '220px';
    image.style.height = '170px';
}