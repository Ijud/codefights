function centuryFromYear(year) {
    var cen = Math.floor(year/100)
    if (year % 100 === 0) {
        return cen
    }
    else {
        return cen += 1
    }

}
