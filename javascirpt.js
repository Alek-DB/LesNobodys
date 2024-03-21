

let mainNode
let header_area
let left_area
let sort_in_header = true

let track_vector = []
let sort_biggest = []
let sort_lowest = []

let sort_download = []
let sort_not_download = []
let sort_reverse_download = []
let sort_reverse_not_download = []

let is_sorted_downloadable = false
let is_sorted_A_Z = false
let is_sorted_Z_A = false

let sort_low_btn
let sort_big_btn
let sort_download_btn

let select = "rgb(109, 148, 164)"
let not_select = "rgb(181, 180, 177)"


window.addEventListener('load', () => {
    mainNode = document.querySelector("#container")
    sort_low_btn = document.querySelector("#low")
    sort_big_btn = document.querySelector("#big")
    sort_download_btn = document.querySelector("#download")
    header_area = document.querySelector("#sort_area")
    left_area = document.querySelector("#sort_left")

    sort_download_btn.style.backgroundColor = not_select
    sort_big_btn.style.backgroundColor = not_select
    sort_low_btn.style.backgroundColor = not_select

    

    //create track here

    create_track("Marauder", "aaaaa", "images/sous-sol_cover.png", "Les Nobody's", "0:00")
    create_track("Blues en La", "aaaaa", "images/sous-sol_cover.png", "Les Nobody's", "0:00")
    create_track("King Ska-Fa", "aaaaa", "images/king-ska-fa.png", "Bad Manners", "0:00")
    create_track("Black Magic Woman", "aaaa", "images/black_magic_woman.png", "Santana", "0:00")
    create_track("Ville", "", "images/ville.png", "Les Goules", "0:00")
    create_track("I'm a Believer", "", "images/believer.png", "The Monkees", "0:00")
    create_track("The Breakup Song", "aaaa", "images/breakup_song.png", "The Greg Kinh Band", "0:00")
    create_track("Colt 45", "", "images/colt_45.png", "Afroman", "0:00")
    create_track("Diamond Mine", "", "images/diamond_mine.png", "Blue Rodeo", "0:00")
    create_track("Friday Night, Saturday Morning", "", "images/friday_night.png", "The specials", "0:00")
    create_track("Just What I Needed", "", "images/Just_What_I_Needed.png", "The Cars", "0:00")
    create_track("Losing My Religion", "", "images/losing_my_religion.png", "R.E.M", "0:00")
    create_track("Miserlou", "", "images/miserlou.png", "Dick Dale", "0:00")
    create_track("Paranoid", "", "images/paranoid.png", "Black Sabbath", "0:00")
    create_track("Perfect Situatiuon", "", "images/perfect_situation.png", "Weezer", "0:00")
    create_track("Pipeline", "", "images/pipeline.png", "The Chantays", "0:00")
    create_track("La rue Bagot", "", "images/aucun_cadre.png", "Orloge Simard", "0:00")
    create_track("Pissiômoins", "", "images/pissiomoins.png", "Les Colocs", "0:00")
    create_track("Planet Claire", "", "images/planet_claire.png", "The B-52's", "0:00")
    create_track("Santeria", "", "images/santeria.png", "Sublime", "0:00")
    create_track("Sultan Of Swing", "", "images/sultan.png", "Dire Straits", "0:00")
    create_track("Tennessee Whiskey", "", "images/tennessee.png", "Chris Stapleton", "0:00")
    create_track("White Wedding", "", "images/white_wedding.png", "Billy Idol", "0:00")
    create_track("You're wondering Now", "", "images/wondering_now.png", "The specials", "0:00")
    create_track("Caress Me Down ", "aaa", "images/santeria.png", "Sublime", "0:00")
    create_track("Hymne à la bière ", "", "images/aucun_cadre.png", "Orloge Simard", "0:00")
    create_track("Psycho Killer", "a", "images/psycho_killer.png", "Talking Heads", "0:00")
    create_track("I Will Survive", "", "images/survive.png", "CAKE", "0:00")
    // create_track("", "", "images/")


    sort()
    show(track_vector)

    check_width()
})


