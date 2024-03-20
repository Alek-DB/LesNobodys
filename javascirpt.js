

let mainNode
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

window.addEventListener('load', () => {
    mainNode = document.querySelector("#container")
    sort_low_btn = document.querySelector("#low")
    sort_big_btn = document.querySelector("#big")
    sort_download_btn = document.querySelector("#download")

    sort_download_btn.style.backgroundColor = "red"
    sort_big_btn.style.backgroundColor = "red"
    sort_low_btn.style.backgroundColor = "red"

    

    //create track here

    create_track("King Ska-Fa", "aaaaa", "images/king-ska-fa.png")
    create_track("Black Magic Woman", "aaaa", "images/black_magic_woman.png")
    create_track("Ville", "", "images/ville.png")
    create_track("I'm a Believer", "", "images/believer.png")
    create_track("The Breakup Song", "aaaa", "images/breakup_song.png")
    create_track("Colt 45", "", "images/colt_45.png")
    create_track("Diamond Mine", "", "images/diamond_mine.png")
    create_track("Friday Night, Saturday Morning", "", "images/friday_night.png")
    create_track("Just What I Needed", "", "images/Just_What_I_Needed.png")
    create_track("Losing My Religion", "", "images/losing_my_religion.png")
    create_track("Miserlou", "", "images/miserlou.png")
    create_track("Paranoid", "", "images/paranoid.png")
    create_track("Perfect Situatiuon", "", "images/perfect_situation.png")
    create_track("Pipeline", "", "images/pipeline.png")
    create_track("La rue Bagot", "", "images/aucun_cadre.png")
    create_track("Pissiômoins", "", "images/pissiomoins.png")
    create_track("Planet Claire", "", "images/planet_claire.png")
    create_track("Santeria", "", "images/santeria.png")
    create_track("Sultan Of Swing", "", "images/sultan.png")
    create_track("Tennessee Whiskey", "", "images/tennessee.png")
    create_track("White Wedding", "", "images/white_wedding.png")
    create_track("You're wondering Now", "", "images/wondering_now.png")
    create_track("Caress Me Down ", "aaa", "images/santeria.png")
    create_track("Hymne à la bière ", "", "images/aucun_Cadre.png")
    create_track("Psycho Killer", "a", "images/psycho_killer.png")
    create_track("I Will Survive", "", "images/survive.png")
    // create_track("", "", "images/")


    sort()
    show(track_vector)
})



const create_track = (track_title, track_link ,track_image) => {
    track_vector.push(new Track(track_title, track_link, track_image))
}






const show_lowest = () => {
    sort_big_btn.style.backgroundColor = "red"
    is_sorted_Z_A = false

    if(!is_sorted_downloadable)
        if(is_sorted_A_Z){
            is_sorted_A_Z = false
            sort_low_btn.style.backgroundColor = "red"
            show(track_vector)
        }
        else{
            is_sorted_A_Z = true
            sort_low_btn.style.backgroundColor = "green"
            show(sort_lowest)
        }
    else{
        if(is_sorted_A_Z){
            is_sorted_A_Z = false
            sort_low_btn.style.backgroundColor = "red"
        }
        else{
            is_sorted_A_Z = true
            sort_low_btn.style.backgroundColor = "green"
            show(sort_download, sort_not_download)
        }
    }

}
const show_biggest = () => {
    sort_low_btn.style.backgroundColor = "red"
    is_sorted_A_Z = false

    if(!is_sorted_downloadable)
        if(is_sorted_Z_A){
            is_sorted_Z_A = false
            sort_big_btn.style.backgroundColor = "red"
            show(track_vector)
        }
        else{
            is_sorted_Z_A = true
            sort_big_btn.style.backgroundColor = "green"
            show(sort_biggest)
        }
    else{   
        if(is_sorted_Z_A){
            is_sorted_Z_A = false
            sort_big_btn.style.backgroundColor = "red"
        }
        else{
            is_sorted_Z_A = true
            sort_big_btn.style.backgroundColor = "green"
            show(sort_reverse_download, sort_reverse_not_download)
        }
    }

}


const show_download = () => {
    if(is_sorted_downloadable){
        is_sorted_downloadable = false
        sort_download_btn.style.backgroundColor = "red"
        if(is_sorted_A_Z)
            show(sort_lowest)
        else if (is_sorted_Z_A)
            show(sort_biggest)
        else
            show(track_vector)
    }
    else{
        is_sorted_downloadable = true
        sort_download_btn.style.backgroundColor = "green"
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

    console.log(vector)

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