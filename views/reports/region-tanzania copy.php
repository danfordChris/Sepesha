<?php

use yii\helpers\Url;

$this->registerJsFile('https://maps.googleapis.com/maps/api/js?key=AIzaSyDF7ysh5DREBcVS0ZyUPMxr8_arThteUB0&callback=initMap', [
    'position' => \yii\web\View::POS_HEAD,
    'defer' => 'defer',
]);

?>
<?php $urlToGeoJson = Url::to('@web/js/tanzania.json', true); ?>

<div id="map" style="width:100%; height:500px;"></div>

<?php
$script = <<< JS
    function initMap() {
        var tanzaniaBounds = {
            north: -0.99,
            south: -11.76,
            west: 29.34,
            east: 40.44
        };
        var tanzaniaCenter = { lat: -6.369028, lng: 34.888822 };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: tanzaniaCenter,
            restriction: {
                latLngBounds: tanzaniaBounds,
                strictBounds: false,
            },
            styles: [
                { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
                { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
                { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ visibility: "on" }, { weight: 1 }] },
                { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ visibility: "on" }, { weight: 0.5 }] },
                { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#c9e6f5" }] },
                { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#f2efe9" }] }
            ]
        });

        // Load Tanzania's GeoJSON boundary data
        // map.data.loadGeoJson('/rcaappdev/js/tanzania.json'); 
        map.data.loadGeoJson('{$urlToGeoJson}');

        // Style the GeoJSON regions
        map.data.setStyle({
            fillColor: '#FF5733',
            fillOpacity: 0.5,
            strokeColor: '#FF5733',
            strokeWeight: 1
        });

        // Add event listener to display information on click
        map.data.addListener('click', function(event) {
            var regionName = event.feature.getProperty('NAME_1');
            var infoWindow = new google.maps.InfoWindow({
                content: '<strong>Region: ' + regionName + '</strong>',
                position: event.latLng
            });
            infoWindow.open(map);
        });
    }

    // Initialize the map when the page is loaded
    $(document).ready(function() {
        initMap();
    });
JS;
$this->registerJs($script);
?>