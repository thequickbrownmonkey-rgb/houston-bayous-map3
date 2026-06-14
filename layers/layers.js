ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-96.958185, 27.703555, -93.425334, 31.869155]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WildernessPassportMapTrinityBottomlands_1 = new ol.format.GeoJSON();
var features_WildernessPassportMapTrinityBottomlands_1 = format_WildernessPassportMapTrinityBottomlands_1.readFeatures(json_WildernessPassportMapTrinityBottomlands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapTrinityBottomlands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapTrinityBottomlands_1.addFeatures(features_WildernessPassportMapTrinityBottomlands_1);
var lyr_WildernessPassportMapTrinityBottomlands_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapTrinityBottomlands_1, 
                style: style_WildernessPassportMapTrinityBottomlands_1,
                popuplayertitle: 'Wilderness Passport Map — Trinity Bottomlands',
                interactive: true,
                title: 'Wilderness Passport Map — Trinity Bottomlands'
            });
var format_WildernessPassportMapPrairieSystems_2 = new ol.format.GeoJSON();
var features_WildernessPassportMapPrairieSystems_2 = format_WildernessPassportMapPrairieSystems_2.readFeatures(json_WildernessPassportMapPrairieSystems_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapPrairieSystems_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapPrairieSystems_2.addFeatures(features_WildernessPassportMapPrairieSystems_2);
var lyr_WildernessPassportMapPrairieSystems_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapPrairieSystems_2, 
                style: style_WildernessPassportMapPrairieSystems_2,
                popuplayertitle: 'Wilderness Passport Map — Prairie Systems',
                interactive: true,
                title: 'Wilderness Passport Map — Prairie Systems'
            });
var format_WildernessPassportMapPostOakSavannah_3 = new ol.format.GeoJSON();
var features_WildernessPassportMapPostOakSavannah_3 = format_WildernessPassportMapPostOakSavannah_3.readFeatures(json_WildernessPassportMapPostOakSavannah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapPostOakSavannah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapPostOakSavannah_3.addFeatures(features_WildernessPassportMapPostOakSavannah_3);
var lyr_WildernessPassportMapPostOakSavannah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapPostOakSavannah_3, 
                style: style_WildernessPassportMapPostOakSavannah_3,
                popuplayertitle: 'Wilderness Passport Map — Post Oak Savannah',
                interactive: true,
                title: 'Wilderness Passport Map — Post Oak Savannah'
            });
var format_WildernessPassportMapPineyWoods_4 = new ol.format.GeoJSON();
var features_WildernessPassportMapPineyWoods_4 = format_WildernessPassportMapPineyWoods_4.readFeatures(json_WildernessPassportMapPineyWoods_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapPineyWoods_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapPineyWoods_4.addFeatures(features_WildernessPassportMapPineyWoods_4);
var lyr_WildernessPassportMapPineyWoods_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapPineyWoods_4, 
                style: style_WildernessPassportMapPineyWoods_4,
                popuplayertitle: 'Wilderness Passport Map — Piney Woods',
                interactive: true,
                title: 'Wilderness Passport Map — Piney Woods'
            });
var format_WildernessPassportMapEstuariesandBays_5 = new ol.format.GeoJSON();
var features_WildernessPassportMapEstuariesandBays_5 = format_WildernessPassportMapEstuariesandBays_5.readFeatures(json_WildernessPassportMapEstuariesandBays_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapEstuariesandBays_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapEstuariesandBays_5.addFeatures(features_WildernessPassportMapEstuariesandBays_5);
var lyr_WildernessPassportMapEstuariesandBays_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapEstuariesandBays_5, 
                style: style_WildernessPassportMapEstuariesandBays_5,
                popuplayertitle: 'Wilderness Passport Map — Estuaries and Bays',
                interactive: true,
                title: 'Wilderness Passport Map — Estuaries and Bays'
            });
var format_WildernessPassportMapColumbiaBottomlands_6 = new ol.format.GeoJSON();
var features_WildernessPassportMapColumbiaBottomlands_6 = format_WildernessPassportMapColumbiaBottomlands_6.readFeatures(json_WildernessPassportMapColumbiaBottomlands_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapColumbiaBottomlands_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapColumbiaBottomlands_6.addFeatures(features_WildernessPassportMapColumbiaBottomlands_6);
var lyr_WildernessPassportMapColumbiaBottomlands_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapColumbiaBottomlands_6, 
                style: style_WildernessPassportMapColumbiaBottomlands_6,
                popuplayertitle: 'Wilderness Passport Map — Columbia Bottomlands',
                interactive: true,
                title: 'Wilderness Passport Map — Columbia Bottomlands'
            });
