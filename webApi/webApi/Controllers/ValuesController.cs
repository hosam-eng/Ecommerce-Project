using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using webApi.Models;
using System.Data.Entity;
using System.Web.Http.Cors;
using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace webApi.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    // [RequireHttps]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<product> Get()
        {
            using (productModel p = new productModel())
            {
                return p.products.ToList();
            }
        }

        // GET prodbyid/5
        [System.Web.Http.HttpGet]
        public product prodbyid(int id)
        {
            using (productModel p = new productModel())
            {
                return p.products.Where(n => n.id == id).FirstOrDefault();
            }
        }
        // GET GetByCatID/5
        [System.Web.Http.HttpGet]
        public IEnumerable<product> prodbycatid(int id)
        {
            using (productModel p = new productModel())
            {
                return p.products.Where(n => n.CategoryID == id).ToList();
            }
        }

        // POST api/values
        public HttpResponseMessage Post([Microsoft.AspNetCore.Mvc.FromBody] product value)
        {
            try {
                using ( productModel p = new productModel())
                {
                    p.products.Add(value);
                    p.SaveChanges();
                    var messege = Request.CreateResponse(HttpStatusCode.Created, value);
                    messege.Headers.Location = new Uri(Request.RequestUri + value.id.ToString());
                    return messege;
                }
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // PUT api/values/5
        public HttpResponseMessage Put(int id, [Microsoft.AspNetCore.Mvc.FromBody] product value)
        {
            try
            {
                using (productModel p = new productModel())
                {
                    p.Entry(value).State = EntityState.Modified;
                    p.SaveChanges();
                     return Request.CreateResponse(HttpStatusCode.OK, value);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            using (productModel p = new productModel())
            {
                product product = p.products.Where(n => n.id == id).FirstOrDefault();
                p.products.Remove(product);
                p.SaveChanges();
            }
        }
    }
}
