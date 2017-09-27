function firstNotRepeatingCharacter(s) {
    var countHash = {}
    for (var i=0;i < s.length;i++) {
        var element = s[i]
        if (countHash[element]){
        countHash[element] ++
        }else{
          countHash[element] = 1
        }
    }
    for (var j=0; j < s.length; j++){
      var el = s[j]
      if (countHash[el] == 1)
      return el
    }
    return "_"
}

//runs through string twice :( //
