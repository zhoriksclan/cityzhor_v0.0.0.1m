
if (typeof gdjs.evtsExt__MousePointerLock__MovementY !== "undefined") {
  gdjs.evtsExt__MousePointerLock__MovementY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__MovementY = {};


gdjs.evtsExt__MousePointerLock__MovementY.userFunc0xe38e10 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";

eventsFunctionContext.returnValue = gdjs._MousePointerLockExtension.handler.movementY || 0;

};
gdjs.evtsExt__MousePointerLock__MovementY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLock__MovementY.userFunc0xe38e10(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__MousePointerLock__MovementY.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MousePointerLock__MovementY.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__MousePointerLock__MovementY.registeredGdjsCallbacks = [];