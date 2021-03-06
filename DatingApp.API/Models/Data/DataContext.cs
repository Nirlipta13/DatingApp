using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Models.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
            
        }

        public DbSet<WeatherForecast> WeatherForecasts {get; set;}
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}