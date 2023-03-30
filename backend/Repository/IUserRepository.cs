using backend.Models;

namespace backend.Repository
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> SearchUser();
        Task<User> SearchUser(int id);
        void AddUser(User user);
        void UpdtUser(User user);
        void DeleteUser(User user);
        Task<bool> SaveChangesAsync(User user);
    }
}