var format_WildernessPassportMapCoastalMarshes_7 = new ol.format.GeoJSON();
var features_WildernessPassportMapCoastalMarshes_7 = format_WildernessPassportMapCoastalMarshes_7.readFeatures(json_WildernessPassportMapCoastalMarshes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapCoastalMarshes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapCoastalMarshes_7.addFeatures(features_WildernessPassportMapCoastalMarshes_7);
var lyr_WildernessPassportMapCoastalMarshes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapCoastalMarshes_7, 
                style: style_WildernessPassportMapCoastalMarshes_7,
                popuplayertitle: 'Wilderness Passport Map — Coastal Marshes',
                interactive: true,
                title: 'Wilderness Passport Map — Coastal Marshes'
            });
var format_WildernessPassportMapBigThicket_8 = new ol.format.GeoJSON();
var features_WildernessPassportMapBigThicket_8 = format_WildernessPassportMapBigThicket_8.readFeatures(json_WildernessPassportMapBigThicket_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapBigThicket_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapBigThicket_8.addFeatures(features_WildernessPassportMapBigThicket_8);
var lyr_WildernessPassportMapBigThicket_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapBigThicket_8, 
                style: style_WildernessPassportMapBigThicket_8,
                popuplayertitle: 'Wilderness Passport Map — Big Thicket',
                interactive: true,
                title: 'Wilderness Passport Map — Big Thicket'
            });
var format_WildernessPassportMapBayouWilderness_9 = new ol.format.GeoJSON();
var features_WildernessPassportMapBayouWilderness_9 = format_WildernessPassportMapBayouWilderness_9.readFeatures(json_WildernessPassportMapBayouWilderness_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildernessPassportMapBayouWilderness_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildernessPassportMapBayouWilderness_9.addFeatures(features_WildernessPassportMapBayouWilderness_9);
var lyr_WildernessPassportMapBayouWilderness_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildernessPassportMapBayouWilderness_9, 
                style: style_WildernessPassportMapBayouWilderness_9,
                popuplayertitle: 'Wilderness Passport Map — Bayou Wilderness',
                interactive: true,
                title: 'Wilderness Passport Map — Bayou Wilderness'
            });
var format_Watersheds_10 = new ol.format.GeoJSON();
var features_Watersheds_10 = format_Watersheds_10.readFeatures(json_Watersheds_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Watersheds_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watersheds_10.addFeatures(features_Watersheds_10);
var lyr_Watersheds_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watersheds_10, 
                style: style_Watersheds_10,
                popuplayertitle: 'Watersheds',
                interactive: true,
                title: '<img src="styles/legend/Watersheds_10.png" /> Watersheds'
            });
var format_Waterways_11 = new ol.format.GeoJSON();
var features_Waterways_11 = format_Waterways_11.readFeatures(json_Waterways_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waterways_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_11.addFeatures(features_Waterways_11);
var lyr_Waterways_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_11, 
                style: style_Waterways_11,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_11.png" /> Waterways'
            });
var format_GREENWAYS_12 = new ol.format.GeoJSON();
var features_GREENWAYS_12 = format_GREENWAYS_12.readFeatures(json_GREENWAYS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GREENWAYS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GREENWAYS_12.addFeatures(features_GREENWAYS_12);
var lyr_GREENWAYS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GREENWAYS_12, 
                style: style_GREENWAYS_12,
                popuplayertitle: 'GREENWAYS',
                interactive: true,
                title: '<img src="styles/legend/GREENWAYS_12.png" /> GREENWAYS'
            });
var format_BikeRoutes_13 = new ol.format.GeoJSON();
var features_BikeRoutes_13 = format_BikeRoutes_13.readFeatures(json_BikeRoutes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BikeRoutes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeRoutes_13.addFeatures(features_BikeRoutes_13);
var lyr_BikeRoutes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeRoutes_13, 
                style: style_BikeRoutes_13,
                popuplayertitle: 'Bike Routes',
                interactive: true,
                title: '<img src="styles/legend/BikeRoutes_13.png" /> Bike Routes'
            });
