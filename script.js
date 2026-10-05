function findAnime(anime) {

    const result = document.getElementById("anime-result");

    if (anime === "naruto") {
        result.innerHTML = `
            <h3>Your Match</h3>
            <h4>Naruto</h4>
            <p>A story about rejection, belonging, and finding your place in the world.</p>
        `;
    }

    if (anime === "onepiece") {
        result.innerHTML = `
            <h3>Your Match</h3>
            <h4>One Piece</h4>
            <p>A story about freedom, dreams, and breaking away from the life others choose for you.</p>
        `;
    }

    if (anime === "horimiya") {
        result.innerHTML = `
            <h3>Your Match</h3>
            <h4>Horimiya</h4>
            <p>A story about being understood, letting people see who you really are, and finding connection.</p>
        `;
    }
}