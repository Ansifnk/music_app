import React, { useState } from 'react'
import MusicItem from '../components/MusicItem'
import SearchComp from '../components/SearchComp'
import { Music } from '../utils/interfaces'

const data = {
    "tracks": {
        "hits": [
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "453529607",
                    "title": "Game (feat. Lil Durk, Tee Grizzley, Sada Baby & YNW Melly)",
                    "subtitle": "Only The Family",
                    "share": {
                        "subject": "Game (feat. Lil Durk, Tee Grizzley, Sada Baby & YNW Melly) - Only The Family",
                        "text": "I used Shazam to discover Game (feat. Lil Durk, Tee Grizzley, Sada Baby & YNW Melly) by Only The Family.",
                        "href": "https://www.shazam.com/track/453529607/game-feat-lil-durk-tee-grizzley-sada-baby-ynw-melly",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/c6/e6/d7/c6e6d72c-2fb6-520f-9267-61ca6e90f665/888915801956_cover.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover Game (feat. Lil Durk, Tee Grizzley, Sada Baby & YNW Melly) by Only The Family.",
                        "html": "https://www.shazam.com/snippets/email-share/453529607?lang=en-US&country=US",
                        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/39/c3/a4/39c3a41b-1802-0578-2d2b-bd141614c9d9/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/453529607"
                    },
                    "images": {
                        "background": "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/39/c3/a4/39c3a41b-1802-0578-2d2b-bd141614c9d9/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/c6/e6/d7/c6e6d72c-2fb6-520f-9267-61ca6e90f665/888915801956_cover.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/c6/e6/d7/c6e6d72c-2fb6-520f-9267-61ca6e90f665/888915801956_cover.jpg/400x400cc.jpg",
                        "joecolor": "b:f4f4f4p:090909s:323232t:383838q:595959"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1446952438"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/94/49/a2/9449a2a6-df55-71b9-fb73-49691bcd7405/mzaf_13406643292329145356.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/game-feat-lil-durk-tee-grizzley-sada-baby-ynw-melly/1446952437?i=1446952438&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/game-feat-lil-durk-tee-grizzley-sada-baby-ynw-melly/1446952437?i=1446952438&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/game-feat-lil-durk-tee-grizzley-sada-baby-ynw-melly/1446952437?i=1446952438&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:Game%20%28feat.%20Lil%20Durk%2C%20Tee%20Grizzley%2C%20Sada%20Baby%20%26%20YNW%20Melly%29%20Only%20The%20Family"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Game+%28feat.+Lil+Durk%2C+Tee+Grizzley%2C+Sada+Baby++YNW+Melly%29%27%20artist%3A%27Only+The+Family%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": true,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1416314543"
                        }
                    ],
                    "url": "https://www.shazam.com/track/453529607/game-feat-lil-durk-tee-grizzley-sada-baby-ynw-melly"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "411905164",
                    "title": "Game",
                    "subtitle": "Doja Cat",
                    "share": {
                        "subject": "Game - Doja Cat",
                        "text": "I used Shazam to discover Game by Doja Cat.",
                        "href": "https://www.shazam.com/track/411905164/game",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/b8/35/d9/b835d9f2-ed15-61f9-64e9-17e18ca7806b/886446943350.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover Game by Doja Cat.",
                        "html": "https://www.shazam.com/snippets/email-share/411905164?lang=en-US&country=US",
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d7/a7/37/d7a73703-ee4b-29b7-8f22-64d7b88a31b6/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/411905164"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d7/a7/37/d7a73703-ee4b-29b7-8f22-64d7b88a31b6/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/b8/35/d9/b835d9f2-ed15-61f9-64e9-17e18ca7806b/886446943350.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/b8/35/d9/b835d9f2-ed15-61f9-64e9-17e18ca7806b/886446943350.jpg/400x400cc.jpg",
                        "joecolor": "b:b18a6dp:0a0303s:2e170et:2b1e18q:482e21"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1364077458"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/74/d4/05/74d4057a-4332-587e-6a6e-c45dbc732fe2/mzaf_13288170384763907222.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/game/1364076874?i=1364077458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/game/1364076874?i=1364077458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/game/1364076874?i=1364077458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:Game%20Doja%20Cat"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Game%27%20artist%3A%27Doja+Cat%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": true,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "830588310"
                        }
                    ],
                    "url": "https://www.shazam.com/track/411905164/game"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "40657377",
                    "title": "Hate It Or Love It (feat. 50 Cent)",
                    "subtitle": "The Game",
                    "share": {
                        "subject": "Hate It Or Love It (feat. 50 Cent) - The Game",
                        "text": "I used Shazam to discover Hate It Or Love It (feat. 50 Cent) by The Game.",
                        "href": "https://www.shazam.com/track/40657377/hate-it-or-love-it-feat-50-cent",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/53/c8/a7/53c8a79b-ee31-dcf3-9880-fdb3f498794b/00602498641439.rgb.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover Hate It Or Love It (feat. 50 Cent) by The Game.",
                        "html": "https://www.shazam.com/snippets/email-share/40657377?lang=en-US&country=US",
                        "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/c2/0c/64c20c32-bd01-0339-8f79-31ef7ba9fb2c/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/40657377"
                    },
                    "images": {
                        "background": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/c2/0c/64c20c32-bd01-0339-8f79-31ef7ba9fb2c/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/53/c8/a7/53c8a79b-ee31-dcf3-9880-fdb3f498794b/00602498641439.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/53/c8/a7/53c8a79b-ee31-dcf3-9880-fdb3f498794b/00602498641439.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:eff2f7p:000001s:500c0et:2f3032q:6f3a3c"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1440799195"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0f/e6/17/0fe6173d-1c4b-6d9b-380e-454a74f70df3/mzaf_7876162755315206741.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/hate-it-or-love-it-feat-50-cent/1440799117?i=1440799195&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/hate-it-or-love-it-feat-50-cent/1440799117?i=1440799195&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/hate-it-or-love-it-feat-50-cent/1440799117?i=1440799195&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:Hate%20It%20Or%20Love%20It%20%28feat.%2050%20Cent%29%20The%20Game"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Hate+It+Or+Love+It+%28feat.+50+Cent%29%27%20artist%3A%27The+Game%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": true,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "261727947"
                        }
                    ],
                    "url": "https://www.shazam.com/track/40657377/hate-it-or-love-it-feat-50-cent"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "535707634",
                    "title": "Game",
                    "subtitle": "Shooter Kahlon & Sidhu Moose Wala",
                    "share": {
                        "subject": "Game - Shooter Kahlon & Sidhu Moose Wala",
                        "text": "I used Shazam to discover Game by Shooter Kahlon & Sidhu Moose Wala.",
                        "href": "https://www.shazam.com/track/535707634/game",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/28/3c/e9/283ce906-658f-f0cb-8f84-e2f97b25123c/56.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover Game by Shooter Kahlon & Sidhu Moose Wala.",
                        "html": "https://www.shazam.com/snippets/email-share/535707634?lang=en-US&country=US",
                        "snapchat": "https://www.shazam.com/partner/sc/track/535707634"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/28/3c/e9/283ce906-658f-f0cb-8f84-e2f97b25123c/56.jpg/400x400cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/28/3c/e9/283ce906-658f-f0cb-8f84-e2f97b25123c/56.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/28/3c/e9/283ce906-658f-f0cb-8f84-e2f97b25123c/56.jpg/400x400cc.jpg",
                        "joecolor": "b:c3c3c3p:060606s:1e1e1et:2c2c2cq:3f3f3f"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1529863568"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8f/ed/44/8fed44e5-8d8c-bc96-00d1-9ddffae45094/mzaf_14414222072399223449.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/game/1529863322?i=1529863568&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/game/1529863322?i=1529863568&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/game/1529863322?i=1529863568&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:Game%20Shooter%20Kahlon"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Game%27%20artist%3A%27Shooter+Kahlon++Sidhu+Moose+Wala%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1529863567"
                        }
                    ],
                    "url": "https://www.shazam.com/track/535707634/game"
                }
            }
        ]
    },
    "artists": {
        "hits": [
            {
                "artist": {
                    "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/64/c2/0c/64c20c32-bd01-0339-8f79-31ef7ba9fb2c/pr_source.png/800x800bb.jpg",
                    "name": "The Game",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/the-game/261727947",
                    "adamid": "261727947"
                }
            },
            {
                "artist": {
                    "name": "The Game",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/the-game/1272903240",
                    "adamid": "1272903240"
                }
            },
            {
                "artist": {
                    "name": "Game",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/game/1171168919",
                    "adamid": "1171168919"
                }
            },
            {
                "artist": {
                    "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/14/f6/1d/14f61d68-3186-54f4-d13f-798d713279ee/672985571907.png/800x800ac.jpg",
                    "name": "Game",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/game/560545888",
                    "adamid": "560545888"
                }
            },
            {
                "artist": {
                    "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/94/1a/df/941adf33-84b5-844c-ac3b-fb1653781fdd/cover.jpg/800x800ac.jpg",
                    "name": "G.A.M.E.",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/g-a-m-e/155881731",
                    "adamid": "155881731"
                }
            }
        ]
    }
}

const SearchPage = () => {



    const [musics, setMusics] = useState<Music[]>([])
//   const [musics, setMusics] = useState<Music[]>(data.tracks.hits.map((m: any) => ({ title: m.track.title,subTitle:m.track.subtitle,coverImage:m.track.images.background })))
    return (
        <div className='m-0 p-0 container'  >
            <div className='py-5 px-3' style={{ backgroundColor: "#3795BD" }} >
                <h2 className='text-white ' >Search For fascinating musics</h2>
            </div>

            <SearchComp setMusics={setMusics} />

            <div className='p-3 row ' >
                {
                    musics.map(m => <MusicItem music={m} />)
                }
            </div>

        </div>
    )
}

export default SearchPage