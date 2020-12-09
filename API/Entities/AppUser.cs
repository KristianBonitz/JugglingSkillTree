namespace jugglingSkillTree.API.Entities
{
    public class AppUser
    {
		public int Id {get; set;}
		public string UserName {get; set;}

        //Having a password is optional!
        //However chat functionality is disable without one.
        public byte[] PasswordHash { get; set; } = null;
        public byte[] PasswordSalt { get; set; } = null;
    }
}