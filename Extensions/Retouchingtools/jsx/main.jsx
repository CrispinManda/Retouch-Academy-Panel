if(typeof($)=='undefined')
	$={};

$._ext = {
    //Evaluate a file and catch the exception.
    evalFile : function(path) {
        try {
            $.evalFile(path);
        } catch (e) {alert("Exception:" + e);}
    },
    // Evaluate all the files in the given folder 
    evalFiles: function(jsxFolderPath) {
        var folder = new Folder(jsxFolderPath);
        if (folder.exists) {
            var jsxFiles = folder.getFiles("*.jsx");
            for (var i = 0; i < jsxFiles.length; i++) {
                var jsxFile = jsxFiles[i];
                $._ext.evalFile(jsxFile);
            }
        }
    }
};

$.UltimateRetouch = {
		
		select_dodge_tool: function() {
			
			var idslct = charIDToTypeID( "slct" );
		    var desc3 = new ActionDescriptor();
		    var idnull = charIDToTypeID( "null" );
		        var ref2 = new ActionReference();
		        var idDdTl = charIDToTypeID( "DdTl" );
		        ref2.putClass( idDdTl );
		    desc3.putReference( idnull, ref2 );
		    executeAction( idslct, desc3, DialogModes.NO );
			
		},
		select_burn_tool: function() {
			
			var idslct = charIDToTypeID( "slct" );
		    var desc4 = new ActionDescriptor();
		    var idnull = charIDToTypeID( "null" );
		        var ref3 = new ActionReference();
		        var idBrTl = charIDToTypeID( "BrTl" );
		        ref3.putClass( idBrTl );
		    desc4.putReference( idnull, ref3 );
		    executeAction( idslct, desc4, DialogModes.NO );
			
		},
		select_brush_tool: function() {
			
			var idslct = charIDToTypeID( "slct" );
		    var desc5 = new ActionDescriptor();
		    var idnull = charIDToTypeID( "null" );
		        var ref4 = new ActionReference();
		        var idPbTl = charIDToTypeID( "PbTl" );
		        ref4.putClass( idPbTl );
		    desc5.putReference( idnull, ref4 );
		    executeAction( idslct, desc5, DialogModes.NO );
			
		},
		select_heal_tool: function() {
			
			var idslct = charIDToTypeID( "slct" );
		    var desc6 = new ActionDescriptor();
		    var idnull = charIDToTypeID( "null" );
		        var ref5 = new ActionReference();
		        var idspotHealingBrushTool = stringIDToTypeID( "spotHealingBrushTool" );
		        ref5.putClass( idspotHealingBrushTool );
		    desc6.putReference( idnull, ref5 );
		executeAction( idslct, desc6, DialogModes.NO );
			
		},
		select_mixBrush_tool: function() {
			
			var idslct = charIDToTypeID( "slct" );
		    var desc7 = new ActionDescriptor();
		    var idnull = charIDToTypeID( "null" );
		        var ref6 = new ActionReference();
		        var idMixB = charIDToTypeID( "MixB" );
		        ref6.putClass( idMixB );
		    desc7.putReference( idnull, ref6 );
		    executeAction( idslct, desc7, DialogModes.NO );
			
		},
		select_heal_tool2: function() {
		
				var idslct = charIDToTypeID( "slct" );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idmagicStampTool = stringIDToTypeID( "magicStampTool" );
        ref2.putClass( idmagicStampTool );
    desc3.putReference( idnull, ref2 );
executeAction( idslct, desc3, DialogModes.NO );
		},
		
		select_clone_tool: function() {
		
		var idslct = charIDToTypeID( "slct" );
    var desc8 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var idClTl = charIDToTypeID( "ClTl" );
        ref8.putClass( idClTl );
    desc8.putReference( idnull, ref8 );
executeAction( idslct, desc8, DialogModes.NO );
	},
	
	select_patch_tool: function() {
	
	var idslct = charIDToTypeID( "slct" );
    var desc10 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref10 = new ActionReference();
        var idpatchSelection = stringIDToTypeID( "patchSelection" );
        ref10.putClass( idpatchSelection );
    desc10.putReference( idnull, ref10 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc10.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc10.putBoolean( idforceNotify, true );
executeAction( idslct, desc10, DialogModes.NO );
	},	
				
	select_select_tool: function() {
	
						var idslct = charIDToTypeID( "slct" );
    var desc2 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idmarqueeEllipTool = stringIDToTypeID( "marqueeEllipTool" );
        ref1.putClass( idmarqueeEllipTool );
    desc2.putReference( idnull, ref1 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc2.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc2.putBoolean( idforceNotify, true );
executeAction( idslct, desc2, DialogModes.NO );					
		}								
};
