namespace webApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("product")]
    public partial class product
    {
        public int id { get; set; }

        [StringLength(10)]
        public string name { get; set; }
        public int quantity { get; set; }

        public int price { get; set; }
        public int CategoryID { get; set; }
    }
}
