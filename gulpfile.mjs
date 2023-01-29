

// ------
// SETUP, CONFIG, IMPORTS AND GLOBALS
// ------

// Import the image handling config values from our custom config js file.
import imageConfig from './src/config/images.config.js'; 
//import { title as _title, metatags, author, mobileColor, url as _url } from "./src/config/metadata.js";
import metadata from "./src/config/metadata.js";

// Require gulp core utils and all gulp plugins
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import responsive from 'gulp-responsive';
import { deleteSync as del } from 'del';
import favicons from "gulp-favicons";
import debug from 'gulp-debug';

// Require eleventy's metadata
// Hardcoded for prod now
// Require Node.js utils
import { rename as _rename } from 'fs';
import { basename, resolve } from 'path';


// ------
// HELPER FUNCTIONS
// ------

// Move a file
function moveFile(file, dir2) {
    //gets file name and adds it to dir2
    var f = basename(file);
    var dest = resolve(dir2, f);

    _rename(file, dest, (err)=>{
        if(err) throw err;
        else console.log('Successfully moved');
    });
};


// ------
// GULP FUNCTIONS
// ------

// Image minification.
// Happens in-place (directly on src folder)
function minifyImages() {
    return src('_site/img/content/dist/**/*.{png,jpg,jpeg,webp}')
        // .pipe(changed('src/public/images/dist'))
        .pipe(debug({ title : 'Minify'}))
        .pipe(imagemin())
        .pipe(dest('_site/img/content/dist'))
};

// Image conversion to webP
function createWebp() {
    return src('_site/img/content/dist/**/*.{png,jpg,jpeg}')
        // .pipe(changed('src/public/images/dist'))
        .pipe(debug({ title : 'webp'}))
        .pipe(webp())
		.pipe(dest('_site/img/content/dist'))
};

// Favicon generation, based on a mandatory src/assets/img/favicon.jpg
function generatePwaFavicons() {
    return src("src/assets/img/favicon.jpg")
        .pipe(favicons({
            appName: _title,
            appDescription: metatags.description,
            developerName: author.name,
            developerURL: author.github,
            background: mobileColor,
            path: "/assets/pwa",
            url: _url,
            display: "standalone",
            orientation: "portrait",
            scope: "/",
            start_url: "/?homescreen=1",
            version: 1.0,
            logging: false,
            html: "favicons.html",
            pipeHTML: true,
            replace: true
    }))
    .pipe(dest("src/assets/pwa"))
}

// Moves the auto-generated favicons.html to the src templates folder 
function moveFaviconHtml() {
    return  src('src/assets/pwa/favicons.html')
            .pipe(dest('src/_includes/components'))
}

// Remove all the generated images. Only the originals will be left.
function cleanImages() {
    return del([
        '_site/img/content/dist'
    ])
};

// Generate the gulp-responsive array of sizes based on the user-defined configuration
function generateGulpResponsiveConfiguration(){

    // Loop the sizes array and create an object that fits the gulp-responsive reference
    var responsiveImages = sizes.map(function(item){
        var object = {
            width: item.width,
            rename: function(path) {
                path.dirname += `/${item.name}`;
                return path;
            }
        }
        if(item.height) {
            object.height = item.height;
        }
        return object;
    });

    // Loop the sizes array and create an object that fits the gulp-responsive reference
    // and is a retina version of the former
    var responsiveImages2x = sizes.map(function(item){
        var object = {
            width: item.width * 2,
            rename: function(path) {
                path.dirname += `/${item.name}`;
                path.basename += '@2x';
                return path;
            }
        }
        if(item.height) {
            object.height = item.height * 2;
        }
        return object;
    });
    
    return [ ...responsiveImages, ...responsiveImages2x ];
}


// Generate all the images.
// Beware: This can become a really expensive operation!
function resizeImages() {
    return src('static/img/content/src/**/*.{png,jpg,jpeg}')
        .pipe(dest('_site/img/content/dist'))
        .pipe(debug({ title : 'Resize'}))
        // .pipe(changed('src/public/images/dist'))
        .pipe(responsive(
            {
                '**/*.{png,jpg,webp}': generateGulpResponsiveConfiguration()
            },
            // Globals
            {  
                withoutEnlargement: true,
                skipOnEnlargement: true,
                errorOnEnlargement: false, // Change this to allow to skip crops
                quality: 85,
                progressive: true,
                withMetadata: false,
            }
        ))
        .pipe(dest('_site/img/content/dist'));
}


// ------
// GULP TASKS
// Define publicly available tasks
// ------

const _cleanImages = cleanImages;
export { _cleanImages as cleanImages };
const _resizeImages = resizeImages;
export { _resizeImages as resizeImages };
const _minifyImages = minifyImages;
export { _minifyImages as minifyImages };
const _createWebp = createWebp;
export { _createWebp as createWebp };
const _generatePwaFavicons = series(generatePwaFavicons, moveFaviconHtml);
export { _generatePwaFavicons as generatePwaFavicons };

// Set the correct processImages task
if(lfs) {
    exports.processImages = series(cleanImages, minifyImages);
} else {
    exports.processImages = series(cleanImages,resizeImages, createWebp, minifyImages);
}