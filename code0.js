gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDObstacleObjects1_1final = [];

gdjs.Game_32SceneCode.GDPushableBoxObjects1_1final = [];

gdjs.Game_32SceneCode.GDfirstmobObjects1_1final = [];

gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDObstacleObjects1= [];
gdjs.Game_32SceneCode.GDObstacleObjects2= [];
gdjs.Game_32SceneCode.GDObstacleObjects3= [];
gdjs.Game_32SceneCode.GDObstacleObjects4= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects1= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects2= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects3= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects4= [];
gdjs.Game_32SceneCode.GDSkyboxObjects1= [];
gdjs.Game_32SceneCode.GDSkyboxObjects2= [];
gdjs.Game_32SceneCode.GDSkyboxObjects3= [];
gdjs.Game_32SceneCode.GDSkyboxObjects4= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects3= [];
gdjs.Game_32SceneCode.GDJoystickObjects4= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects4= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects1= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects2= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects3= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects4= [];
gdjs.Game_32SceneCode.GDNew3DBoxObjects1= [];
gdjs.Game_32SceneCode.GDNew3DBoxObjects2= [];
gdjs.Game_32SceneCode.GDNew3DBoxObjects3= [];
gdjs.Game_32SceneCode.GDNew3DBoxObjects4= [];
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1= [];
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2= [];
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects3= [];
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects4= [];
gdjs.Game_32SceneCode.GDfirstmobObjects1= [];
gdjs.Game_32SceneCode.GDfirstmobObjects2= [];
gdjs.Game_32SceneCode.GDfirstmobObjects3= [];
gdjs.Game_32SceneCode.GDfirstmobObjects4= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects4= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects3= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects4= [];
gdjs.Game_32SceneCode.GDNew3DBox2Objects1= [];
gdjs.Game_32SceneCode.GDNew3DBox2Objects2= [];
gdjs.Game_32SceneCode.GDNew3DBox2Objects3= [];
gdjs.Game_32SceneCode.GDNew3DBox2Objects4= [];
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects4= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects3= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects4= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDControlsToggleObjects1, gdjs.Game_32SceneCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects2[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}}

}


{



}


