def firstDuplicate(a)
    counts = []
    a.each do |el|
      return el if counts[el]
      counts[el] = true
    end
    -1  
end
