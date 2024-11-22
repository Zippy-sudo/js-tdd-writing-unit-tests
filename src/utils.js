function pointsForWord(word) {
    let points = 0;
    console.log(word.split(""))

    word.split("").forEach(letter => {
        if (["a", "e", "i", "o", "u"].includes(letter.toLowerCase())) {
            points += 1;
        } else {
            points += 2;
        }
    })

    return points;
}

export { pointsForWord };
