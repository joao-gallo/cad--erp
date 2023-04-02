using backend.Models;

namespace backend.Repository
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> SearchUser();
        Task<User> SearchUser(int id);
        Task<User> GetByEmail(string email, string password);
        void AddUser(User user);
        void UpdtUser(User user);
        void DeleteUser(User user);
        Task<bool> SaveChangesAsync(User user);
    }
}