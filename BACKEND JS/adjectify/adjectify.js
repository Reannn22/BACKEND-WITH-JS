function adjectivfy(adjective) {
    return function (noun) {
      return `${noun} ${adjective}.`;
    }
  }
    const coolifier = adjectivfy('keren');
    const funnifier = adjectivfy('seru');
    console.log(coolifier('Dicoding')); // Output: Dicoding keren.
    console.log(funnifier('JavaScript')); // Output: JavaScript seru.