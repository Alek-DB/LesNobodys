

let mainNode
let track_vector = []

window.addEventListener('load', () => {
    mainNode = document.querySelector("#container")

    //create track here

    create_track("Money", "#", "images/Dark_Side_of_the_Moon.png")
    create_track("King Ska-Fa", "", "images/king-ska-fa.png")
    create_track("Black Magic Woman", "", "images/black_magic_woman.png")
    create_track("Ville", "", "images/ville.png")
    create_track("Green Onions", "", "images/green_onions.png")
})


const create_track = (track_title, track_link ,track_image) => {
    mainNode.innerHTML += new Track(track_title, track_link, track_image).get_code()
}