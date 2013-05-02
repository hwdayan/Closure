﻿	﻿using System;
	using System.Web;
	using Microsoft.AspNet.SignalR;
	using Microsoft.AspNet.SignalR.Hubs;
	using System.Collections.Generic;
	using System.Linq;
	using System.Drawing;
	using System.Security.Cryptography;
	
	namespace Closure
	{
	    [HubName("liuro")]
	    public class Closure : Hub
	    {
	        public static Dictionary<string, Boolean[,]> pushs = new Dictionary<string, Boolean[,]>();
	        public static Dictionary<string, List<string>> SIDmapping = new Dictionary<string, List<string>>();
	        public string cid,sid;
	
	        public void Send(double mouseX,double mouseY)
	        { 
	            cid = getCID();
	            sid = getSID();
	            var dic = Closure.SIDmapping;
	            var callerID = sid;
	            Random rnd = new Random(DateTime.Now.Millisecond);
	            RNGCryptoServiceProvider rngc = new RNGCryptoServiceProvider();
	            byte[] bta = new byte[1];
	           
	            int signal =rnd.Next(0,8);
	            bool b     =rnd.Next(2)==1?true:false;
	            Color col = Color.FromArgb(rnd.Next(90), rnd.Next(90)+50, rnd.Next(90)+160);
	            string rndColor = ColorTranslator.ToHtml(col);
	            //string[] usercolors = { "#6dffff", "#FFB6FF", "#FFFA64", "#7BFFB9", "#AA6BFF" };
	            //string userColor = usercolors[sid.GetHashCode() % 5];
               rngc.GetBytes(bta);
	            double r1 = (double)bta[0] / 256.0;
	            rngc.GetBytes(bta);
	            double r2 = (double)bta[0] / 256.0;
	            string words = "";
	            if (signal == 3) //其他不需要
	            {
	                for (int i = 0; i < (r1 * 4 + 2); i++)
	                {
	                    rngc.GetBytes(bta);
	                    int sRnd = (Int32)bta[0];
	                    for (int j = 0; j < sRnd; j++)
	                        rnd.Next();
	                    words += Global.dictionary[rnd.Next(Global.dictionary.Count)] + " ";
	                    if (words.Length > 30)
	                        break;
	                }
	            }
	            if(signal==7)
	             Clients.Caller.broadcast((int)mouseX, (int)mouseY, signal, b, rndColor, r1, r2, words,callerID);
	            else
	                Clients.All.broadcast((int)mouseX, (int)mouseY, signal, b, rndColor, r1, r2, words,callerID);
	        }
	        private string[] exclude()
	        {
	            var dic = Closure.SIDmapping; 
	            List<string> result = new List<string>();
	            foreach (KeyValuePair<string,List<string>> kv in dic)
	            {
	               if(kv.Key!=sid)
	               {
	                   foreach (string s in dic[kv.Key])
	                       result.Add(s);
	               }
	            }
	            return result.ToArray();
	        }
	        public void removeUser(string sid)
	        {
	            Closure.SIDmapping.Remove(sid);
	        }
	        private string getSID()
	        {
	            // Get the HttpContext from the SignalR request
	            var context = Context.Request.GetHttpContext();
	            return context.Session.SessionID;
	        }
	        private string getCID()
	        {    
	            return Context.ConnectionId;
	        }
	      
	    }
	}
