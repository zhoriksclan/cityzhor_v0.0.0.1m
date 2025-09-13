
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection = {};


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Right");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 0;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "DownRight");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 1;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Down");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 2;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "DownLeft");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 3;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Left");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 4;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "UpLeft");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 5;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Up");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 6;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "UpRight");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo8Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 7;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection.func = function(runtimeScene, Angle, Direction, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection.registeredGdjsCallbacks = [];