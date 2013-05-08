using System;
using System.Drawing;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Gma.QrCodeNet.Encoding;



namespace QRcode
{
    public partial class dynamicQR : System.Web.UI.Page
    {
        public static string validCode;
        Random r = new Random(DateTime.Now.Millisecond);
        QrEncoder encoder = new QrEncoder();


        protected void Page_Load(object sender, EventArgs e)
        { 
            Timer1.Tick += timer_Tick;   
        }

        void timer_Tick(object sender, EventArgs e)
        {
            validCode = "";
            codes.Value = "";
            for (int i = 0; i < 6; i++)
            {
              validCode += r.Next(100) > 50 ? r.Next(10).ToString() : ((char)(97 + r.Next(26))).ToString();
            }
           validnum.Value = validCode; 
           QrCode qc= encoder.Encode("http://closure2.apphb.com?" + validCode);
           QRwidth.Value = qc.Matrix.Width.ToString();
           QRheight.Value = qc.Matrix.Height.ToString();
           foreach (bool b in qc.Matrix.InternalArray)
           {
               codes.Value += b ? "1" : "0";
           }
         Timer1.Interval = 600000;
        }
    }
}