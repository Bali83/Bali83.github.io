
let currentPhoto = 0;
let imagesData = [
    {
        photo: 'Images/01.jpg',
        title: 'Church lake',
        description: '01 What a beautiful image',
    },
    {
        photo: 'Images/02.jpg',
        title: 'Tree in water at sunset',
        description: '02 What a beautiful image',
    },
    {
        photo: 'Images/03.jpg',
        title: 'Sunrise boat',
        description: '03 What a beautiful image',
    },
    {
        photo: 'Images/04.jpg',
        title: 'French polynesia',
        description: '04 What a beautiful image',
    },
    {
        photo: 'Images/05.jpg',
        title: 'Sea turtle',
        description: '05 What a beautiful image',
    },
    {
        photo: 'Images/06.jpg',
        title: 'Bora bora',
        description: '06 What a beautiful image',
    },
    {
        photo: 'Images/07.jpg',
        title: 'Kirkjufell, Iceland',
        description: '07 What a beautiful image',
    },
    {
        photo: 'Images/08.jpg',
        title: 'Forest trees',
        description: '08 What a beautiful image',
    },
    {
        photo: 'Images/09.jpg',
        title: 'Moss and mushrooms',
        description: '09 What a beautiful image',
    },
];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo').attr('alt', imagesData[photoNumber].title);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $('#photo').attr('data-number', currentPhoto);
    //    $('.thumbnail').css('margin-top', 0);
};

loadPhoto(currentPhoto);

$('#next').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    }
    else if (currentPhoto = imagesData.length) {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#previous').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    else if (currentPhoto <= 0) {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
});

$('.thumbnail').each(function(index) {
    $(this).attr('src', imagesData[index].photo);
    $(this).attr('data-number', `${index}`);
});

$('.thumbnail').click((event) => {
    let thumbnailURL = $(event.target).attr('src');
    let thumbnailAlt = $(event.target).attr('alt');
    currentPhoto = $(event.target).attr('data-number');
    $('#photo').fadeOut(200, function () {
        $(this).attr('src', thumbnailURL);
        $(this).attr('alt', thumbnailAlt);
        $(this).attr('data-number', $(event.target).attr('data-number'));
    }).fadeIn(200);
    $('#description').fadeOut(200).fadeIn(200);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
/*    
    if (($('#photo').attr('data-number')) !== ($(event.target).attr('data-number'))) {
        $(event.target).css('margin-top', 0);
    }
    else {
        $(event.target).css('margin', 0, 10);
    }*/
 // ha raklikkelek meg1x akkor helyre megy
});
