var xml_link = "https://www.youtube.com/feeds/videos.xml?channel_id=UCYXW07u06W_eyY_GMJcQDaw"
var nodes = doc.getElementsByTagName("yt_videoId");
var videos = [];

for(var i=0;i<nodes.length;i++){
    videos.push(nodes.item(i).innerHTML);
}