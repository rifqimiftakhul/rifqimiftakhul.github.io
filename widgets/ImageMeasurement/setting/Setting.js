// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/toolbars/ImageServiceMeasureTool":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has ../kernel ./_toolbar ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./draw ../tasks/ImageServiceMeasureParameters ../tasks/ImageServiceMeasureTask ../geometry/Point dojo/_base/array ../units".split(" "),function(c,e,f,h,m,k,n,p,d,g,b,t,r,q,l){var u=c("CustomDraw",[g],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=
!1},showTooltip:function(){this._options.showTooltips=!0}});k=c(k,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],
"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},
OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:"INCHES FEET YARDS MILES NAUTICAL_MILES MILLIMETERS CENTIMETERS DECIMETERS METERS KILOMETERS".split(" "),angularUnits:["RADIANS","DECIMAL_DEGREES"],areaUnits:"SQUARE_INCHES SQUARE_FEET SQUARE_YARDS ACRES SQUARE_MILES SQUARE_MILLIMETERS SQUARE_CENTIMETERS SQUARE_DECIMETERS SQUARE_METERS ARES HECTARES SQUARE_KILOMETERS".split(" ")},
markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(a){c.safeMixin(this,a);this._checkMensurationSupport();this._setDefaultSymbols()},_checkMensurationSupport:function(){this.layer.mensurationCapabilities?this._setSupportedMeasureOperations():console.log("Mensuration Capabilities not supported.")},
_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new n,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new f("#00FFFF")));this.lineSymbol||(this.lineSymbol=new p(p.STYLE_SOLID,new f([255,0,0]),1.5));this.fillSymbol||
(this.fillSymbol=new d(d.STYLE_SOLID,new p(p.STYLE_DASHDOT,new f([255,0,0]),2),new f([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var a;this._supportedMeasureOperations=[];this.mensurationCapabilities=this.layer.mensurationCapabilities.split(",");q.forEach(this.mensurationCapabilities,function(b){a=this._mensurationCapabilitiesMap[b];q.forEach(a,function(a){this._supportedMeasureOperations.push(a)},this)},this)},getSupportedMeasureOperations:function(){var a=[];q.forEach(this._supportedMeasureOperations,
function(v){a.push(b[v])},this);return a},getSupportedUnits:function(){var a={},b=[],d=[],g;for(g in this._supportedUnits)this._supportedUnits.hasOwnProperty(g)&&(b=this._supportedUnits[g],d=[],q.forEach(b,function(a){a===this._decimalDegreesConstantKeyword?d.push(this._decimalDegreesConstantValue):d.push(l[a])},this),a[g]=d);return a},setLinearUnit:function(a){for(var b in l)l.hasOwnProperty(b)&&l[b]===a&&(this.linearUnit=b);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},
setAngularUnit:function(a){for(var b in l)l.hasOwnProperty(b)&&(l[b]===a?this.angularUnit=b:a===this._decimalDegreesConstantValue&&(this.angularUnit=this._decimalDegreesConstantKeyword));this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(a){for(var b in l)l.hasOwnProperty(b)&&l[b]===a&&(this.areaUnit=b);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setMarkerSymbol:function(a){this.markerSymbol=a},setLineSymbol:function(a){this.lineSymbol=
a},setFillSymbol:function(a){this.fillSymbol=a},activate:function(a){q.forEach(this._supportedMeasureOperations,function(d){b[d]===a&&(this._currentOperation=d)},this);this.map.setMapCursor("crosshair");this._mapClickHandle=this.map.on("click",e.hitch(this,this._onMapClick));this._mapMouseDownHandle=this.map.on("mouse-down",e.hitch(this,this._onMapMouseDown));this._drawToolbar||(this._drawToolbar=new u(this.map,{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),
this._drawToolbar.on("draw-end",e.hitch(this,this._setGeometry)));this._drawToolbar.activate(g[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},_onMapMouseDown:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},deactivate:function(){this._drawToolbar&&this._drawToolbar.deactivate();this.map.setMapCursor("default");this._currentOperation=this._currentGeometry=
null;this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null);this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.hideTooltip();this._drawToolbar.activate(g[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.showTooltip();this._drawToolbar.activate(g[this._operationsMap[this._currentOperation].geometryType])},
_setGeometry:function(a){a=a.geometry;this.onDrawEnd(a);this._getMensurationResults(a);this._currentGeometry=a},_getImageServiceMeasureParameters:function(a){var d=new b;d.operation=b[this._currentOperation];d.mosaicRule=this.layer.mosaicRule;d.linearUnit=l[this.linearUnit];d.angularUnit=this.angularUnit===this._decimalDegreesConstantKeyword?this._decimalDegreesConstantValue:l[this.angularUnit];d.areaUnit=l[this.areaUnit];"line"===a.type||"polyline"===a.type?(d.fromGeometry=new r(a.paths[0][0][0],
a.paths[0][0][1],this.map.spatialReference),d.toGeometry=new r(a.paths[0][1][0],a.paths[0][1][1],this.map.spatialReference)):d.fromGeometry=a;return d},_getMensurationResults:function(a){a=this._getImageServiceMeasureParameters(a);(new t(this.layer.url)).execute(a,e.hitch(this,this._measureTaskSuccess),e.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(a){this.onMeasureEnd(a,null,this._currentGeometry)},_measureTaskError:function(a){this.onMeasureEnd(null,a,this._currentGeometry)},
_getUnitChangeResults:function(a){a=this._getImageServiceMeasureParameters(a);(new t(this.layer.url)).execute(a,e.hitch(this,this._unitChangeSuccess),e.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(a){this.onUnitChange(a,null,this._currentGeometry)},_unitChangeError:function(a){this.onUnitChange(null,a,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});h("extend-esri")&&e.setObject("toolbars.imageServiceMeasure",
k,m);return k})},"esri/tasks/ImageServiceMeasureParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(c,e,f,h,m,k){c=c(null,{declaredClass:"esri.tasks.ImageServiceMeasureParameters",fromGeometry:null,toGeometry:null,operation:null,pixelSize:null,mosaicRule:!1,linearUnit:null,angularUnit:null,areaUnit:null,toJson:function(c){var e=c&&c.fromGeometry||this.fromGeometry;c={fromGeometry:e,toGeometry:c&&c.toGeometry||
this.toGeometry,measureOperation:this.operation,mosaicRule:this.mosaicRule?f.toJson(this.mosaicRule.toJson()):null,linearUnit:this.linearUnit,angularUnit:this.angularUnit,areaUnit:this.areaUnit};e&&(c.geometryType=k.getJsonType(e));this.pixelSize&&(c.pixelSize=this.pixelSize?f.toJson(this.pixelSize.toJson()):null);return c}});e.mixin(c,{OPERATION_POINT:"esriMensurationPoint",OPERATION_DISTANCE_ANGLE:"esriMensurationDistanceAndAngle",OPERATION_AREA_PERIMETER:"esriMensurationAreaAndPerimeter",OPERATION_BASE_TOP:"esriMensurationHeightFromBaseAndTop",
OPERATION_BASE_TOP_SHADOW:"esriMensurationHeightFromBaseAndTopShadow",OPERATION_TOP_TOP_SHADOW:"esriMensurationHeightFromTopAndTopShadow",OPERATION_CENTROID:"esriMensurationCentroid",OPERATION_POINT_3D:"esriMensurationPoint3D",OPERATION_DISTANCE_ANGLE_3D:"esriMensurationDistanceAndAngle3D",OPERATION_AREA_PERIMETER_3D:"esriMensurationAreaAndPerimeter3D",OPERATION_CENTROID_3D:"esriMensurationCentroid3D"});h("extend-esri")&&e.setObject("tasks.ImageServiceMeasureParameters",c,m);return c})},"esri/tasks/ImageServiceMeasureTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task".split(" "),
function(c,e,f,h,m,k,n){c=c(n,{declaredClass:"esri.tasks.ImageServiceMeasureTask",constructor:function(c){this._url.path+="/measure";this._handler=e.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["fromGeometry","toGeometry"]}],e:2}],_handler:function(c,d,g,b,e){try{this._successHandler([c],"onComplete",g,e)}catch(r){this._errorHandler(r,b,e)}},execute:function(c,d,g,b){var f=b.assembly;c=this._encode(e.mixin({},this._url.query,{f:"json"},c.toJson(f&&f[0])));var h=this._handler,k=
this._errorHandler;return m({url:this._url.path,content:c,callbackParamName:"callback",load:function(c,e){h(c,e,d,g,b.dfd)},error:function(d){k(d,g,b.dfd)}})},onComplete:function(){}});k._createWrappers(c);f("extend-esri")&&e.setObject("tasks.ImageServiceMeasureTask",c,h);return c})},"widgets/ImageMeasurement/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ImageMeasurement/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.layerSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"mapLayerSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.displayOperationSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"displayOperationSelect" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" multiple\x3d"true"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.angularUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"angularUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.linearUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"linearUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.areaUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"areaUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\x3cinput data-dojo-attach-point\x3d"popupCheckbox" data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n          \x3clabel  style\x3d"margin: 0 15px;" \x3e${nls.displayMeasureResultInPopup}\x3c/label\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"errorSection"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ImageMeasurement/setting/css/style.css":".jimu-widget-ImageMeasurement-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-ImageMeasurement-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-ImageMeasurement-setting .dijitSelect{height: 30px; width: 96%;}.jimu-widget-ImageMeasurement-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-ImageMeasurement-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; padding-right:15px;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.settingsHidden {display: none;}.dojoxCheckedMultiSelect {margin-top: 4px; margin-bottom: 3px;}.dojoxCheckedMultiSelect .dojoxCheckedMultiSelectWrapper {height: 175px; margin: 0px; width: 250px;}",
"*now":function(c){c(['dojo/i18n!*preload*widgets/ImageMeasurement/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting dojo/_base/array esri/toolbars/ImageServiceMeasureTool dojo/dom-class dojo/html dojo/_base/lang dojo/on jimu/dijit/RadioBtn dijit/form/CheckBox dijit/form/Select dojox/form/CheckedMultiSelect".split(" "),function(c,e,f,h,m,k,n,p){return c([f,e],{baseClass:"jimu-widget-ImageMeasurement-setting",displayMeasureResultInPopup:"",_supportedUnits:null,_supportedOperationMap:{},_hasSupportedLayer:!1,startup:function(){this.inherited(arguments);
this.config.ImageMeasurement||(this.config.ImageMeasurement={});this._supportedOperationMap={};this._populateLayers();this._hasSupportedLayer&&(this._populateOperations(),this._populateUnitDropdowns());this.setConfig(this.config)},_populateLayers:function(){var d=this.map.itemInfo.itemData.operationalLayers,c=0,b,e;for(b in d)d.hasOwnProperty(b)&&d[b].layerObject&&d[b].layerObject.mensurationCapabilities&&(c++,this.mapLayerSelect.addOption({value:d[b].title,label:d[b].title}),e=null,e=new m({map:this.map,
layer:d[b].layerObject}),this._supportedOperationMap[d[b].title]=[],this._supportedOperationMap[d[b].title]=e.getSupportedMeasureOperations(),this._supportedUnits||(this._supportedUnits=e.getSupportedUnits()));this.mapLayerSelect.on("change",p.hitch(this,this._populateOperations));0===c?(k.add(this.searchesSection,"settingsHidden"),n.set(this.errorSection,this.nls.errorSectionMessage),this._hasSupportedLayer=!1):(k.remove(this.searchesSection,"settingsHidden"),n.set(this.errorSection,""),this._hasSupportedLayer=
!0)},_populateUnitDropdowns:function(){var d=this._supportedUnits.angularUnits,c=this._supportedUnits.areaUnits;h.forEach(this._supportedUnits.linearUnits,function(b){this.linearUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this);h.forEach(d,function(b){this.angularUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this);h.forEach(c,function(b){this.areaUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this)},_populateOperations:function(){this._clearOperations();
this._addOptions()},_clearOperations:function(){var d=this.displayOperationSelect.getOptions();h.forEach(d,function(d){this.displayOperationSelect.removeOption(d)},this)},_addOptions:function(){var d=this._supportedOperationMap[this.mapLayerSelect.get("value")],c=this.config.ImageMeasurement;h.forEach(d,function(b){this.displayOperationSelect.addOption({value:b,label:this.nls.operationLabel[b],selected:"selected"})},this);c.displayOperations&&0<c.displayOperations.length&&this.displayOperationSelect.set("value",
c.displayOperations)},setConfig:function(c){this.config=c;this.popupCheckbox.set("checked",this.config.ImageMeasurement.displayMeasureResultInPopup);this.config.ImageMeasurement.layerTitle&&this.mapLayerSelect.set("value",this.config.ImageMeasurement.layerTitle);this.config.ImageMeasurement.linearUnit&&this.linearUnitSelect.set("value",this.config.ImageMeasurement.linearUnit);this.config.ImageMeasurement.areaUnit&&this.areaUnitSelect.set("value",this.config.ImageMeasurement.areaUnit);this.config.ImageMeasurement.angularUnit&&
this.angularUnitSelect.set("value",this.config.ImageMeasurement.angularUnit);0<this.config.ImageMeasurement.displayOperations.length&&this.displayOperationSelect.set("value",this.config.ImageMeasurement.displayOperations)},getConfig:function(){this.config.ImageMeasurement.displayMeasureResultInPopup=this.popupCheckbox.checked;this.config.ImageMeasurement.layerTitle=this.mapLayerSelect.get("value");this.config.ImageMeasurement.linearUnit=this.linearUnitSelect.get("value");this.config.ImageMeasurement.areaUnit=
this.areaUnitSelect.get("value");this.config.ImageMeasurement.angularUnit=this.angularUnitSelect.get("value");this.config.ImageMeasurement.displayOperations=this.displayOperationSelect.get("value");return this.config}})});