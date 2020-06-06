===========================================
Police Radio Scanner Browser Source for OBS
===========================================

This app is meant to serve as a resource for organizers whose
knowledge of police directives, movements, and actions during
protest activities is key.

It's designed to be used as a local "browser source" in OBS Studio
(https://obsproject.com) for re-broadcasting on platforms like
Twitch, YouTube Live, and Facebook Live. OBS Studio is a free
utility, and there will *eventually* be no techno-magic to get
this set up for those completely unfamiliar with livestreaming;
more to come soon.

This app has been set up to monitor NYPD movements during the
June 2020 #BlackLivesMatter protests in New York City, but can be
adapted (with limited functionality) to serve any locality whose
police radios are available on Broadcastify.com out of the box.

Note that the ScanMap utility is only functional New York City,
Los Angeles, Austin, Bay Area, Chicago, and Philadelphia in the
United States at present (https://scanmap.frnsys.com/).

INSTALLATION
------------
Simply copy and paste the contents of the ZIP file to an easily
accessible directory on your local machine.

CUSTOMIZATION/LOCALIZATION
--------------------------
TO DO -- perhaps provide a script that sets users up by locality.
Note that, by default, JavaScript will print the timestamp in
local time automatically -- no configuration required to set the
time zone for the clock utility.

OBS SETUP
---------
In creating a scene for OBS Studio, create a new Browser Source,
tick "local source," and choose the "index.html" file in the
package. I recommend managing browser audio in OBS.

The browser source is set up for 1280x720 resolution, so set the
Browser Source size to 1280x720. In future releases, I'll include
media queries in the stylesheets so it can be adapted to other
common resolution configurations, but most (decently modern)
systems should be able to handle the encoding and rendering
required to run this source at 720p (and no reason to run your
scene collection at 60fps).

USAGE
-----
Both the Broadcastify media utility and the ScanMap utility are
set up as iframes and are meant to be interacted with during broadcast.
To start the Broadcastify player, select "interact" from the menu
that appears when you right-click on the browser source and click
"Play." A big red button under the media player toggles its
visibility.

ScanMap updates automatically, though it doesn't yet re-center its map
to the latest update location reliably in OBS at present. To re-center
the map, click and drag the map (in "interact" mode); use the mouse
scroll wheel to zoom in and out.

SPECTRALIZER
------------
Optionally, univrsal's spectralizer plugin for OBS can be set up to
display a simple bar-graph visualization. Follow the steps here
(https://obsproject.com/forum/resources/spectralizer.861/) to download
and install; set the browser source as the audio input to send sound
to the spectralizer.