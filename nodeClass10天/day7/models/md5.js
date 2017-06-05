exports.md5=function(str) {
    const  crypto=require('crypto');
    const hash=crypto.createHash('md5');
    return hash.update(str).digest('base64')
}