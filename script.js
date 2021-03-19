function initMap() {

    const utc2 = { lat: 10.845939143508279, lng: 106.79471085726165 };
    const myHome = { lat: 10.843694, lng: 106.795926 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: myHome,
    });

    //add marker
    const markerUtc2 = new google.maps.Marker({
        position: utc2,
        map: map,
        icon: {
            url: '/icon/logoutc2.png', scaledSize: { width: 35, height: 35 }
        },
        animation: google.maps.Animation.BOUNCE
    });

    const markerHome = new google.maps.Marker({
        position: myHome,
        map: map,
        icon: {
            url: '/icon/avatar.png', scaledSize: { width: 35, height: 35 }
        },
        animation: google.maps.Animation.BOUNCE
    });

    //end add marker

    //begin add infoWindow

    //end add infoWindow
    const strInfoUtc2 =
        '<div id = "content">' +
        '<div id="site-notice>' +
        '<h1>UTC2 Information</h1>' +
        "</div>" +
        '<div id="body-content">' +
        '<p><b>PHÂN HIỆU TRƯỜNG ĐH GTVT TẠI TP.HỒ CHÍ MINH</b></p>' +
        '<p>451 Lê Văn Việt</p>' +
        '<p>Tăng Nhơn Phú A</p>' +
        '<p>Thành phố Hồ Chí Minh </p>' +
        '<p>Việt Nam </p>' +
        "</div>" +
        "</ div>"
    const infoUTC2Window = new google.maps.InfoWindow({ content: strInfoUtc2, });
    markerUtc2.addListener("click", () => { infoUTC2Window.open(map, markerUtc2) });

    const strMyInfo =
        '<div id = "content">' +
        '<div id="site-notice>' +
        '<h1>My Information</h1>' +
        "</div>" +
        '<div id="body-content">' +
        '<p>Tên: <b>Nguyễn Công Hậu</b></p>' +
        '<p>MSSV: 5951071025</p>' +
        '<p>Email: ncconghau@gmail.com</p>' +
        '<p>Quê quán: Nhơn Phúc-An Nhơn Bình Định </p>' +
        "</div>" +
        "</ div>"
    const infoMyInfoWindow = new google.maps.InfoWindow({ content: strMyInfo, });
    markerHome.addListener("click", () => { infoMyInfoWindow.open(map, markerHome) });
    //end add infoWindow

    //begin add direction Service
    var directionService = new google.maps.DirectionsService();
    directionService.route(
        {
            origin: myHome,
            destination: utc2,
            travelMode: "WALKING",
        },
        (response, status) => {
            if (status == "OK") {
                var directionRenderer = new google.maps.DirectionsRenderer({
                    directions: response,
                    map: map,
                });
                console.log(response);
            }
        }
    );
    //end add direction Service
}