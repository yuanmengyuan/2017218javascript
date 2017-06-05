const fs=require('fs');
const gm=require('gm');

gm('./ala.jpg')
    .crop(207,193,341,221) //切图
    .resize(100,100,'!') //改尺寸；"！"强制改尺寸
    .write('./ala123.jpg',function (err) {
        if (!err) console.log('done');
    })
