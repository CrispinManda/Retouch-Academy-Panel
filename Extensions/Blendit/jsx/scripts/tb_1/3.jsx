﻿//
// Generated Tue Feb 17 2015 14:50:30 GMT+0600
//

//
//==================== Darken ==============
//
function Darken() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
    desc1.putReference(PSString.Null, ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(PSKey.Mode, PSType.BlendMode, PSEnum.Darken);
    desc1.putObject(PSKey.To, PSClass.Layer, desc2);
    executeAction(PSEvent.Set, desc1, dialogMode);
  };

  step1();      // Set
};



cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
// Darken.loadSymbols
//   Loading up the symbol definitions like this makes it possible
//   to include several of these generated files in one master file
//   provided a prefix is specified other than the default. It also
//   skips the definitions if PSConstants has already been loaded.
//
Darken.loadSymbols = function() {
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
  PSClass.Channel = cTID('Chnl');
  PSClass.Layer = cTID('Lyr ');
  PSClass.Mask = cTID('Msk ');
  PSEnum.Darken = cTID('Drkn');
  PSEnum.Dissolve = cTID('Dslv');
  PSEnum.HideAll = cTID('HdAl');
  PSEnum.Normal = cTID('Nrml');
  PSEnum.RevealAll = cTID('RvlA');
  PSEnum.Target = cTID('Trgt');
  PSEvent.Delete = cTID('Dlt ');
  PSEvent.Invert = cTID('Invr');
  PSEvent.Make = cTID('Mk  ');
  PSEvent.Select = cTID('slct');
  PSEvent.Set = cTID('setd');
  PSKey.Apply = cTID('Aply');
  PSKey.At = cTID('At  ');
  PSKey.Duplicate = cTID('Dplc');
  PSKey.MakeVisible = cTID('MkVs');
  PSKey.Mode = cTID('Md  ');
  PSKey.New = cTID('Nw  ');
  PSKey.To = cTID('T   ');
  PSKey.Using = cTID('Usng');
  PSString.Null = sTID('null');
  PSType.BlendMode = cTID('BlnM');
  PSType.Ordinal = cTID('Ordn');
  PSType.UserMaskOptions = cTID('UsrM');
};

Darken.loadSymbols(); // load up our symbols



//=========================================
//                    Darken.main
//=========================================
//

Darken.main = function () {
  Darken();
};

Darken.main();

// EOF
