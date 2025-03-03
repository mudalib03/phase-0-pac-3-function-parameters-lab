function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Example usage:
  console.log(introduction("mudalib")); // Output: "Hi, my name is Alice."

  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log("mudalib", "javaScript")
  }

  function introductionWithLanguageOptional (name, language="JavaScript") { 
  return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(introductionWithLanguageOptional("Gracie", "Javascript")); 

  }
  
  function introductionWithLanguage ( name, language="Javascript") {
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(introductionWithLanguage ("Gracie", "Javascript"))
  }