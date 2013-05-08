<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dynamicQR.aspx.cs" Inherits="QRcode.dynamicQR" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <canvas id="QRcanvas" runat="server" width="1000" height="1000"></canvas>
            <input id="codes" type="hidden" runat="server" />
            <input id="validnum" type="hidden" runat="server" />
            <input id="QRwidth" type="hidden" runat="server" />
            <input id="QRheight" type="hidden" runat="server" />
            <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <asp:Timer ID="Timer1" runat="server" Interval="500"></asp:Timer>
        </div>
    <script>
        var w = parseInt(document.getElementById('QRwidth').value);
        var h = parseInt(document.getElementById('QRheight').value);
        var qr = document.getElementById('codes').value;
        var canvas = document.getElementById('QRcanvas');
        var ctx = canvas.getContext('2d');
        for (var i = 0; i < w; i++) {
            for (var j = 0; j < h; j++) {
                var fillcolor = qr[i * w + j] == "1" ? "black" : "white";
                ctx.fillStyle = fillcolor;
                ctx.fillRect(i * 25, j * 25, 25, 25);
                ctx.fill();
            }
        }

    </script>
 
        
    </form>
     
</body>
</html>
