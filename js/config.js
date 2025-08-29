//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
	"image10.jpg",
	"image11.jpg",
	"image12.jpg",
	"image13.jpg",
	"image14.jpg",
	"image15.jpg",
	"image16.jpg",
	"image17.jpg",
	"image18.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "33.ogg", name: "Installation Music"},
	{ogg: "goofygooberrockInstrumental.ogg", name: "Installation Music"},
	{ogg: "employeeofthemonthInstallmusic.ogg", name: "Installation Music"},
	{ogg: "wishcouldflyInstrumental.ogg", name: "Installation Music"},
	{ogg: "alohaandkkshit.ogg", name: "Installation Music"},
	{ogg: "spongebobinstrumental.ogg", name: "Installation Music"},
	{ogg: "dayeverInstrumental.ogg", name: "Installation Music"},
	{ogg: "tiptoppolkthecliffpolka.ogg", name: "Installation Music"},
	{ogg: "garycomehomeInstrumental.ogg", name: "Installation Music"},
	{ogg: "goofygooberrockInstrumental.ogg", name: "Installation Music"},
	{ogg: "productionmusicshit.ogg", name: "Installation Music"},
	{ogg: "sbobthemob.ogg", name: "Installation Music"},
	{ogg: "sweetvictoryInstrumental.ogg", name: "Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = false;

// Enter your custom messages below
var l_messages = [
	"Staff ALWAYS have the final say; if they tell you to stop- you got to stop. Otherwise, you can/will be warned!",
	"Abusing glitches or hacks will result in a warning or ban, depending on the severity of the offense!",
	"Staff members have the final say. If you feel something was unfair, appeal respectfully through the proper channels!",
	"Please No spamming or causing any kind of nuisance or inconveniences!",
	"No DM advertising or advertising in general chats. (#server-content and #server-clips are exceptions, promoting the  Pill Pack Hide & Seek discord server and sharing clips of the GMod server are exceptions!",
	"No Erotic Roleplay (ERP): All forms of ERP or sexual content are strictly prohibited, even if meant humorously. This includes suggestive language, emotes, or text-based interactions!",
	"Prop abuse of any kind is not allowed including blocking, killing, bridging, or spamming props!",
	"Regardless of personal opinions, the rules are in place to be followed. If you have concerns, you're welcome to share them respectfully but adherence is mandatory. Failure to comply may result in serious consequences!",
	"Do not Powergame. You cannot force actions upon others without their consent or a fair chance to react. Use /me attempts to instead of forcing outcomes!",
	"Donations and packages (e.g., VIP, PAC3) are non-refundable. AN reserves the right to revoke or alter any perks at any time. No refunds will be given for changes of mind!",
	"Please do not attempt chargebacks. If you experience any issues, contact staff directly we're here to help. Chargebacks will result in a permanent ban!",
	"Please do not attempt chargebacks. If you experience any issues, contact staff directly we're here to help. Chargebacks will result in a permanent ban!",
	"All donations are final. No refunds for VIP, PAC3, or any other perks. We may modify or revoke perks at any time. Change-of-mind refunds will not be honored!",
	"Please don’t attempt chargebacks. If there’s an issue, reach out to staff we’re happy to help, but chargebacks will get you banned!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Common Sense Applies: Not every scenario is covered by the rules. If your actions harm roleplay or negatively impact others, it’s not allowed!",
	"Our admins and moderators are trusted to take action when needed. If you think something was handled unfairly, you’re welcome to file a ban appeal—we’ll make sure it’s reviewed properly!",
	"From 12:00 AM to 5:00 AM (in-game), animatronics have full KOS rights. The restaurant is considered closed during these hours—anyone who enters does so at their own risk and may be eliminated on sight!",
	"Whether you agree with them or not, the regulations exist for a reason and must be followed. Concerns can be raised appropriately, but ignoring the rules will lead to severe punishment!",
	"Threats against any member will not be tolerated. This includes death threats, scamming, blackmail, and suspicious links or websites claiming to offer free items. Ensure that everything you post complies with the law!",
	"No ERP (Erotic Roleplay) Absolutely no ERP or sexual content, even if intended as a joke. This includes suggestive emotes or text!",
	"On a lower tier, permanent bans may still be issued for explicit harassment including things like extreme trolling (e.g., spamming slurs) and persistent chat or microphone spam. In short, this applies to players who are clearly here just to break the rules on purpose!",
	"As a general rule, permanent bans should be reserved for players who pose a serious threat to server stability — such as spamming, prop pushing, or blocking train routes. In most other cases, warnings or kicks are more appropriate. However, permanent bans may also be issued for severe misconduct, including explicit harassment (e.g., 4chan-style trolling or hate speech) and excessive chat or microphone spam. In short, perma-bans are for those who join with the clear intent to break the rules!",
	"You may grant yourself the very weapon you trade on the black market. However, per section 6.3, should you acquire firearms and refrain from selling them altogether—choosing instead to keep them for yourself you shall face an appropriate punishment!",
	"We do not offer refunds for donations or packages, including VIP, PAC3 access, or similar items. Refunds will not be granted for sale items due to change of mind. Authoritarian Nation (AN) holds no contractual obligation to provide donation packages, which may be modified or revoked at any time. Additionally, art subjects or content may be adjusted as needed!",
	"Staff Have Final Say: If a staff member makes a decision, respect it. You may appeal it later, but do not argue excessively in the moment!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Users marked with the 'Exiled' status have earned it by repeatedly violating community rules, receiving multiple bans, or attempting to dispute punishments or issue chargebacks — actions that go against our refund and conduct policies. Being exiled designates you as an outcast from the community. As such, exiled individuals are not to be discussed or referenced within the community!",
	"Please remain in the office. Night guards must stay in the office at all times, unless specific rules allow exploration during designated events!",
	"Any racism, sexism, transphobia, homophobia, fake news, leaks, sharing of sensitive/personal messages or information, sharing of images or videos without an individual’s consent, discussion of abusive or suicidal topics etc are prohibited on this server!",
	"Erotic Roleplay is strictly prohibited! Participating in ERP violates server rules and will lead to a ban. Please adhere to the community guidelines and show respect for others!",
	"No RDM, MRDM, VDM basically, don’t go around killing people for no reason. Or a middle ground!",
	"Attempting to charge back a donation or purchase is a serious violation of our terms and may result in a permanent ban!",
	"Chargeback attempts are treated as fraud and will result in immediate loss of access to any associated services or perks!",
	"No RDM, MRDM, VDM, etc Random Death Match, Mass Random Death Match, Vehicle Death Match, etc!",
	"Be kind, friendly and respectful to one another! Any intentional harassment, bad behaviour and bullying will not be tolerated. All Discord usernames, statuses and profile pictures should also be kept respectful and you shouldn’t be saying anything you think is inappropriate!",
	"The safety and well-being of our members, particularly minors, is a shared responsibility. We encourage all members to actively participate in maintaining a safe community by adhering to these rules and reporting any violations they may witness!",
	"Like it or not, the rules aren’t optional. You’re expected to follow them — and breaking them can result in serious consequences!",
	"Do Not Exploit or Glitch Any exploitation of bugs, glitches, map issues, or unintended mechanics will result in punishment!",
	"We expect everyone to treat each other with respect. Harmful or rude comments aren't welcome here let’s keep things positive and inclusive!",
	"Any form of prop abuse is strictly prohibited. This includes, but is not limited to, prop-blocking, prop-killing, prop-bridging, or using an excessive number of props!",
	"Please No Camping The Animatronics should not be camping in one location, such as the office, for extended periods unless it aligns with RP or game mechanics!",
	"Between 12 AM and 5 AM in-game, the animatronics enter night mode and are allowed to KOS. The restaurant is closed — any humans caught inside may be terminated immediately!",
	"Uh, ok so just a quick heads up no saying slurs, like, uh, the N-word. If you do, you'll get timed out for an hour as a warning. Uh, you get two warnings, and if you still don't listen, well… uh, you’ll be kicked. So, uh, yeah—just keep it clean, alright? Thanks!",
	"Admins and moderators have the discretion to mute, kick, or ban players when necessary. If you believe a decision was unfair, please submit a ban appeal via the forms, and we will review the situation fairly!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"We are committed to maintaining a safe and inclusive space for all members. These rules will be actively monitored and enforced, and we’ll continue to review and update them as needed!",
	"Mic Spamming/Chat Spamming: Refrain from creating excessive noise or sending repetitive messages that disrupt the gameplay experience for others!",
	"Let me be very clear — props? Should NOT be abused. Not in any way. Not in any form. We don't want prop-blocking, we don't want prop-killing, no prop-bridging, no spamming it's a disaster, folks. Total disaster. Keep it clean, keep it fair. Only good props. The best props. Believe me!",
	"Advertising is strictly prohibited, whether in public channels or direct messages. This includes promotion of servers, products, or services. Using our server to spam or advertise to others will result in disciplinary action!",
	"No Griefing or Raiding: Respect other players' builds and property. Griefing, raiding, or stealing without valid roleplay justification is strictly Prohibited!",
	"Offensive slurs, antisemitism, racism, homophobia, whiteshaming, absolutely any promotion of extremist views/political ideologies are not allowed. Breaking this rule either leads to 4 days of isolation, or immediate ban!",
	"We uphold a strict zero-tolerance policy regarding sensitive content, including—but not limited to—pornography, pedophilia, and graphic violence. Posting such material will lead to immediate consequences, such as a mute, kick, or ban!",
	"No condone of racism, homophobia, transphobia, or sexism in any form. No targeted harassment in general. Get that shit outta here. For the love of god no rape jokes and no hateful language or jokes. Use of hateful imagery (such as swastikas, black sun, confederate flag etc.) will also be punished!",
	"We are committed to ensuring that everyone enjoys a pleasant experience here. If you have any questions or need assistance, please feel free to reach out to our staff they are always ready to help!",
	"Staff are responsible for enforcing the rules. Arguing with their decisions is discouraged. If you believe you’ve been treated unfairly, you’re welcome to submit a ticket for review through our Discord server!",
	"Kind reminder: Don’t advertise your server, product, or service even in DMs. We’re keeping this space clean and spam-free for everyone!",
	"We’re committed to making sure everyone has a great experience here. If you have any questions or need help, don’t hesitate to reach out to our staff they’re always happy to assist!",
	"The use of slurs, such as the N-word, is strictly prohibited. Violations will result in a one-hour timeout as a warning. You will receive up to two warnings; any further violations will lead to removal from the platform!",
	"Your donation status does not change the fact that you are a valued member of our community. However, it does not place you above our rules or any other expectations. You are still required to follow our guidelines!",
	"Attacking with splash damage through props, walls, or beyond the pizzeria's territory is strictly forbidden. Intentionally attacking animatronics and plush toys outside the pizzeria's territory is also prohibited. Climbing stairs is not allowed (except for Purple Guy in the guise of a security guard). Punishment: Warning / 10-20 minute ban!",
	"Value your character’s life. Reckless behavior such as suicide-by-cop, unnecessary rushing, or unrealistic heroics—is considered FailRP!",
	"Please do not advertise your own content or server—this includes servers, products, or services even in private messages. We want to keep the community free of spam for everyone!",
	"Evading a ban or warning by using an alternate Steam or GMod account is strictly prohibited and will lead to a permanent ban!",
	"If there’s a problem, just reach out to our staff we’re happy to help! Please don’t file a chargeback, as it will lead to a ban!",
	"Value Your Life You should act as if your character wants to survive. Suicide-by-cop, pointless rushing, or unrealistic heroics are FailRP!",
	"No RDM (Random Deathmatch): Uh, attacking or killing other players without a valid in-roleplay reason is, uh, strictly prohibited!",
	"KOS signs must be clearly placed at the entrance of a KOS area and should be appropriately sized and colored for visibility. Any attempts to bait players into areas with unclear or obscure KOS signs will result in staff-issued punishment!",
	"You are not allowed to take control of locations. If you raid a place, you must leave once your objective is achieved. Do NOT remain to obstruct others from returning for an extended period!",
	"Attempting to charge back a donation or purchase is a serious violation of our terms and may result in a permanent ban!",
	"The staff is responsible for maintaining the rules. Arguing with them over their decisions is discouraged. If you believe you were treated unfairly, you may submit a ticket for review in our dsicord server!",
	"Promoting your company or organization outside the server is prohibited unless you obtain explicit permission from the founders. However, promoting in-game businesses is permitted!",
	"You don’t have to do something massive to get perma-banned. If you're spamming slurs, mic-spamming, or just trolling to cause chaos, you’re gone. Simple as that!",
	"Signs must be used for role-play purposes only. No GIFs, trolling, or inappropriate content — including racism, adult material, or anything offensive to religion!",
	"If you respectfully disagree with the actions taken by the administration, If you find yourself in disagreement with the reason for a kick or ban, you are always free to explore and play on other servers. Please remember that all Garry's Mod servers are community-hosted, and access to them is ultimately at the discretion of their respective administrations!",
	"Any posted content that the admins or moderators find suggestively offensive in the channels, depending on the situation, will result in anything from a warning to a possible ban!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Look Please Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"Users with the exiled status have earned it by repeatedly violating our community rules, resulting in multiple bans, or by attempting to dispute or charge back payments (which is against our refund policy). Being exiled marks you as an outcast. Exiled users should not be mentioned or discussed within the community!",
	"It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications!",
	"No threats of violence or threaten to harm others. This includes indirect or suggestive threats, as well as sharing or threatening to share someone’s personally identifiable information (also known as doxxing!",
	"Advertising your own products, services, or servers is not allowed this includes private messages. Please do not use our server to spam or promote content to other Discord users!",
	"Recording is allowed on the server and playing on it has the added chance of you being in someone elses videos!",
	"Do not impersonate any individuals on the server. Abuse of this will result in kick or ban!",
	"No malicious content No grabify links, viruses, crash videos, links to viruses, or token grabbers. These will result in an automated ban!",
	"No abuse of glitches/hacks, it will result in a warning or ban depending on the severity of the offense!",
	"Failure to follow these rules will result in an appealable ban, on your second ban you can not appeal!",
	"No DM advertising or advertising in general chats. (#server-content and #server-clips are exceptions!",
	"Be respectful with all members Be respectful to others , No death threats, sexism, hate speech, racism (NO N WORD, this includes soft N) > No doxxing, swatting, witch hunting, or any drama in the slightest. Drama will result in consequences!",
	"Racial slurs, homophobic comments, or any other offensive remarks are prohibited according to the rules. Staff have the final authority to determine what is permissible!",
	"No abuse of glitches/hacks will result in a warning or ban depending on the severity of the offense!",
	"Treat all members with respect. Banter is fine, but offensive, hateful, or harassing behavior will not be tolerated!",
	"DDoS or the publicizing of other member's private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"Sending any NSFW, Gore, Racist, Queerphobic or etcetera messages this will result in a permanent NOT APPEALABLE ban!",
	"Raiding the server is against our terms of service. Any attempt to circumvent or bypass them can result in a permanent ban. As well as putting everyone in different chats with only trusted people, if you get cought raiding, that's an insta ban!",
	"Recording is allowed on the server, so by playing here, you might just find yourself starring in someone else's videos!",
	"Oh, any violations of these oh-so-important rules will have our incredibly loyal mods give you a gentle warning. Keep it up, and you'll be kicked out—or if it's something really bad, banned. So, pretty please, don't cause any trouble. Have a nice day!",
	"Press f1 to toggle third-person camera on and off Press f2 to access the shop Press f3 to access your profile information with season and leaderboard information. Press f5 to take a screenshot Press f7 to show the emote wheel!",
        "Feel free to ask any of our lovely staff members, they are always open to help. The community is also very helpful as our active player base is very welcoming to new players If you need this in another language or context, please let me know!"

];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};





