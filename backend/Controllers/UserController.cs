using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        public static List<User> Users()
        {
            return new List<User>{
                new User{
                    Id = 1,
                    Name = "Cleide",
                    CPF = 0804506662,
                    Adress = "Pinguin",
                    Email = "arroba@arroba.arr",
                    Phone = 12981892
                    }
            };
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Users());
        }
        [HttpPost]
        public IActionResult Post(User user)
        {
            var clients = Users();
            clients.Add(user);
            return Ok(clients);
        }
    }
}