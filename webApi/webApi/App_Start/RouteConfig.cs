using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using webApi.Controllers;

namespace webApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapHttpRoute(
                    name: "Apibrodbycat",
                    routeTemplate: "prodbycatid/{id}",
                    defaults: new { controller = "Values",Action= "prodbycatid", id = RouteParameter.Optional }
                );
            routes.MapHttpRoute(
                   name: "prodbyid",
                   routeTemplate: "prodbyid/{id}",
                   defaults: new { controller = "Values", Action = "prodbyid", id = RouteParameter.Optional }
               );
            routes.MapHttpRoute(
                name: "Default",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {Controller="Values", id = UrlParameter.Optional }
            );
            routes.MapHttpRoute(
               name: "ApiCategory",
               routeTemplate: "api/{controller}/{id}",
               defaults: new {Controller= "Category", Action= "Get", id = UrlParameter.Optional }
           );
        }
    }
}
