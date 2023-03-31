using backend.Helper;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CPF { get; set; }
        public string Adress { get; set; }
        public string Adress2 { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }

        public void SetPasswordHash()
        {
            Password = Password.HashCreator();
        }
    }
}