<?php

use yii\helpers\Url;

$this->registerJsFile('https://maps.googleapis.com/maps/api/js?key=AIzaSyDF7ysh5DREBcVS0ZyUPMxr8_arThteUB0&callback=initMap', [
    'position' => \yii\web\View::POS_HEAD,
    'defer' => 'defer',
]);
?>

<div id="map" style="width:100%; height:500px;"></div>

<?php
$script = <<< JS
    function initMap() {
        var tanzaniaCenter = { lat: -6.369028, lng: 34.888822 };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: tanzaniaCenter,
            styles: [
                { featureType: "all", elementType: "geometry", stylers: [{ visibility: "off" }] }
            ]
        });

        // Outer polygon coordinates to cover the whole world
        var outerCoords = [
            { lat: -85, lng: -180 },
            { lat: 85, lng: -180 },
            { lat: 85, lng: 180 },
            { lat: -85, lng: 180 },
            { lat: -85, lng: -180 }
        ];

        // Load Tanzania GeoJSON data
        map.data.loadGeoJson('/rcaappdev/js/tanzania.json', null, function(features) {
            features.forEach(function(feature) {
                feature.getGeometry().forEachLatLng(function(latlng) {
                    outerCoords.push({ lat: latlng.lat(), lng: latlng.lng() });
                });
            });

            // Draw outer polygon with Tanzania as a clear cutout
            new google.maps.Polygon({
                paths: [outerCoords],
                map: map,
                fillColor: 'rgba(0, 0, 0, 0.0)',  // Dark overlay for the world
                fillOpacity: 0.5,
                strokeColor: '#FF5733',  // Optional stroke for boundary visibility
                strokeWeight: 1,
            });
        });
    }

    $(document).ready(function() {
        initMap();
    });
JS;
$this->registerJs($script);
?>