var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Esri_1 = new ol.layer.Tile({
            'title': 'Esri',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Hoogte_IBIS_plantsoen_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hoogte_IBIS_plantsoen",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hoogte_IBIS_plantsoen_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [544273.756813, 6873245.040040, 544474.861543, 6873483.747430]
                            })
                        });
var lyr_Stroomrichting_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Stroomrichting",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Stroomrichting_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [544274.159917, 6873245.249259, 544474.520564, 6873483.569636]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Esri_1.setVisible(true);lyr_Hoogte_IBIS_plantsoen_2.setVisible(true);lyr_Stroomrichting_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Esri_1,lyr_Hoogte_IBIS_plantsoen_2,lyr_Stroomrichting_3];
