function displayHikeInformation() {
    console.log("inside");
    // retrieve document id from url
    let params = new URL(window.location.href); // get url from search bar
    let ID = params.searchParams.get("docID");
    console.log(ID);

    db.collection("hikes").doc(ID).get().then(thisHike => {
        hikeInfo = thisHike.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.name;
        console.log(hikeInfo);

        document.getElementById("hikeName").innerHTML = hikeName;
        let imgEvent = document.querySelector(".hike-img");
        imgEvent.src = "../images/" + hikeCode + ".jpg";

    });
}

displayHikeInformation();