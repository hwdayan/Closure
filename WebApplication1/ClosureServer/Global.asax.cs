using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Routing;
using Microsoft.AspNet.SignalR;

namespace Closure
{
    public class Global : System.Web.HttpApplication
    {
        private static RouteBase hubRoute;
        public static List<string> dictionary = new List<string>();
        protected void Application_Start(object sender, EventArgs e)
        {
            hubRoute = RouteTable.Routes.MapHubs(); 
           
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if (IsSignalRRequest(Context))
            {
                // Turn readonly sessions on for SignalR
                Context.SetSessionStateBehavior(SessionStateBehavior.ReadOnly);
            }
        }
        private bool IsSignalRRequest(HttpContext context)
        {
            RouteData routeData = hubRoute.GetRouteData(new HttpContextWrapper(context));

            // If the routeData isn't null then it's a SignalR request
            return routeData != null;
        }
        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}