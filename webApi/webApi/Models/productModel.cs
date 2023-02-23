using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace webApi.Models
{
    public partial class productModel : DbContext
    {
        public productModel()
            : base("name=productModel")
        {
        }

        public virtual DbSet<product> products { get; set; }
        public virtual DbSet<category> Categories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<product>()
                .Property(e => e.name)
                .IsFixedLength();
        }
    }
}
