const config =  {
    // Common
    sourceDir : './img/content/src',
    relativeSourceDir : '/img/content/dist',
    // Set to true to use LFS
    lfs : false,
    // If lfs = true;
    nf_resize: 'fit',
    // Array of size objects
    sizes : [
        {
            name: 'large',
            width: 1920,
            height: false,
            isResponsive: true,
            customQuery: {
                width: 300,
                path: 'fit&w=300&h=300', 
                width2x: 600,
                path2x: 'fit&w=600&h=600'
            }
        },
        {
            name: 'medium',
            width: 800,
            height: false,
            isResponsive: true
        },
        {
            name: 'small',
            width: 480,
            height: false,
            isResponsive: true
        },
        {
            name: 'thumb',
            width: 150,
            height: 150,
            isResponsive: false
        },
        {
            name: 'icon',
            width: 50,
            height: 25,
            isResponsive: false
        },
    ],
}

config.sizeNames = config.sizes.map(function(item){
    return item.name;
})

module.exports = config;