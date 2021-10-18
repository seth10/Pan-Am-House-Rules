cruiser_text = {
  roll_failed: "The cruiser remains locked.",
  roll_succeeded: "The cruiser has been unlocked!"
}

cruiser_percentages = {
  1: 0.15,
  2: 0.5,
  3: 1
}

round = 1

if ( Math.random() < cruiser_percentages[round] ) {
  console.log(cruiser_text["roll_succeeded"])
} else {
  console.log(cruiser_text["roll_failed"])
}
