 ﻿using System;
 using System.Linq;
 using System.Web;
 using System.Web.UI;
 using System.Web.UI.WebControls;
 using System.Drawing;
 using System.Web.SessionState;
 using System.IO;
 using System.Collections.Generic;
 using QRcode;
 namespace Closure
{
    public partial class _default : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            //if (Request.QueryString.Count == 0 || Request.QueryString[0] != dynamicQR.validCode)
            //{
            //    Response.Write("有關記憶截流。。。建構中");
            //    Response.End();
            //}
           if (Global.dictionary.Count == 0)
            {
                FileStream fs = new FileStream(Server.MapPath("Dictionary.txt"), FileMode.Open);
                StreamReader sr = new StreamReader(fs);
                List<string> words = new List<string>();
                while (sr.Peek() >= 0)
                {
                    Global.dictionary.Add(sr.ReadLine());
                }
                //Response.Write("全域字典加入");
            }
             sid.Value = Context.Session.SessionID;
      
       }
  
    
    }
}
