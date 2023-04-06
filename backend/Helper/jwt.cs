using Microsoft.IdentityModel.Tokens;

namespace backend.JWT;

public class JwtOptions
{
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public SigninCredentials SigninCredentials { get; set; }
public string Expiration { get; set; }
}