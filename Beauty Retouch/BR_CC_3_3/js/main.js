(function () {
    function e() {
        var b = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
        b.extensionId = "BeautyRetouch";
        a.dispatchEvent(b)
    }

    var a = new CSInterface;
    (function () {
        themeManager.init();
        e();
        $("#add-new-layer").click(function () {
            a.evalScript("NewLayer()")
        });
        $("#size").click(function () {
            a.evalScript("_120()")
        });
        $("#dodge").click(function () {
            a.evalScript("dodge()")
        });
        $("#burn").click(function () {
            a.evalScript("burn()")
        });
        $("#aid").click(function () {
            a.evalScript("VisualAid()")
        });
        $("#local-curves").click(function () {
            a.evalScript("Dodge_Burn_localnewcopy()")
        });
        $("#duplicate-layer").click(function () {
            a.evalScript("duplicateLayer()")
        });
        $("#median").click(function () {
            a.evalScript("FS_Median()")
        });
        $("#gaussian").click(function () {
            a.evalScript("FS_Gausian()")
        });
        $("#custom").click(function () {
            a.evalScript("FSClassicCustomized()")
        });
        $("#full-body").click(function () {
            a.evalScript("FSClassicFull_body()")
        });
        $("#portrait").click(function () {
            a.evalScript("FSClassicPortrait()")
        });
        $("#global-layer").click(function () {
            a.evalScript("GlobalD_B_MidGrayLayer()")
        });
        $("#hue").click(function () {
            a.evalScript("Hue()")
        });
        $("#anti-pink").click(function () {
            a.evalScript("JK_Anti_Pink()")
        });
        $("#glowing-skin").click(function () {
            a.evalScript("JK_GlowingSkin()")
        });
        $("#magic-eyes").click(function () {
            a.evalScript("JK_MagicEyes()")
        });
        $("#lev").click(function () {
            a.evalScript("Levels()")
        });
        $("#liquify").click(function () {
            a.evalScript("LIQUIFY()")
        });
        $("#liquify-smart").click(function () {
            a.evalScript("Liquify_smart()")
        });
        $("#leyr").click(function () {
            a.evalScript("Layer()")
        });
        $("#over-saturation").click(function () {
            a.evalScript("Over_SaturatedAreas()")
        });
        $("#digital-skin").click(function () {
            a.evalScript("RA_DigitalSkinTexture()")
        });
        $("#magic-smile").click(function () {
            a.evalScript("RA_MagicSmile()")
        });
        $("#sharpen-details").click(function () {
            a.evalScript("RA_SharpenDetails()")
        });
        $("#sharpen-image").click(function () {
            a.evalScript("RA_SharpenImage()")
        });
        $("#remove-hair").click(function () {
            a.evalScript("RemoveBodyandFaceHair()")
        });
        $("#save-as").click(function () {
            a.evalScript("SAVEAS()")
        });
        $("#sel").click(function () {
            a.evalScript("Selectivecolor()")
        });
        $("#solar-curve").click(function () {
            a.evalScript("SolarCurve()")
        });
        $("#web-size").click(function () {
            a.evalScript("webSize()")
        });
        $("#transform-tool").click(function () {
            a.evalScript("transformTool()")
        });
        $(".signature").click(function () {
            var a = new CSInterface, c = "/", d = -1 < window.navigator.platform.toLowerCase().indexOf("win");
            d && (c = a.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3));
            a = "/usr/bin/open";
            d && (a = c + "Windows/explorer.exe");
            window.cep.process.createProcess(a, "http://www.retouchingacademylab.com/")
        });
        $(".healing-icon").click(function () {
            a.evalScript("healingBrush()")
        });
        $("#magical-skin").click(function () {
            a.evalScript("SkinColor()") 
        });
        $(".lasso-icon").click(function () {
            a.evalScript("lasso()")
        });
        $(".pen-icon").click(function () {
            a.evalScript("penIcon()")
        });
        $(".pencil-icon").click(function () {
            a.evalScript("brushTool()")
        });
        $("#cur").click(function () {
            a.evalScript("Curves()")
        });
        $(".stamp-icon").click(function () {
            a.evalScript("cloneTool()")
        });
        $("#basic").click(function () {
            a.evalScript("Basic()")
        });
        $("#local-curves-brush-db").click(function () {
            a.evalScript("brush1_local()")
        });
        $("#global-layer-brush").click(function () {
            a.evalScript("brush2_midgray()")
        });
        $("#invert").click(function () {
            a.evalScript("invert()")
        });
        $("#plus").click(function () {
            a.evalScript("plus()")
        });
        $("#minus").click(function () {
            a.evalScript("minus()")
        });
        $("#a").click(function () {
            a.evalScript("scriptA()")
        });
        $("#b").click(function () {
            a.evalScript("scriptB()")
        });
        $("#c").click(function () {
            a.evalScript("scriptC()")
        });
        $("#d").click(function () {
            a.evalScript("scriptD()")
        });
        $("#e").click(function () {
            a.evalScript("scriptE()")
        });
        $("#f").click(function () {
            a.evalScript("scriptF()")
        });
        $("#hair-highlight").click(function () {
            a.evalScript("HairHighlight()")
        });
        $("#sharpen-image").click(function () {
            a.evalScript("SharpenImage()")
        });
        $("#brush-2").click(function () {
            a.evalScript("Hairbrush2()")
        });
        $("#brush-1").click(function () {
            a.evalScript("Hairbrush1()")
        });
        $("#gray-layer").click(function () {
            a.evalScript("GreyLayer()")
        });


        $("#btn1").click(function () {
            var a = new CSInterface, c = "/", d = -1 < window.navigator.platform.toLowerCase().indexOf("win");
            d && (c = a.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3));
            a = "/usr/bin/open";
            d && (a = c + "Windows/explorer.exe");
            window.cep.process.createProcess(a, "https://retouchingacademylab.com/before-you-submit-a-ticket/")
        });
        $("#btn2").click(function () {
            var a = new CSInterface, c = "/", d = -1 < window.navigator.platform.toLowerCase().indexOf("win");
            d && (c = a.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3));
            a = "/usr/bin/open";
            d && (a = c + "Windows/explorer.exe");
            window.cep.process.createProcess(a, "https://retouchingacademylab.com/BR-video-tutorials")
        });
        $("#btn3").click(function () {
            var a = new CSInterface, c = "/", d = -1 < window.navigator.platform.toLowerCase().indexOf("win");
            d && (c = a.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3));
            a = "/usr/bin/open";
            d && (a = c + "Windows/explorer.exe");
            window.cep.process.createProcess(a, "https://www.instagram.com/retouchingpanels/")
        });
        $("#btn4").click(function () {
            var a = new CSInterface, c = "/", d = -1 < window.navigator.platform.toLowerCase().indexOf("win");
            d && (c = a.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3));
            a = "/usr/bin/open";
            d && (a = c + "Windows/explorer.exe");
            window.cep.process.createProcess(a, "https://retouchingacademylab.com/bonus-materials/")
        });
        $("#btn5").click(function () {
            var a = new CSInterface, c = "/", d = -1 < window.navigator.platform.toLowerCase().indexOf("win");
            d && (c = a.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3));
            a = "/usr/bin/open";
            d && (a = c + "Windows/explorer.exe");
            window.cep.process.createProcess(a, "https://retouchingacademylab.com/ra-lab-members-area/")
        });


    })()
})();
