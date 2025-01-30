import type { Language } from '../language';
import 'dayjs/locale/de';

const language: Language = {
	name: 'Deutsch',
	code: 'DE',
	translator: 'HorizonCode',
	phrases: {
		'Why should i use osu.direct?': 'Warum sollte ich osu.direct nutzen?',
		'Blazing Fast Downloads': 'Blitzschnelle Downloads',
		'We know the pain of waiting for beatmaps to download. With osu.direct, you can enjoy blazing fast speeds without any subscription or payment. Say goodbye to slow downloads and hello to uninterrupted fun.':
			'Wir kennen die Qualen des Wartens auf Beatmaps beim herunterladen. Mit osu.direct kannst du blitzschnelle Geschwindigkeiten genießen, ohne dass du ein Abonnement abschließen oder bezahlen musst. Verabschiede dich von langsamen Downloads und begrüße den ununterbrochenen Spaß.',
		'Reliability You Can Trust': 'Verlässlichkeit, der Du vertrauen kannst',
		"Previously known as Kitsu, we've rebranded to osu.direct with a commitment to reliability. Trusted by major projects like osu!droid and Akatsuki, you can count on us to deliver seamless service.":
			'Früher unter dem Namen Kitsu bekannt, haben wir uns zu osu.direct umbenannt und uns der Zuverlässigkeit zu verschrieben. Große Projekte wie osu!droid und Akatsuki vertrauen auf uns, und Du kannst dich darauf verlassen, dass wir einen nahtlosen Service liefern.',
		'Wide Compatibility': 'Hohe Kompatibilität',
		"We're all about flexibility. Whether you need support for v1 or v2 API routes, or custom features for your next project, osu.direct has you covered. We're here to adapt to your needs and help you succeed.":
			'Bei uns dreht sich alles um Flexibilität. Egal, ob du Unterstützung für v1- oder v2-API-Routen oder benutzerdefinierte Funktionen für dein nächstes Projekt benötigst, osu.direct hat alles für dich. Wir passen uns an deine Bedürfnisse an und helfen dir, erfolgreich zu sein.',
		'Used and trusted by amazing projects like':
			'Verwendet und vertraut von erstaunlichen Projekten wie',
		'All Rights Reserved.': 'Alle Rechte vorbehalten.',
		'type in keywords...': 'Stichwörter eingeben...',
		Mode: 'Modus',
		Any: 'Alle',
		Qualified: 'Qualifiziert',
		Pending: 'Ausstehend',
		Graveyard: 'Begraben',
		graveyard: 'begraben',
		submitted: 'hochgeladen',
		'last updated': 'zuletzt aktualisiert',
		Length: 'Länge',
		Count: 'Anzahl',
		CTRL: 'STRG',
		'Quick Search': 'Schnellsuche',
		'showing {{from}} - {{to}} of {{total}} entries':
			'zeige {{from}} - {{to}} von {{total}} ergebnissen',
		'Search for Beatmaps...': 'Beatmaps suchen...',
		'Search for something c:': 'Suche nach etwas c:',
		'Loading Results...': 'Lade Ergebnisse...',
		'Search Results': 'Suchergebnisse',
		'No results found.': 'Keine Ergebnisse gefunden.',
		Browse: 'Suchen',
		'Support us!': 'Unterstütze uns!',
		'Join Discord': 'Discord beitreten',
		'More from': 'Mehr von',
		'Similar Sets': 'Ähnliche Sets',
		Categories: 'Kategorien',
		Hide: 'Verstecken',
		Show: 'Zeigen',
		Only: 'Nur',
		'Spotlighted beatmaps': 'Beatmaps im Spotlight',
		'Has Leaderboard': 'Hat Ranglisten',
		'Has Video': 'Hat Video',
		'Has Storyboard': 'Hat Storyboard',
		'Has Video and Storyboard': 'Hat Video und Storyboard',
		'BeatmapSet not found!': 'BeatmapSet nicht gefunden!',
		'Back to Browse Page': 'Zurück zur Browse Page',
		'Mapped by': 'Erstellt von',
		'mapped by': 'erstellt von',
		Title: 'Titel',
		Difficulty: 'Sternebewertung',
		Updated: 'Aktualisiert',
		updated: 'aktualisiert',
		created: 'erstellt',
		Submitted: 'Hochgeladen',
		Favourites: 'Favoriten',
		'Download Queue': 'Warteschlange',
		'Download Maps': 'Maps herrunterladen',
		'Download Maps (no video)': 'Maps herrunterladen (ohne video)',
		'Download (no video)': 'Download (ohne video)',
		'Add to collection.db': 'Zu collection.db hinzufügen',
		Favourite: 'Favorisieren',
		Collections: 'Kollektionen',
		'Edit Collection': 'Kollekiton bearbeiten',
		'Delete Collection': 'Kollektion löschen',
		'Show Unranked Guest Participations': 'Ungerankte Gastteilnahmen anzeigen',
		'Account History': 'Account Verlauf',
		'Guest Participation Beatmaps': 'Als Gast beigetragene Beatmaps',
		'Pending Beatmaps': 'Ausstehende Beatmaps',
		'Graveyarded Beatmaps': 'Begrabene Beatmaps',
		'This user has no ranked maps.': 'Dieser User hat keine gerankten Maps.',
		'This user has no loved maps.': 'Dieser User hat keine loved Maps.',
		'This user has no guest participations.': 'Dieser User hat keine als Gast beigetragene Maps.',
		'This user has no pending maps.': 'Dieser User hat keine ausstehenden Maps.',
		'This user has no WIP maps.': 'Dieser User hat keine WIP Maps.',
		'This user has no graveyarded maps.': 'Dieser User hat keine begrabenen Maps.',
		'Scan this QR code to instantly access the BeatmapSet page on any device, download it, and share it across different platforms.':
			'Scanne diesen QR-Code, um direkt die BeatmapSet-Seite auf jedem Gerät zu öffnen, sie herunterzuladen und auf verschiedenen Plattformen zu teilen.',
		'Download QR Code': 'QR-Code herunterladen',
		'Site not found!': 'Seite nicht gefunden!',
		'show more': 'mehr anzeigen',
		'Star Rating': 'Sternebewertung',
		Accuracy: 'Präzision',
		by: 'von',
		'Favourite Beatmaps': 'Beliebte Beatmaps',
		'Most Played Beatmaps': 'Meist gespielte Beatmaps',
		'New Ranked Beatmaps': 'Neu gerankte Beatmaps',
		'Seamless Compatibility': 'Nahtlose Kompatibilität',
		'seamlessly works with both osu!stable and osu!lazer clients, effortlessly importing downloaded beatmaps regardless of which client you use, ensuring a consistent and hassle-free experience across different versions of the game.':
			'Arbeitet nahtlos mit den beiden Clients osu!stable und osu!lazer zusammen und importiert heruntergeladene Beatmaps mühelos, unabhängig davon, welchen Client du verwendest, um eine konsistente und problemlose Erfahrung über verschiedene Versionen des Spiels hinweg zu gewährleisten.',
		'Easy Handling': 'Einfache Handhabung',
		'offers the same extensive features as the official website, providing users with a comprehensive platform for discovering and downloading beatmaps directly from their desktop application, streamlining the entire process.':
			'Bietet dieselben umfangreichen Funktionen wie die offizielle Website und stellt den Nutzern eine umfassende Plattform zum Entdecken und Herunterladen von Beatmaps direkt aus ihrer Desktop-Anwendung zur Verfügung, wodurch der gesamte Prozess vereinfacht wird.',
		'Familiar and Hassle-free Experience': 'Vertraute und mühelose Erfahrung',
		'ensures a seamless transition from the website by mirroring its intuitive and user-friendly interface. With the same UI design, users can effortlessly navigate, search, and download their favorite beatmaps with minimal effort, promoting overall usability and satisfaction without the need for relearning or adjustment.':
			'Sorgt für einen nahtlosen Übergang von der Website, indem es deren intuitive und benutzerfreundliche Oberfläche widerspiegelt. Mit dem gleichen UI-Design können die Benutzer mühelos navigieren, suchen und ihre Lieblings-Beatmaps mit minimalem Aufwand herunterladen, was die allgemeine Benutzerfreundlichkeit und Zufriedenheit fördert, ohne dass ein Umlernen oder eine Anpassung erforderlich ist.',
		'Why should i use the Desktop App?': 'Wieso sollte ich die Desktop App benutzen?',
		'Track all your downloads here in this Download Queue Manager.':
			'Verfolge alle deine Downloads hier in diesem Download Manager.',
		'Add advanced filter': 'Erweiterten Filter hinzufügen',
		'Select a filter value': 'Wähle einen Filterwert',
		'This is taking longer than expected...': 'Das dauert länger als erwartet...',
		'API Documentation': 'API-Dokumentation',
		'This beatmap contains a video': 'Diese Beatmap beinhaltet ein Video',
		'This beatmap contains a storyboard': 'Diese Beatmap beinhaltet ein Storyboard',
		'This beatmap is spotlighted': 'Diese Beatmap ist spotlighted',
		'Search, discover, and download osu! beatmaps': 'Suche, entdecke und downloade osu! beatmaps',
		'effortlessly. Built for speed and simplicity, designed for players, by players.':
			'mühelos. Entwickelt für Geschwindigkeit und Einfachheit, für Spieler, von Spielern.',
		'See why players love osu.direct': 'Schau, warum Spieler osu.direct lieben',
		'Terms of Service': 'Nutzungsbedingungen',
    'Download for Windows': "Download für Windows"
	}
};

export default language;
