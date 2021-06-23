using System.ComponentModel.DataAnnotations;
using System.Security.Policy;

namespace API.DTOs
{
    public class RegisterDtos
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}