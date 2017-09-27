function firstDuplicate(a) {
    var count = []
      for (i=0; i < a.length; i++) {
        var element = a[i]
        if (count[element]) {
          return element
        }
        count[element] = true
      }
    return -1
  }