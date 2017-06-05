const fs=require('fs');
const gm=require('gm');
//改变图片尺寸的大小；
gm('./ala.jpg')
    .resize(50,50,'!')
    .noProfile()
    .write('./resize123.png',function (err) {
        if (!err) console.log('done');
    });