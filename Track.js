
class Track{
    constructor(track_title, track_link ,track_image){
        this.title = track_title
        this.link = track_link
        this.image = track_image
        this.html = ""
        this.create_code()
    }

    create_code(){

        this.asLink = "<a href=\"" + this.link + " \" download>Download</a></div></div>"
        this.noLink = "<div style=\"text-decoration: underline;\"> Comming soon </div>"

        this.html += "<div class=\"track\"> <div class=\"track_desc\"><div class=\"track_image\"><img src=\"" + this.image + "\" alt=\"\"></div>"
        this.html += "<div class=\"track_title\">" + this.title+ "</div></div>"
        this.html += "<div class=\"track_download\">" + (this.link == "" ? this.noLink : this.asLink)
    }

    get_code(){
        return this.html
    }
}