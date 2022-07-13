/**
 * @name Avatar-BannerImageOpener
 * @description Allows you the ability to click on a users avatar or banner on their profile page which will open an external browser page to the image
 * @version 1.0
 * @author Peekay
 * @source https://github.com/Peekaey/Avatar-BannerImageOpener
 */


// Main event listener

module.exports = class Main {
    start() {
        document.addEventListener("click", this.OnClickFunction);
    }

    OnClickFunction({target}) {

        // If the user clicks on an avatar, will run this statement

        if (target.classList.contains('avatar-3QF_VA') ) {
            var profilepictureUrl = target.querySelector("img").src
            var link = profilepictureUrl.replace('size=128', 'size=4096')
            window.open(link)
        } 

        // If the user clicks on a banner, will run this statement

        if ( target.classList.contains('banner-1YaD3N') ) {
            var bannerUrl = target.style.backgroundImage
            var [ _, bannerLink, _] = bannerUrl.split("\"")
            window.open(bannerLink)
    }
}
}
