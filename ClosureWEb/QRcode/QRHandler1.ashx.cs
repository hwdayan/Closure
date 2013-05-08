using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ThoughtWorks.QRCode.Codec;
using System.Drawing;
using System.Drawing.Imaging;


namespace QRcode
{
    /// <summary>
    /// QRHandler1 的摘要描述
    /// </summary>
    public class QRHandler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string validCode = context.Request.QueryString[0];
            QRCodeEncoder encoder = new QRCodeEncoder
            {
                QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.BYTE,
                QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.M,
                QRCodeVersion = 7,
                QRCodeScale = 10
            };
            Bitmap image = encoder.Encode("http://closure.apphb.com" + validCode);
            context.Response.Clear();
            context.Response.ContentType = "image/gif";
            image.Save(context.Response.OutputStream, ImageFormat.Gif);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}