{

/* Reuse gdjs.Game_32SceneCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Object3D").setRotationY(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getRotationY()), -(90), 90));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset(null)), -(90), 90), null);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__IsMoving.func(runtimeScene, null);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetCameraRotation(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").RotationAngle(null) + (180 * gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, null) / gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), null);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset(null) + (90 * gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, null) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), null);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, null);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), null);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (Math.abs(gdjs.evtTools.common.angleDifference(90, gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", null))) < 90);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(180 - (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("ThirdPersonCamera").TargetedRotationAngle(null)) + 90, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0))) > 90);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, null);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects3Objects = Hashtable.newFrom({"Joystick": gdjs.Game_32SceneCode.GDJoystickObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects2Objects = Hashtable.newFrom({"Joystick": gdjs.Game_32SceneCode.GDJoystickObjects2});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects2Objects, "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].getBehavior("MultitouchButton").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJumpButtonObjects2[k] = gdjs.Game_32SceneCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects3Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJoystickObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects3[i].TeleportAndPress(null);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12805036);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, null);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(0.5, null);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12808324);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJoystickObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJoystickObjects1[k] = gdjs.Game_32SceneCode.GDJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJoystickObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects2[i].ActivateControl(false, null);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Touch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects2});
gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, null);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, null);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12813684);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, null);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBox_95959595_95959595pystishka_95959595Objects1Objects = Hashtable.newFrom({"New3DBox__pystishka_": gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBox_95959595_95959595pystishka_95959595Objects2Objects = Hashtable.newFrom({"New3DBox__pystishka_": gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects2Objects = Hashtable.newFrom({"New3DBox": gdjs.Game_32SceneCode.GDNew3DBoxObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBox_95959595_95959595pystishka_95959595Objects2Objects = Hashtable.newFrom({"New3DBox__pystishka_": gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects2Objects = Hashtable.newFrom({"New3DBox": gdjs.Game_32SceneCode.GDNew3DBoxObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"New3DBox": gdjs.Game_32SceneCode.GDNew3DBoxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"New3DBox": gdjs.Game_32SceneCode.GDNew3DBoxObjects1});
gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Game_32SceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1, gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBox_95959595_95959595pystishka_95959595Objects2Objects, "Object3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects2Objects, "Object3D", false, null);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2[i].getBehavior("Object3D").setZ(gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2[i].getBehavior("Object3D").getZ() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Game_32SceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1, gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBox_95959595_95959595pystishka_95959595Objects2Objects, "Object3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects2Objects, "Object3D", false, null));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2[i].getBehavior("Object3D").setZ(gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2[i].getBehavior("Object3D").getZ() - (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1 */
gdjs.Game_32SceneCode.GDNew3DBoxObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1[0].getZOrder()));
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBoxObjects1Objects, 50, 50, 0, 0, null);
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDfirstmobObjects2Objects = Hashtable.newFrom({"firstmob": gdjs.Game_32SceneCode.GDfirstmobObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Game_32SceneCode.GDObstacleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDfirstmobObjects2Objects = Hashtable.newFrom({"firstmob": gdjs.Game_32SceneCode.GDfirstmobObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPushableBoxObjects2Objects = Hashtable.newFrom({"PushableBox": gdjs.Game_32SceneCode.GDPushableBoxObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDfirstmobObjects1Objects = Hashtable.newFrom({"firstmob": gdjs.Game_32SceneCode.GDfirstmobObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Game_32SceneCode.GDNewSprite3Objects1});
gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\PickupCoin.wav", false, 100, gdjs.randomFloatInRange(1.1, 1.3));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Game_32SceneCode.GDNew3DBox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32SceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("firstmob"), gdjs.Game_32SceneCode.GDfirstmobObjects1);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Game_32SceneCode.GDfirstmobObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDfirstmobObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getX()), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSpriteObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "cursor", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "cursor", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBox2Objects1[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("Object3D").getZ()));
}
}}

}


{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList2(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList7(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList10(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList11(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox__pystishka_"), gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNew3DBox_95959595_95959595pystishka_95959595Objects1Objects, 50, 50, 0, 0, null);
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setPosition(700,600);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setZ(40);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
}

}


{

gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;

gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;

gdjs.Game_32SceneCode.GDfirstmobObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDObstacleObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Game_32SceneCode.GDObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("firstmob"), gdjs.Game_32SceneCode.GDfirstmobObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDfirstmobObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDObstacleObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDObstacleObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDObstacleObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDObstacleObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDObstacleObjects1_1final.push(gdjs.Game_32SceneCode.GDObstacleObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDfirstmobObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDfirstmobObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDfirstmobObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDfirstmobObjects1_1final.push(gdjs.Game_32SceneCode.GDfirstmobObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("PushableBox"), gdjs.Game_32SceneCode.GDPushableBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("firstmob"), gdjs.Game_32SceneCode.GDfirstmobObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDfirstmobObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPushableBoxObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPushableBoxObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPushableBoxObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPushableBoxObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPushableBoxObjects1_1final.push(gdjs.Game_32SceneCode.GDPushableBoxObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDfirstmobObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDfirstmobObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDfirstmobObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDfirstmobObjects1_1final.push(gdjs.Game_32SceneCode.GDfirstmobObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDObstacleObjects1_1final, gdjs.Game_32SceneCode.GDObstacleObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPushableBoxObjects1_1final, gdjs.Game_32SceneCode.GDPushableBoxObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDfirstmobObjects1_1final, gdjs.Game_32SceneCode.GDfirstmobObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDfirstmobObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDfirstmobObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDfirstmobObjects1[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32SceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSpriteObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "cursor", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "cursor", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox__pystishka_"), gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1);
gdjs.Game_32SceneCode.GDfirstmobObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDfirstmobObjects1Objects, (( gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1[0].getX()), (( gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1[0].getY()), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Home");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Game_32SceneCode.GDNew3DBox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBox2Objects1[i].putAroundObject((gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), 100, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getAngle()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Game_32SceneCode.GDNew3DBox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32SceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNew3DBox2Objects1[i].setPosition((( gdjs.Game_32SceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNewSpriteObjects1[0].getPointX("")),(( gdjs.Game_32SceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNewSpriteObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects4.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects3.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects4.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects1.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects2.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects3.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects4.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects4.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects4.length = 0;

gdjs.Game_32SceneCode.eventsList13(runtimeScene);
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects4.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDNew3DBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects1.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects2.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects3.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox_9595_9595pystishka_9595Objects4.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects1.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects2.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects3.length = 0;
gdjs.Game_32SceneCode.GDfirstmobObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects4.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNew3DBox2Objects4.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.Game_32SceneCode.GDSmallGreenPlasticRoundSwitchObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
