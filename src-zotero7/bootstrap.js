var Main;

function log(msg) {
	Zotero.debug("AI Assistant: " + msg);
}

function install() {
	log("Installed AI Assistant");
}

async function startup({ id, version, rootURI }) {
	log("Starting AI Assistant");
	
	Zotero.PreferencePanes.register({
		pluginID: 'ai.assistant@example.com',
		src: rootURI + 'preferences.xhtml',
		scripts: [rootURI + 'preferences.js']
	});
	
	Services.scriptloader.loadSubScript(rootURI + 'main.js');
	Main.init({ id, version, rootURI });
	Main.addToAllWindows();
	await Main.main();
}

function onMainWindowLoad({ window }) {
	Main.addToWindow(window);
}

function onMainWindowUnload({ window }) {
	Main.removeFromWindow(window);
}

function shutdown() {
	log("Shutting down 2.0");
	Main.removeFromAllWindows();
	Main = undefined;
}

function uninstall() {
	log("Uninstalled 2.0");
}
