// Generate URLs for style="background-image: url(...)"

const { lfs, nf_resize, relativeSourceDir } = require('../images.config'); 


function bgimage(sourceFile){
  return  relativeSourceDir + '/' + sourceFile;
}

module.exports =  bgimage;