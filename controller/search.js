const key = process.env.APIKEY;
const axios = require("axios");

module.exports = {
    search: function(req, res){
        console.log("hit search control");
        console.log(req.params.query);
        let query=req.params.query;
        axios
            .get("https://www.googleapis.com/youtube/v3/search/?part=snippet&type=video&q="+query+"&maxResults=12&key="+key)
            .then(function(response){
                // ~*~*~ sends video info as array of objects ~*~*~
                function Vids(id, vidId, title, thumbs){
                    this.id = id;
                    this.vidId = vidId;
                    this.title = title;
                    this.thumbs = thumbs;
                };
                let searchedVids;
                let searchArray = [];
                response.data.items.forEach(function(e){
                    searchedVids = new Vids(e.etag, e.id.videoId, e.snippet.title, e.snippet.thumbnails);
                    searchArray.push(searchedVids);
                });
                console.log(searchArray);
                res.json(searchArray);
            }).catch(function(error){
                console.log(error.stack);
            });
    }
};