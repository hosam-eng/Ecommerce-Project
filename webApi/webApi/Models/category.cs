using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace webApi.Models
{
        [Table("category")]
        public partial class category
        {
            public int id { get; set; }

            [StringLength(10)]
            public string name { get; set; }
        }
    }