"use strict";
const isObject = require("is-object");
const toString = Object.prototype.toString;



function isURL(url, supportIncomplete/*=false*/)
{
	// Native implementation
	if (toString.call(url) === "[object URL]") return true;

	if (isObject(url) === false) return false;
	
	if (!("href"     in url)) return false;
	if (!("protocol" in url)) return false;
	if (!("username" in url)) return false;
	if (!("password" in url)) return false;
	if (!("hostname" in url)) return false;
	if (!("port"     in url)) return false;
	if (!("host"     in url)) return false;
	if (!("pathname" in url)) return false;
	if (!("search"   in url)) return false;
	if (!("hash"     in url)) return false;

	if (supportIncomplete !== true)
	{
		if (isObject(url.searchParams) === false) return false;

		// TODO :: write a separate isURLSearchParams ?
	}
	
	// Shimmed implementation
	return true;
}



isURL.lenient = function(url)
{
	return isURL(url, true);
};



module.exports = isURL;
