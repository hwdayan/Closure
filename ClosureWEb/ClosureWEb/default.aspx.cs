 ﻿using System;
 using System.Linq;
 using System.Web;
 using System.Web.UI;
 using System.Web.UI.WebControls;
 using System.Drawing;
 using System.Web.SessionState;
 //using System.Web.Routing;
 using Microsoft.AspNet.SignalR;
 using Microsoft.AspNet.SignalR.Hubs;
 using System.IO;
 using System.Collections.Generic;
 namespace Closure
{
    public partial class _default : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
           if (Global.dictionary.Count == 0)
            {
                FileStream fs = new FileStream(Path.GetFullPath( Server.MapPath(".")+"/Dictionary.txt"), FileMode.Open);
                StreamReader sr = new StreamReader(fs);
                List<string> words = new List<string>();
                while (sr.Peek() >= 0)
                {
                    Global.dictionary.Add(sr.ReadLine());
                }
                Response.Write("全域字典加入");
            }
             sid.Value = Context.Session.SessionID;
            ////tag.Value= sid;
            //if (!Closure.pushs.ContainsKey(sid))
           //    Closure.pushs.Add(sid, new Boolean[5, 5]); //新用戶
            //for (int i = 0; i < 5; i++)
            //{
            //    for (int j = 0; j < 5; j++)
            //    {
            //        Panel div = new Panel();
            //        Button b = new Button();
            //        b.ID = i.ToString() + j.ToString();
            //        b.Text = Closure.pushs[sid][i, j] == true ? "true" : "false";
            //        b.Attributes.Add("onclick", "return false"); //不要postback
            //        div.Controls.Add(b);
            //        form1.Controls.Add(div);
            //        b.CssClass = "push";
            //    }
            //}
       }
  
    
    }
}
