var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Деревня Волково Бологовского района Тверской области',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> Деревня Волково Бологовского района Тверской области'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Границы поселения копия',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> Границы поселения копия'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Деревня Волково Бологовского района Тверской области',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Деревня Волково Бологовского района Тверской области'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Деревня Волково Бологовского района Тверской области',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Деревня Волково Бологовского района Тверской области'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Гидрография',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Гидрография'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Улицы малые',
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Улицы малые'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Дорожная сеть',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Дорожная сеть'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Дома',
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> Дома'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: 'Границы поселения',
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> Границы поселения'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8];
lyr__0.set('fieldAliases', {'id': 'id', 'Развитие инфраструктуры': 'Развитие инфраструктуры', });
lyr__1.set('fieldAliases', {'id': 'id', });
lyr__2.set('fieldAliases', {'id': 'id', 'Функциональная зона': 'Функциональная зона', 'Развитие инфраструктуры': 'Развитие инфраструктуры', });
lyr__3.set('fieldAliases', {'id': 'id', 'Функциональная зона': 'Функциональная зона', });
lyr__4.set('fieldAliases', {'id': 'id', 'Функциональная зона': 'Функциональная зона', });
lyr__5.set('fieldAliases', {'id': 'id', 'Улица': 'Улица', 'Поряд': 'Поряд', });
lyr__6.set('fieldAliases', {'id': 'id', 'Улица': 'Улица', });
lyr__7.set('fieldAliases', {'id': 'id', });
lyr__8.set('fieldAliases', {'id': 'id', });
lyr__0.set('fieldImages', {'id': '', 'Развитие инфраструктуры': '', });
lyr__1.set('fieldImages', {'id': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'Функциональная зона': '', 'Развитие инфраструктуры': '', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'Функциональная зона': '', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'Функциональная зона': '', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'Улица': 'TextEdit', 'Поряд': 'Range', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'Улица': 'TextEdit', });
lyr__7.set('fieldImages', {'id': 'TextEdit', });
lyr__8.set('fieldImages', {'id': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'no label', 'Развитие инфраструктуры': 'inline label - visible with data', });
lyr__1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'id': 'no label', 'Функциональная зона': 'inline label - visible with data', 'Развитие инфраструктуры': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'id': 'no label', 'Функциональная зона': 'inline label - visible with data', });
lyr__4.set('fieldLabels', {'id': 'no label', 'Функциональная зона': 'inline label - visible with data', });
lyr__5.set('fieldLabels', {'id': 'inline label - always visible', 'Улица': 'inline label - always visible', 'Поряд': 'inline label - always visible', });
lyr__6.set('fieldLabels', {'id': 'no label', 'Улица': 'inline label - visible with data', });
lyr__7.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__8.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});