var format_TECQSQWMStations_14 = new ol.format.GeoJSON();
var features_TECQSQWMStations_14 = format_TECQSQWMStations_14.readFeatures(json_TECQSQWMStations_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TECQSQWMStations_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TECQSQWMStations_14.addFeatures(features_TECQSQWMStations_14);
var lyr_TECQSQWMStations_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TECQSQWMStations_14, 
                style: style_TECQSQWMStations_14,
                popuplayertitle: 'TECQ SQWM Stations',
                interactive: true,
    title: 'TECQ SQWM Stations<br />\
    <img src="styles/legend/TECQSQWMStations_14_0.png" /> UNKNOWN<br />\
    <img src="styles/legend/TECQSQWMStations_14_1.png" /> CANAL<br />\
    <img src="styles/legend/TECQSQWMStations_14_2.png" /> ESTURY<br />\
    <img src="styles/legend/TECQSQWMStations_14_3.png" /> FWTLND<br />\
    <img src="styles/legend/TECQSQWMStations_14_4.png" /> LAKE<br />\
    <img src="styles/legend/TECQSQWMStations_14_5.png" /> OCEAN<br />\
    <img src="styles/legend/TECQSQWMStations_14_6.png" /> PIPE<br />\
    <img src="styles/legend/TECQSQWMStations_14_7.png" /> POND<br />\
    <img src="styles/legend/TECQSQWMStations_14_8.png" /> RESERV<br />\
    <img src="styles/legend/TECQSQWMStations_14_9.png" /> SPRING<br />\
    <img src="styles/legend/TECQSQWMStations_14_10.png" /> STREAM<br />\
    <img src="styles/legend/TECQSQWMStations_14_11.png" /> SWTLND<br />\
    <img src="styles/legend/TECQSQWMStations_14_12.png" /> TDLSTR<br />\
    <img src="styles/legend/TECQSQWMStations_14_13.png" /> WELL<br />' });
var format_CommunityCenters_15 = new ol.format.GeoJSON();
var features_CommunityCenters_15 = format_CommunityCenters_15.readFeatures(json_CommunityCenters_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CommunityCenters_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityCenters_15.addFeatures(features_CommunityCenters_15);
var lyr_CommunityCenters_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityCenters_15, 
                style: style_CommunityCenters_15,
                popuplayertitle: 'Community Centers',
                interactive: true,
                title: '<img src="styles/legend/CommunityCenters_15.png" /> Community Centers'
            });
var format_MF5_16 = new ol.format.GeoJSON();
var features_MF5_16 = format_MF5_16.readFeatures(json_MF5_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MF5_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MF5_16.addFeatures(features_MF5_16);
var lyr_MF5_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MF5_16, 
                style: style_MF5_16,
                popuplayertitle: 'MF5',
                interactive: true,
                title: '<img src="styles/legend/MF5_16.png" /> MF5'
            });
var group_Ecoregions = new ol.layer.Group({
                                layers: [lyr_WildernessPassportMapTrinityBottomlands_1,lyr_WildernessPassportMapPrairieSystems_2,lyr_WildernessPassportMapPostOakSavannah_3,lyr_WildernessPassportMapPineyWoods_4,lyr_WildernessPassportMapEstuariesandBays_5,lyr_WildernessPassportMapColumbiaBottomlands_6,lyr_WildernessPassportMapCoastalMarshes_7,lyr_WildernessPassportMapBigThicket_8,lyr_WildernessPassportMapBayouWilderness_9,],
                                fold: 'close',
                                title: 'Ecoregions'});

