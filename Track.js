
class Track{
    constructor(track_title, track_link ,track_image, track_owner, track_length){
        this.title = track_title
        this.link = track_link
        this.image = track_image
        this.length = track_length
        this.owner = track_owner
        this.html = ""
        this.create_code()
    }

    create_code(){

        this.asLink = "<a href=\"" + this.link + " \" download>Download</a></div></div>"
        this.noLink = "<div style=\"text-decoration: underline;\"> Comming soon </div>"

        this.html += "<div class=\"track\"> <div class=\"track_desc\"><div class=\"track_image\"><img src=\"" + this.image + "\" alt=\"\"></div>"
        this.html += "<div class=\"track_title\">" + this.title+ "</div>"
        this.html += "<div class=\"track_owner\">" + this.owner + "</div>"
        this.html += "<div class=\"track_length\">" + this.length + "</div></div>"
        this.html += "<div class=\"track_download\">" + (this.link == "" ? this.noLink : this.asLink)
    }

    get_code(){
        return this.html
    }

    get_title(){
        return this.title
    }

    is_downloadable(){
        return this.link != ""
    }
}