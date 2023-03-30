using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace user.Data
{
    public class UserPersistence : DbContext
    {
        public UserPersistence(DbContextOptions<UserPersistence> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

    }
}