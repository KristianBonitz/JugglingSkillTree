using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}
