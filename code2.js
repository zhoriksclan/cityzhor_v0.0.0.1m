gdjs._1084_1077_1085_1102Code = {};
gdjs._1084_1077_1085_1102Code.localVariables = [];
gdjs._1084_1077_1085_1102Code.GDNewTextObjects1= [];
gdjs._1084_1077_1085_1102Code.GDNewTextObjects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText2Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText2Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1= [];
gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText3Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText3Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects2= [];


gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_9546_95951084_95951077_95951085_95951102Code_9546GDNewPanelSpriteObjects1Objects = Hashtable.newFrom({"NewPanelSprite": gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1});
gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_9546_95951084_95951077_95951085_95951102Code_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs._1084_1077_1085_1102Code.GDNewText3Objects1});
gdjs._1084_1077_1085_1102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_9546_95951084_95951077_95951085_95951102Code_9546GDNewPanelSpriteObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._1084_1077_1085_1102Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_9546_95951084_95951077_95951085_95951102Code_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._1084_1077_1085_1102Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._1084_1077_1085_1102Code.GDNewText2Objects1);
/* Reuse gdjs._1084_1077_1085_1102Code.GDNewText3Objects1 */
{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1[i].setPosition(gdjs.random(500),gdjs.random(500));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewTextObjects1[i].setPosition(gdjs.random(500),gdjs.random(500));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewText2Objects1[i].setPosition(gdjs.random(500),gdjs.random(500));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewText3Objects1[i].setPosition(gdjs.random(500),gdjs.random(500));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1[i].setPosition(gdjs.random(500),gdjs.random(500));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewTextObjects1[i].setAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewText2Objects1[i].setAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewText3Objects1[i].setAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1[i].setAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1[i].setAngle(gdjs.random(360));
}
}}

}


};

gdjs._1084_1077_1085_1102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1084_1077_1085_1102Code.GDNewTextObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTextObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText2Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText2Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText3Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText3Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects2.length = 0;

gdjs._1084_1077_1085_1102Code.eventsList0(runtimeScene);
gdjs._1084_1077_1085_1102Code.GDNewTextObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTextObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText2Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText2Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewPanelSpriteObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText3Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText3Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['_1084_1077_1085_1102Code'] = gdjs._1084_1077_1085_1102Code;
