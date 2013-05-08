using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Gma.QrCodeNet.Encoding;
using System.Text;


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

            string s = "";
            string bits ="";
            string domain = "http://closure2.apphb.com?q=";
            for (int i = 0; i < 6; i++)
            {
               s +=  r.Next(100)>50?r.Next(10).ToString():((char)(97 + r.Next(26))).ToString();
            }
            validCode = s;
            QrCode qr = encoder.Encode(domain+validCode);
            BitMatrix bm = qr.Matrix;
            for (int i = 0; i < bm.Width; i++)
            {
               
                for (int j = 0; j < bm.Height; j++)
                {
                   bits += bm.InternalArray[i, j] ? "1" : "0";
                }
            }
            codes.Value = bits;
            QRwidth.Value = bm.Width.ToString();
            QRheight.Value = bm.Height.ToString();
            Timer1.Interval = 600000;
        }
    }
}