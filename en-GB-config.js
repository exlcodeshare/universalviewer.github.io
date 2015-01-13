{
    "options": {
        "theme": "coreplayer-default-theme",
        "dziBaseUri": "http://wellcomelibrary.org",
        "thumbsBaseUri": "http://wellcomelibrary.org",
        "mediaBaseUri": "http://wellcomelibrary.org",
        "prefetchBaseUri": "http://wellcomelibrary.org",
        "searchBaseUri": "http://wellcomelibrary.org",
        "autoCompleteBaseUri": "http://wellcomelibrary.org",
        "moreInfoBaseUri": "http://wellcomelibrary.org",
        "loginBaseUri": "http://wellcomelibrary.org",
        "cropBaseUri": "http://wellcomelibrary.org",
        "imageBaseUri": "http://wellcomelibrary.org",
        "overrideFullScreen": false,
        "preloadMoreInfo": false,
        "embedEnabled": true,
        "downloadEnabled": true,
        "saveToLightboxEnabled": true
    },
    "modules": {
        "genericDialogue": {
            "content": {
                "emptyValue": "please enter a value",
                "pageNotFound": "This item does not contain a page with the number you entered. Try switching the numbering mode to 'image'",
                "ok": "OK",
                "refresh": "Refresh",
                "invalidNumber": "Please enter a valid number"
            }
        },
        "helpDialogue": {
            "content": {
                "title": "Help",
                "text": "placeholder text"
            }
        },
        "embedDialogue": {
            "options": {
                "embedTemplate": "<div class=\"uv\" data-uri=\"{0}\" data-sequenceindex=\"{1}\" data-assetindex=\"{2}\" data-zoom=\"{3}\" data-rotation\"{4}\" data-config=\"{5}\" style=\"width:{6}px; height:{7}px; background-color: #000\"></div>\n<script type=\"text/javascript\" id=\"embedUV\" src=\"{8}\"></script><script type=\"text/javascript\">/* wordpress fix */</script>"
            },
            "content": {
                "title": "Embed",
                "instructions": "To embed this item in your own website, copy and paste the code below:"
            }
        },
        "pagingHeaderPanel": {
            "content": {
                "help": "Help",
                "image": "Image",
                "page": "Page",
                "first": "First",
                "previous": "Previous",
                "next": "Next",
                "last": "Last",
                "go": "Go",
                "of": "of {0}",
                "emptyValue": "Please enter a value",
                "close": "Close"
            }
        },
        "treeViewLeftPanel": {
            "options": {
                "thumbsLoadRange": 15,
                "thumbsImageFadeInDuration": 300,
                "panelCollapsedWidth": 30,
                "panelExpandedWidth": 255,
                "panelOpen": true,
                "panelAnimationDuration": 250,
                "thumbsExtraHeight": 6
            },
            "content": {
                "index": "Index",
                "thumbnails": "Thumbnails"
            }
        },
        "seadragonCenterPanel": {
            "content": {
                "previous": "Previous",
                "next": "Next",
                "zoomIn": "Zoom In",
                "zoomOut": "Zoom Out"
            }
        },
        "moreInfoRightPanel": {
            "options": {
                "panelCollapsedWidth": 30,
                "panelExpandedWidth": 255,
                "panelAnimationDuration": 250,
                "panelOpen": false
            },
            "content": {
                "holdingText": "Your module goes here!"
            }
        },
        "footerPanel": {
            "options": {
                "embedEnabled": true,
                "minimiseButtons": false
            },
            "content": {
                "fullScreen": "Full Screen",
                "exitFullScreen": "Exit Full Screen",
                "embed": "Embed"
            }
        }
    }
}