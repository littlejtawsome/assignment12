class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

var jbox = new Jukebox();
const album1 = new Album('Love is gone', 'Moon Sae Lee');
const album2 = new Album('last Christmas', 'Wham');
const album3 = new Album('Beauty and the Beast', 'Disney');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);


album1.play();
album2.play();
album2.play();
album2.play();
album2.play();
album2.play();
album3.play();

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);