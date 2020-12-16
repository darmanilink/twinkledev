// Includes only what's needed for morebits, util, and Title
mw.config.set({
	// Needed by Morebits
	pageTriageNamespaces: [0, 2, 118],
	wgArticleId: 18866,
	wgIsRedirect: false,
	wgPageName: 'Macbeth,_King_of_Scotland',
	wgRestrictionEdit: ['autoconfirmed'],
	wgUserGroups: ['interface-admin', 'oversight', 'patroller', 'reviewer', 'sysop', '*', 'user', 'autoconfirmed'],
	wgUserName: 'Amorymeltzer',

	// Needed by mw.util
	wgScript: '/w/index.php',
	wgArticlePath: '/wiki/$1',
	wgScriptPath: '/w',

	// Needed by mw.Title
	wgFormattedNamespaces: {
		'-2': 'Media',
		'-1': 'Special',
		0: '',
		1: 'Talk',
		2: 'User',
		3: 'User talk',
		4: 'Wikipedia',
		5: 'Wikipedia talk',
		6: 'File',
		7: 'File talk',
		8: 'MediaWiki',
		9: 'MediaWiki talk',
		10: 'Template',
		11: 'Template talk',
		12: 'Help',
		13: 'Help talk',
		14: 'Category',
		15: 'Category talk',
		100: 'Portal',
		101: 'Portal talk',
		108: 'Book',
		109: 'Book talk',
		118: 'Draft',
		119: 'Draft talk',
		446: 'Education Program',
		447: 'Education Program talk',
		710: 'TimedText',
		711: 'TimedText talk',
		828: 'Module',
		829: 'Module talk',
		2300: 'Gadget',
		2301: 'Gadget talk',
		2302: 'Gadget definition',
		2303: 'Gadget definition talk'
	},
	wgNamespaceIds: {
		'media': -2,
		'special': -1,
		'': 0,
		'talk': 1,
		'user': 2,
		'user_talk': 3,
		'wikipedia': 4,
		'wikipedia_talk': 5,
		'file': 6,
		'file_talk': 7,
		'mediawiki': 8,
		'mediawiki_talk': 9,
		'template': 10,
		'template_talk': 11,
		'help': 12,
		'help_talk': 13,
		'category': 14,
		'category_talk': 15,
		'portal': 100,
		'portal_talk': 101,
		'book': 108,
		'book_talk': 109,
		'draft': 118,
		'draft_talk': 119,
		'education_program': 446,
		'education_program_talk': 447,
		'timedtext': 710,
		'timedtext_talk': 711,
		'module': 828,
		'module_talk': 829,
		'gadget': 2300,
		'gadget_talk': 2301,
		'gadget_definition': 2302,
		'gadget_definition_talk': 2303,
		'wp': 4,
		'wt': 5,
		'image': 6,
		'image_talk': 7,
		'project': 4,
		'project_talk': 5
	},
	wgCaseSensitiveNamespaces: []
});
