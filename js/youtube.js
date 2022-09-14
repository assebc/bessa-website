var xml_link = "https://www.youtube.com/feeds/videos.xml?channel_id=UCYXW07u06W_eyY_GMJcQDaw"
var nodes = xml_link.getElementsByTagName("yt_videoId");
var videos_Id = [];
var yt_link = "https://www.youtube.com/watch?v="; // concat the the video_Id link

for(var i=0;i<nodes.length;i++){
    videos_Id.push(nodes.item(i).innerHTML);
}

function yt_vid(){
    var videos_link = [];
    for(var i = 0;i<nodes.length;i++){
        videos_link[i] = yt_link + videos_Id[i];
    }
    return videos_link;
}