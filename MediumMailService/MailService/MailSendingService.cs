using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace MediumMailService.MailService
{
    public class MailSendingService
    {
        private readonly TokenOptionModel _mailOptions;

        public MailSendingService(IOptions<TokenOptionModel> mailOptions)
        {
            _mailOptions = mailOptions.Value;
        }

        public async Task<HttpResponseMessage> SendMail<T>(string url, T model)
        {
            using var httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", GetMailAccessToken());
            return await httpClient.PostAsync(_mailOptions.MailServiceBaseUrl + url, model, new JsonMediaTypeFormatter());
        }

        private string GetMailAccessToken()
        {
            var accessTokenExpiration = DateTime.Now.AddMinutes(_mailOptions.TokenExpiration);
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_mailOptions.TokenSecurityKey));

            JwtSecurityToken jwtSecurityToken = new JwtSecurityToken(
               issuer: _mailOptions.Issuer,
               expires: accessTokenExpiration,
               notBefore: DateTime.Now,
               signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256));

            return new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
        }
    }
}
