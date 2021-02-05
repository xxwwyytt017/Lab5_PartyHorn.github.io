// main.js

// input field is editable
document.getElementById("volume-number").addEventListener("change", function() {
        let vol = Number(document.getElementById("volume-number").value);
        document.getElementById("horn-sound").volume = vol/100;
        // slider bar moves accordingly
        document.getElementById("volume-slider").value = vol;
});
// input box value changes with slider
document.getElementById("volume-slider").addEventListener("input", function() {
        let vol = Number(document.getElementById("volume-slider").value);
        document.getElementById("volume-number").value = vol;
        document.getElementById("honk-btn").disabled = false;
        // Volume icon that change depending on the sound level
        if(100 >= vol && vol >= 67) {
                document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        }
        else if(66 >= vol && vol >= 34) {
                document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        }
        else if(33 >= vol && vol >= 1) {
                document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        }
        else {
                document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
                if(vol == 0) {
                        document.getElementById("honk-btn").disabled = true;
                }
        }
})
// audio selection
document.getElementById("audio-selection").addEventListener("input", function() {
        let rbts = this.querySelectorAll('input[name="radio-sound"]');
        // get the selected type of audio
        let audio_type;
        for(const rb of rbts) {
                if (rb.checked) {
                        audio_type = rb.id;
                        break;
                    }
        }
        if(audio_type === "radio-car-horn") {
                document.getElementById("sound-image").src = "./assets/media/images/car.svg";
                document.getElementById("sound-image").alt = "car horn";
                document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        }
        else if(audio_type === "radio-party-horn") {
                document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
                document.getElementById("sound-image").alt = "party horn";
                document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
        }
        else {
                document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
                document.getElementById("sound-image").alt = "air horn";
                document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
        }
});
// Button that plays the horn sound
document.getElementById("honk-btn").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("horn-sound").play();
});