using System;
using jugglingSkillTree.API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
