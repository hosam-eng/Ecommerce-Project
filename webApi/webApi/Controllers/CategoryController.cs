using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using webApi.Models;

namespace webApi.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    [RequireHttps]
    public class CategoryController : ApiController
    {

        // GET api/values/Categories
        [System.Web.Mvc.HttpGet]
        public IEnumerable<category> Get()
        {
            using (productModel c = new productModel())
            {
                return c.Categories.ToList();
            }
        }
    }
}
