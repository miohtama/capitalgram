// Generate URLs for style="background-image: url(...)"

// const { lfs, nf_resize, relativeSourceDir } = require('../config/images.config'); 


function bgimage(sourceFile){
  relativeSourceDir = '/img/content/dist';
  return  relativeSourceDir + '/' + sourceFile;
}

module.exports =  bgimage;