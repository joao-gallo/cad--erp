using backend.Models;
using backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repository;
        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _repository.SearchUser();
            return users.Any() ? Ok(users) : NoContent();
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var users = await _repository.SearchUser(id);
            return users != null ? Ok(users) : NotFound("User not found");
        }
        [HttpPost]
        public async Task<IActionResult> Post(User user)
        {
            _repository.AddUser(user);
            return await _repository.SaveChangesAsync(user) ? Ok("Certo") : BadRequest("Erro");
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, User user)
        {
            var userdb = await _repository.SearchUser(id);
            if (userdb == null) return NotFound("User Not Found");

            userdb.Name = user.Name ?? userdb.Name;
            userdb.CPF = user.CPF ?? userdb.CPF;
            userdb.Adress = user.Adress ?? userdb.Adress;
            userdb.Email = user.Email ?? userdb.Email;
            userdb.Phone = user.Phone ?? userdb.Phone;

            _repository.UpdtUser(userdb);
            return await _repository.SaveChangesAsync(userdb) ? Ok("Atualizado") : BadRequest("Erro");
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var userdb = await _repository.SearchUser(id);
            if (userdb == null) return NotFound("User Not Found");

            _repository.DeleteUser(userdb);
            return await _repository.SaveChangesAsync(userdb) ? Ok("Deletado") : BadRequest("Erro");
        }
    }
}