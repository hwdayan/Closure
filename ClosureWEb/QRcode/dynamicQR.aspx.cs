using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ThoughtWorks.QRCode.Codec;


namespace QRcode
{
    public partial class dynamicQR : System.Web.UI.Page
    {
        public static string validCode;
        Random r = new Random(DateTime.Now.Millisecond);
        QRCodeEncoder encoder = new QRCodeEncoder
        {
            QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.BYTE,
            QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.M,
            QRCodeVersion = 7,
            QRCodeScale = 50
        };

        protected void Page_Load(object sender, EventArgs e)
        { 
            Timer1.Tick += timer_Tick;   
        }

        void timer_Tick(object sender, EventArgs e)
        {
          
            validCode = "";
            string domain = "http://localhost:56025/QRHandler1.ashx?";
            for (int i = 0; i < 6; i++)
            {
              validCode += r.Next(100) > 50 ? r.Next(10).ToString() : ((char)(97 + r.Next(26))).ToString();
            }
            Image1.ImageUrl = domain + validCode;
         Timer1.Interval = 3000;
        }
    }
}