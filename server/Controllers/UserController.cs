using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.ComponentModel.DataAnnotations;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [HttpGet(nameof(GetUser))]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<User> GetUser([Required] Guid id)
    {
        var result = new User
        {
            Id = id,
            FirstName = "John",
            LastName = "Doe",
        };
        return Ok(result);
    }

    [HttpPost(nameof(PostUser))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult PostUser([Required] User user)
    {
        return Ok();
    }

    [HttpPatch(nameof(PatchUser))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult PatchUser([Required] User user)
    {
        return Ok();
    }

    [HttpDelete(nameof(DeleteUser))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult DeleteUser([Required] Guid id)
    {
        return Ok();
    }
}
