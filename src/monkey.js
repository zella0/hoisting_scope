function monkey () {
  var phrase = ''

  // Only change the lines inside of the following functions
  // Lines 7, 11, and 15
  function seeNoEvil (text) {
    var phrase = phrase + 'See No Evil; '
  }

  function hearNoEvil (text) {
    var phrase = phrase + 'Hear No Evil; '
  }

  function speakNoEvil (text) {
    var phrase = phrase + 'Speak No Evil.'
  }

  seeNoEvil()
  hearNoEvil()
  speakNoEvil()

  return phrase
}

module.exports = monkey()

// Once you've finished, replace this comment with a description
// of what is happening in the above code.
