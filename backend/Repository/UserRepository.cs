using backend.Models;
using user.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserPersistence _persistence;

        public UserRepository(UserPersistence persistence)
        {
            _persistence = persistence;
        }
        public void AddUser(User user)
        {
            _persistence.Add(user);
        }

        public void DeleteUser(User user)
        {
            _persistence.Remove(user);
        }

        public async Task<bool> SaveChangesAsync(User user)
        {
            return await _persistence.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<User>> SearchUser()
        {
            return await _persistence.Users.ToListAsync();
        }

        public async Task<User> SearchUser(int id)
        {
            return await _persistence.Users.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public void UpdtUser(User user)
        {
            _persistence.Update(user);
        }
    }
}