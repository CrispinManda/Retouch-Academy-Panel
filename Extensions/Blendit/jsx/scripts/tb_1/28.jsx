//
// Generated Tue Feb 17 2015 14:50:30 GMT+0600
//

//
//==================== New ==============
//
function New() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(PSClass.Layer);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Make, desc1, dialogMode);
  };

  step1();      // Make
};



cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
// New.loadSymbols
//   Loading up the symbol definitions like this makes it possible
//   to include several of these generated files in one master file
//   provided a prefix is specified other than the default. It also
//   skips the definitions if PSConstants has already been loaded.
//
New.loadSymbols = function() {
  var dbgLevel = $.level;
  $.level = 0;
  try {
    PSConstants;
    return; // only if PSConstants is defined
  } catch (e) {
  } finally {
    $.level = dbgLevel;
  }
  var needDefs = true;
  $.level = 0;
  try {
    PSClass;
    needDefs = false;
  } catch (e) {
  } finally {
    $.level = dbgLevel;
  }
  if (needDefs) {
    PSClass = function() {};
    PSEnum = function() {};
    PSEvent = function() {};
    PSForm = function() {};
    PSKey = function() {};
    PSType = function() {};
    PSUnit = function() {};
    PSString = function() {};
  }

  // We may still end up duplicating some of the following definitions
  // but at least we don't redefine PSClass, etc... and wipe out others
  PSClass.Layer = cTID('Lyr ');
  PSEvent.Make = cTID('Mk  ');
  PSString.Null = sTID('null');
};

New.loadSymbols(); // load up our symbols



//=========================================
//                    New.main
//=========================================
//

New.main = function () {
  New();
};

New.main();

// EOF