const check_width = () => {

    if(window.innerWidth > 800 && sort_in_header){
        let temp = header_area.innerHTML
        header_area.innerHTML = ""
        left_area.innerHTML = temp


        sort_in_header = false
        sort_low_btn = document.querySelector("#low")
        sort_big_btn = document.querySelector("#big")
        sort_download_btn = document.querySelector("#download")
    }
    else if (window.innerWidth <= 800 && !sort_in_header){
        let temp = left_area.innerHTML
        left_area.innerHTML = ""
        header_area.innerHTML = temp


        sort_in_header = true
        sort_low_btn = document.querySelector("#low")
        sort_big_btn = document.querySelector("#big")
        sort_download_btn = document.querySelector("#download")
    }
    window.requestAnimationFrame(check_width)
}


const create_track = (track_title, track_link ,track_image, track_owner, track_length) => {
    track_vector.push(new Track(track_title, track_link, track_image, track_owner, track_length))
}






const show_lowest = () => {
    sort_big_btn.style.backgroundColor = not_select
    is_sorted_Z_A = false

    if(is_sorted_A_Z){
        is_sorted_A_Z = false
        sort_low_btn.style.backgroundColor = not_select
        if(!is_sorted_downloadable)
            show(track_vector)
    }
    else{
        is_sorted_A_Z = true
        sort_low_btn.style.backgroundColor = select
        if(is_sorted_downloadable)
            show(sort_download, sort_not_download)
        else
            show(sort_lowest)
    }
}


const show_biggest = () => {
    sort_low_btn.style.backgroundColor = not_select
    is_sorted_A_Z = false

    if(is_sorted_Z_A){
        is_sorted_Z_A = false
        sort_big_btn.style.backgroundColor = not_select
        if(!is_sorted_downloadable)
            show(track_vector)
    }
    else{
        is_sorted_Z_A = true
        sort_big_btn.style.backgroundColor = select
        if(is_sorted_downloadable)
            show(sort_reverse_download, sort_reverse_not_download)
        else
            show(sort_biggest)
    }
}


const show_download = () => {
    if(is_sorted_downloadable){
        is_sorted_downloadable = false
        sort_download_btn.style.backgroundColor = not_select
        if(is_sorted_A_Z)
            show(sort_lowest)
        else if (is_sorted_Z_A)
            show(sort_biggest)
        else
            show(track_vector)
    }
    else{
        is_sorted_downloadable = true
        sort_download_btn.style.backgroundColor = select
        if(is_sorted_Z_A)
            show(sort_reverse_download, sort_reverse_not_download)
        else
            show(sort_download, sort_not_download)

    }
}

const sort = () => {

    let temp_vector = track_vector.map((x) => x)

    while(temp_vector.length > 0){

        let biggest = " "
        let id

        for(let x = 0; x < temp_vector.length; x++){
            let current_title = temp_vector[x].get_title()

            if(current_title >= biggest){
                biggest = current_title
                id = x
            }
        }
    
        temp_vector[id].is_downloadable() == true ? sort_download.push(temp_vector[id]) : sort_not_download.push(temp_vector[id])
        sort_biggest.push(temp_vector[id])
        temp_vector.splice(id,1)
    }


    sort_lowest = sort_biggest.map((x) => x)
    sort_lowest.reverse()

    sort_reverse_download = sort_download.map((x) => x)
    sort_reverse_not_download = sort_not_download.map((x) => x)

    sort_download.reverse()
    sort_not_download.reverse()

}




const show = (vector, vector2 = null) => { 


    mainNode.innerHTML = " "
    vector.forEach(element => {
        mainNode.innerHTML += element.get_code()
    })

    if(vector2 == null)
        return

    vector2.forEach(element => {
        mainNode.innerHTML += element.get_code()
    })

}