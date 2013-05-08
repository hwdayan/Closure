using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;


namespace QRcode
{
    /// <summary>
    /// ttsHandler 的摘要描述
    /// </summary>
    public class ttsHandler : IHttpHandler
    {
        HttpContext cont;
        public void ProcessRequest(HttpContext context)
        {
            cont = context;
            string qs = context.Request.QueryString["tts"];
           WebClient Client = new WebClient ();
           Client.DownloadDataCompleted += Client_DownloadDataCompleted;
            Client.DownloadDataAsync(new Uri("http://translate.google.com/translate_tts?ie=utf-8&tl=en&q="+qs));
           
           
        }

        void Client_DownloadDataCompleted(object sender, DownloadDataCompletedEventArgs e)
        {
            cont.Response.ContentType = "audio/mpeg";
            cont.Response.AddHeader("Content-Disposition", "attachment; filename=" + HttpUtility.UrlEncode("tts.mp3", System.Text.Encoding.UTF8));
            cont.Response.BinaryWrite(e.Result);
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