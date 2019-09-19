const view = {};
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case'pageHome':
        document.getElementById('page').innerHTML = components.pageHome;
        break;
        case'pageAbout':
        document.getElementById('page').innerHTML = components.pageAbout;
        break;
        case'pageGallery':
        document.getElementById('page').innerHTML = components.pageGallery;
        break;
        case'pageContact':
        document.getElementById('page').innerHTML = components.pageContact;
        break;
    }
}