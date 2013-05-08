using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Ventuz.OSC;
using Microsoft.AspNet.SignalR.Client.Hubs;
using System.Collections.Generic;

namespace OSCpanel
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object o, EventArgs e)
        {
            HubConnection conn = new HubConnection("http://localhost:56930/");
           var myHub= conn.CreateHubProxy("liuro");
           conn.Start().ContinueWith(task =>
           {
               if (task.IsFaulted)
               {
                   userMsg.Text="There was an error opening the connection:"+
                                     task.Exception.GetBaseException();
               }
               else
               {
                   userMsg.Text="Connected";
               }

           }).Wait();
          
        
            myHub.On<object[]>("osc", output);

        }
           UdpWriter sender = new UdpWriter("127.0.0.1", 19234); 
    
        private void output(object[] args)
        {

             OscMessage oscmsg0 = new OscElement("/ventuz/mouseX", args[0]);
             OscMessage oscmsg1 = new OscElement("/ventuz/mouseY", args[1]);
             OscMessage oscmsg7 = new OscElement("/ventuz/caller", args[8]);
             OscMessage oscmsg9 = new OscElement("/ventuz/color", args[9]);

             if (userinput.inputs.Count > 30)
             userinput.inputs.RemoveAt(0);

             userinput input = new userinput((double)args[0], (double)args[1], (string)args[8], (string)args[9]);
            userinput.inputs.Add(input);

            OscMessage oscmsg2 = new OscElement("/ventuz/dstl", input.getlastDst(true));
            OscMessage oscmsg3 = new OscElement("/ventuz/dst2", input.getlastDst(false));
            OscMessage oscmsg4 = new OscElement("/ventuz/span1", input.getTimespan(true).Milliseconds);
            OscMessage oscmsg5 = new OscElement("/ventuz/span2", input.getTimespan(false).Milliseconds);     

              OscMessage oscmsg8 = new OscElement("/ventuz/signal", args[2]);
             OscMessage oscmsg6 = new OscElement("/ventuz/words",  args[7]);   
            sender.Send(oscmsg6);
             userMsg.Text = "";

             foreach (object o in args)
                 userMsg.Text += o.ToString() + Environment.NewLine;
        }
        private void button1_Click(object o, EventArgs e)
        {
           
        }
    }
    class userinput
    {
       public static List<userinput> inputs = new List<userinput>();  
        double x, y;
        string id;
        string color;
        DateTime time;
        public userinput(double x,double y,string id,string color)
        {
            this.x = x;
            this.y = y;
            this.id = id;
            this.color = color;
            this.time  = DateTime.Now;
        }
        public int UserlastIndex()
        {
            string uid = inputs.Last<userinput>().id;
            for (int i = inputs.Count - 2; i >= 0; i--)
            {
                if (inputs[i].id == uid)
                    return i;
            }
            return -1;
        }

        public double getlastDst(bool iscaller)
        {
           double dst; 
           userinput last=null;
           if (iscaller)
           {
               if (UserlastIndex() != -1)
                   last = inputs[UserlastIndex()];
               else
                   return 0;
           }
           else if (inputs.Count > 1)
               last = inputs[inputs.Count - 2];
           else
               return 0;
            dst = Math.Sqrt(Math.Pow(last.x - x, 2) + Math.Pow(last.y - y, 2));
            return dst;
        }
        public TimeSpan getTimespan(bool iscaller)
        {
            TimeSpan span;
            userinput last;
            if (iscaller)
            {
                if (UserlastIndex() != -1)
                    last = inputs[UserlastIndex()];
                else
                    return new TimeSpan();
            }
           else if (inputs.Count > 1)
                last = inputs[inputs.Count - 2];
           else
               return new TimeSpan();
            span = time-last.time;
            return span;
        }

    }
}
