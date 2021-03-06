Page({
    data: {
        markers: [{
            iconPath: "../images/location.png",
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 30,
            height: 30
        },
        {
            iconPath: "../images/location.png",
            id: 1,
            latitude: 23.199994,
            longitude: 113.324520,
            width: 30,
            height: 30
        }
        ],
        polyline: [{
            points: [{
                longitude: 113.324520,
                latitude: 23.099994
            }, {
                    longitude: 113.324520,
                latitude: 23.199994
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
        }],
        controls: [{
            id: 1,
            iconPath: '../images/location-control.png',
            position: {
                left: 0,
                top: 300 - 50,
                width: 30,
                height: 30
            },
            clickable: true
        }]
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    }
})