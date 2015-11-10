var assert = require("assert");
var url = require("url");
var url_browser = require("../index.js");
var url_browser_min = require("../index.min.js");

describe(__filename, function() {
	it("should parse", function() {
		var urlTest = "https://www.foo.com:80/Test/?query=something&more=else&foo#test";
		var core = url.parse(urlTest);
		var browser = url_browser.parse(urlTest);
		var browser_min = url_browser_min.parse(urlTest);
		
		assert.strictEqual(core.protocol, "https:");
		assert.strictEqual(core.slashes, true);
		assert.strictEqual(core.auth, null);
		assert.strictEqual(core.host, "www.foo.com:80");
		assert.strictEqual(core.port, "80");
		assert.strictEqual(core.hostname, "www.foo.com");
		assert.strictEqual(core.hash, "#test");
		assert.strictEqual(core.search, "?query=something&more=else&foo");
		assert.strictEqual(core.query, "query=something&more=else&foo");
		assert.strictEqual(core.pathname, "/Test/");
		assert.strictEqual(core.path, "/Test/?query=something&more=else&foo");
		assert.strictEqual(core.href, "https://www.foo.com:80/Test/?query=something&more=else&foo#test");
		
		assert.deepEqual(browser, core);
		assert.deepEqual(browser_min, core);
	});
});