lyr_BaseMap_0.setVisible(true);lyr_WildernessPassportMapTrinityBottomlands_1.setVisible(true);lyr_WildernessPassportMapPrairieSystems_2.setVisible(true);lyr_WildernessPassportMapPostOakSavannah_3.setVisible(true);lyr_WildernessPassportMapPineyWoods_4.setVisible(true);lyr_WildernessPassportMapEstuariesandBays_5.setVisible(true);lyr_WildernessPassportMapColumbiaBottomlands_6.setVisible(true);lyr_WildernessPassportMapCoastalMarshes_7.setVisible(true);lyr_WildernessPassportMapBigThicket_8.setVisible(true);lyr_WildernessPassportMapBayouWilderness_9.setVisible(true);lyr_Watersheds_10.setVisible(true);lyr_Waterways_11.setVisible(true);lyr_GREENWAYS_12.setVisible(true);lyr_BikeRoutes_13.setVisible(true);lyr_TECQSQWMStations_14.setVisible(true);lyr_CommunityCenters_15.setVisible(true);lyr_MF5_16.setVisible(true);
var layersList = [lyr_BaseMap_0,group_Ecoregions,lyr_Watersheds_10,lyr_Waterways_11,lyr_GREENWAYS_12,lyr_BikeRoutes_13,lyr_TECQSQWMStations_14,lyr_CommunityCenters_15,lyr_MF5_16];
lyr_WildernessPassportMapTrinityBottomlands_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapPrairieSystems_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapPostOakSavannah_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapPineyWoods_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapEstuariesandBays_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapColumbiaBottomlands_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapCoastalMarshes_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapBigThicket_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WildernessPassportMapBayouWilderness_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Watersheds_10.set('fieldAliases', {'WTSHNAME': 'WTSHNAME', 'STLength': 'STLength', 'STArea': 'STArea', 'WTSHUNIT': 'WTSHUNIT', 'Shape_STLe': 'Shape_STLe', 'Shape_STAr': 'Shape_STAr', });
lyr_Waterways_11.set('fieldAliases', {'Length': 'Length', 'Type': 'Type', 'Name': 'Name', });
lyr_GREENWAYS_12.set('fieldAliases', {'Bayou': 'Bayou', 'Name': 'Name', 'OBJECTID': 'OBJECTID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'HPB_Project': 'HPB_Project', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_BikeRoutes_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Unique_ID': 'Unique_ID', 'Full_Name': 'Full_Name', 'Length_Miles': 'Length_Miles', 'Council_District': 'Council_District', 'KeyConnect': 'KeyConnect', 'Maintenance': 'Maintenance', 'HoustonBikePlan_FundSource': 'HoustonBikePlan_FundSource', 'URL': 'URL', 'HC_Status': 'HC_Status', 'HC_Class': 'HC_Class', 'LC_Status': 'LC_Status', 'LC_Class': 'LC_Class', 'Description': 'Description', 'Implementer': 'Implementer', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'Proposed_Date': 'Proposed_Date', 'Programmed_Date': 'Programmed_Date', 'Existing_Date': 'Existing_Date', });
lyr_TECQSQWMStations_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Station_ID': 'Station_ID', 'Short_Desc': 'Short_Desc', 'Long_Desc': 'Long_Desc', 'Basin_ID': 'Basin_ID', 'Segment_ID': 'Segment_ID', 'StreamType': 'StreamType', 'StreamCond': 'StreamCond', 'OnSegFlag': 'OnSegFlag', 'County_ID': 'County_ID', 'County': 'County', 'TCEQRegion': 'TCEQRegion', 'USGS_GID': 'USGS_GID', 'USGS_NHDID': 'USGS_NHDID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'URL': 'URL', 'Collecting': 'Collecting', 'FY': 'FY', 'Active_Ind': 'Active_Ind', });
lyr_CommunityCenters_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PICNO': 'PICNO', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'ZIPCODE': 'ZIPCODE', 'BLDSQFT': 'BLDSQFT', 'PHONE': 'PHONE', 'ORIG_FID': 'ORIG_FID', 'FAX': 'FAX', 'SUPERVISOR': 'SUPERVISOR', 'BUILT': 'BUILT', 'FORMER_NAME': 'FORMER_NAME', 'Site_No': 'Site_No', 'FEATURE_ID': 'FEATURE_ID', });
lyr_MF5_16.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'Year': 'Year', 'Description': 'Description', 'url': 'url', });
lyr_WildernessPassportMapTrinityBottomlands_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapPrairieSystems_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapPostOakSavannah_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapPineyWoods_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapEstuariesandBays_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapColumbiaBottomlands_6.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapCoastalMarshes_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapBigThicket_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WildernessPassportMapBayouWilderness_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Watersheds_10.set('fieldImages', {'WTSHNAME': 'TextEdit', 'STLength': 'TextEdit', 'STArea': 'TextEdit', 'WTSHUNIT': 'TextEdit', 'Shape_STLe': 'TextEdit', 'Shape_STAr': 'TextEdit', });
lyr_Waterways_11.set('fieldImages', {'Length': 'TextEdit', 'Type': 'Range', 'Name': 'TextEdit', });
lyr_GREENWAYS_12.set('fieldImages', {'Bayou': 'TextEdit', 'Name': 'TextEdit', 'OBJECTID': 'Range', 'created_user': 'TextEdit', 'created_date': 'DateTime', 'last_edited_user': 'TextEdit', 'last_edited_date': 'DateTime', 'HPB_Project': 'TextEdit', 'CreationDate': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_BikeRoutes_13.set('fieldImages', {'OBJECTID': '', 'Unique_ID': '', 'Full_Name': '', 'Length_Miles': '', 'Council_District': '', 'KeyConnect': '', 'Maintenance': '', 'HoustonBikePlan_FundSource': '', 'URL': '', 'HC_Status': '', 'HC_Class': '', 'LC_Status': '', 'LC_Class': '', 'Description': '', 'Implementer': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'Proposed_Date': '', 'Programmed_Date': '', 'Existing_Date': '', });
lyr_TECQSQWMStations_14.set('fieldImages', {'OBJECTID': '', 'Station_ID': '', 'Short_Desc': '', 'Long_Desc': '', 'Basin_ID': '', 'Segment_ID': '', 'StreamType': '', 'StreamCond': '', 'OnSegFlag': '', 'County_ID': '', 'County': '', 'TCEQRegion': '', 'USGS_GID': '', 'USGS_NHDID': '', 'Latitude': '', 'Longitude': '', 'URL': '', 'Collecting': '', 'FY': '', 'Active_Ind': '', });
lyr_CommunityCenters_15.set('fieldImages', {'OBJECTID': 'Range', 'PICNO': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'ZIPCODE': 'TextEdit', 'BLDSQFT': 'TextEdit', 'PHONE': 'TextEdit', 'ORIG_FID': 'Range', 'FAX': 'TextEdit', 'SUPERVISOR': 'TextEdit', 'BUILT': 'TextEdit', 'FORMER_NAME': 'TextEdit', 'Site_No': 'Range', 'FEATURE_ID': 'TextEdit', });
lyr_MF5_16.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'Description': 'TextEdit', 'url': 'TextEdit', });
lyr_WildernessPassportMapTrinityBottomlands_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapPrairieSystems_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapPostOakSavannah_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapPineyWoods_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapEstuariesandBays_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapColumbiaBottomlands_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapCoastalMarshes_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapBigThicket_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WildernessPassportMapBayouWilderness_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Watersheds_10.set('fieldLabels', {'WTSHNAME': 'header label - always visible', 'STLength': 'no label', 'STArea': 'no label', 'WTSHUNIT': 'no label', 'Shape_STLe': 'no label', 'Shape_STAr': 'no label', });
lyr_Waterways_11.set('fieldLabels', {'Length': 'no label', 'Type': 'no label', 'Name': 'header label - always visible', });
lyr_GREENWAYS_12.set('fieldLabels', {'Bayou': 'no label', 'Name': 'no label', 'OBJECTID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'HPB_Project': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_BikeRoutes_13.set('fieldLabels', {'OBJECTID': 'no label', 'Unique_ID': 'no label', 'Full_Name': 'no label', 'Length_Miles': 'no label', 'Council_District': 'no label', 'KeyConnect': 'no label', 'Maintenance': 'no label', 'HoustonBikePlan_FundSource': 'no label', 'URL': 'no label', 'HC_Status': 'no label', 'HC_Class': 'no label', 'LC_Status': 'no label', 'LC_Class': 'no label', 'Description': 'no label', 'Implementer': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'Proposed_Date': 'no label', 'Programmed_Date': 'no label', 'Existing_Date': 'no label', });
lyr_TECQSQWMStations_14.set('fieldLabels', {'OBJECTID': 'no label', 'Station_ID': 'no label', 'Short_Desc': 'no label', 'Long_Desc': 'no label', 'Basin_ID': 'no label', 'Segment_ID': 'no label', 'StreamType': 'no label', 'StreamCond': 'no label', 'OnSegFlag': 'no label', 'County_ID': 'no label', 'County': 'no label', 'TCEQRegion': 'no label', 'USGS_GID': 'no label', 'USGS_NHDID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'URL': 'no label', 'Collecting': 'no label', 'FY': 'no label', 'Active_Ind': 'no label', });
lyr_CommunityCenters_15.set('fieldLabels', {'OBJECTID': 'no label', 'PICNO': 'no label', 'NAME': 'header label - always visible', 'ADDRESS': 'no label', 'ZIPCODE': 'no label', 'BLDSQFT': 'no label', 'PHONE': 'no label', 'ORIG_FID': 'no label', 'FAX': 'no label', 'SUPERVISOR': 'no label', 'BUILT': 'no label', 'FORMER_NAME': 'no label', 'Site_No': 'no label', 'FEATURE_ID': 'no label', });
lyr_MF5_16.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Name': 'no label', 'Year': 'no label', 'Description': 'no label', 'url': 'no label', });
lyr_MF5_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});