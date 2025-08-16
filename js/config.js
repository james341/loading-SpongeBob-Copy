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
	"image13.jpg"
	"image14.jpg"
	"image15.jpg"
	"image16.jpg",

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
	{ogg: "dayeverInstrumental.ogg", name: "Installation Music"},
	{ogg: "alohaandkkshit.ogg", name: "Installation Music"},
	{ogg: "33.ogg", name: "Installation Music"},
	{ogg: "garycomehomeInstrumental.ogg", name: "Installation Music"},
	{ogg: "goofygooberrockInstrumental.ogg", name: "Installation Music"},
	{ogg: "sbobthemob.ogg", name: "Installation Music"},
	{ogg: "behindtheslaughteremix.ogg", name: "Installation Music"},
	{ogg: "sweetvictoryInstrumental.ogg", name: "Installation Music"},
	{ogg: "tiptoppolkthecliffpolka.ogg", name: "Installation Music"},
	{ogg: "productionmusicshit.ogg", name: "Installation Music"},
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
	"Keep all text signs appropriate and in-character. GIFs, unrelated content, and anything racist, pornographic, or religiously offensive will not be tolerated!",
	"Staff members, including admins and moderators, have the discretion to mute, kick, or ban players when necessary. If you believe you were treated unfairly, please submit a ban appeal through the appropriate form, and we will review your case fairly!",
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
	"Exploiting bugs, glitches, map features (such as going out of bounds or standing on the very edges of a map), or loopholes in the rules is prohibited. Abusing an exploit for any reason is punishable!",
	"Our staff team has the authority to take action when needed. If you feel a punishment was unjust, submit a ban appeal and we’ll make sure it gets a fair review!",
	"Don't say anything that could possibly hurt others (racial slurs, general slurs, etc!",
    "Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
    "Breaking the NLR (New Life Rule) involves returning to the location of your death within five minutes or interacting with the player who killed you. Violating this rule may result in a verbal warning, a written warning, or a ban for repeat offenders. Additionally, returning near your base to observe raiders, even without interaction, is also considered breaking NLR. Avoid doing so!"

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









