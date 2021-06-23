using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace API.DTOs
{
    public class LoginDto
    {
        public string Username {get; set;}
        public string Password {get; set;}
    }
}